import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ActivityList = () => {
  const navigate = useNavigate();

  // State to manage inputs
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(""); // For date range
  const [operator, setOperator] = useState("="); // Default operator
  const [setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [caseId, setCaseId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [activityType, setActivityType] = useState("");
  const [queueId, setQueueId] = useState("");
  const [substatus, setSubstatus] = useState("");
  const [activityId, setActivityId] = useState("");

  // Handle input changes
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);
  const handleCaseIdChange = (e) => setCaseId(e.target.value);
  const handleCustomerIdChange = (e) => setCustomerId(e.target.value);
  const handleActivityTypeChange = (e) => setActivityType(e.target.value);
  const handleQueueIdChange = (e) => setQueueId(e.target.value);
  const handleSubstatusChange = (e) => setSubstatus(e.target.value);
  const handleOperatorChange = (e) => setOperator(e.target.value);
  const handleActivityIdChange = (e) => setActivityId(e.target.value);

  // Utility function to format dates to ISO strings
  const formatDateToISO = (date) => (date ? new Date(date).toISOString() : "");

  // Handle search button click
  const handleSearch = async () => {
    setIsLoading(true); // Show loading state

    const formattedStartDate = formatDateToISO(startDate); // Format the start date
    const formattedEndDate = formatDateToISO(endDate); // Format the end date

    let query = "";
    let url = "";
    const sessionId = localStorage.getItem("egainSession");
    let allActivities = [];
    let morePages = true;
    let pageNum = 1;
    const pageSize = 25;

    // Fetch activity by ID
    if (activityId.trim()) {
      // Direct lookup for specific activity
      url = `https://sterlingbank.egain.cloud/system/ws/v12/interaction/activity/${activityId.trim()}`;
      console.log("Direct lookup URL:", url);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "en-US",
            "x-egain-session": sessionId || "",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Direct activity lookup response:", data);

          const activities = Array.isArray(data.activity)
            ? data.activity
            : [data.activity];
          setActivities(activities);

          // Navigate to the results page with the retrieved activities
          navigate("/egain/activity-result", { state: { activities } });
        } else {
          const errorData = await response.json();
          console.error(
            "Failed to fetch specific activity:",
            response.status,
            errorData
          );
          toast.error(
            `Error fetching activity: ${errorData.message || response.status}`
          );
        }
      } catch (error) {
        console.error("Error fetching specific activity:", error);
        toast.error("Error fetching specific activity.");
      }

      setIsLoading(false);
      return; // Exit after direct lookup
    }

    // Base URL for search mode (if no activityId)
    const baseUrl =
      "https://sterlingbank.egain.cloud/system/ws/v12/interaction/activity?";

    // Handle substatus-specific filtering
    if (substatus === "assigned:in_progress" || substatus === "open") {
      // Format the substatus and apply the correct lastModifiedDate filter
      query += `status=${substatus}`;
      if (formattedStartDate) {
        query += `&lastModifiedDate=[${formattedStartDate},${
          formattedEndDate || ""
        }]`;
      } else {
        console.error("Start date is required for this substatus.");
        toast.error("Start date is required for the selected substatus.");
        setIsLoading(false);
        return;
      }
    } else if (substatus === "done") {
      // Apply completion date for "completed:done" substatus
      query += `status=${substatus}`;
      if (formattedStartDate) {
        query += `&completionDate=[${formattedStartDate},${
          formattedEndDate || ""
        }]`;
      } else {
        console.error("Start date is required for completion status.");
        toast.error("Start date is required for 'completed-done' substatus.");
        setIsLoading(false);
        return;
      }
    } else {
      // Handle other substatus and filters normally
      if (substatus) query += `status=${substatus}`;
      if (startDate || endDate) {
        if (operator === "between") {
          query += `&createdDate=[${formattedStartDate},${formattedEndDate}]`;
        } else if (operator === "not between") {
          query += `&createdDate!=[${formattedStartDate},${formattedEndDate}]`;
        } else if (startDate) {
          query += `&createdDate${operator}${formattedStartDate}`;
        }
      }
    }

    // Additional filters (caseId, customerId, queueId, activityType)
    if (caseId) query += `${query ? "&" : ""}case=${caseId}`;
    if (customerId) query += `${query ? "&" : ""}customer=${customerId}`;
    if (queueId) query += `${query ? "&" : ""}queue=${queueId}`;
    if (activityType) query += `${query ? "&" : ""}type=${activityType}`;

    // Final URL construction for search
    url = `${baseUrl}${query}&$sort=createdDate&$attribute=created`;
    console.log("Search URL:", url); // Log the final URL to debug

    // Fetch paginated activities
    while (morePages && allActivities.length < 5000) {
      const pageUrl = `${url}&$pagesize=${pageSize}&$pagenum=${pageNum}`;

      try {
        const response = await fetch(pageUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "en-US",
            "x-egain-session": sessionId || "",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("API Response Data:", data);

          const activities = Array.isArray(data.activity) ? data.activity : [];
          allActivities = [...allActivities, ...activities];

          if (activities.length < pageSize || allActivities.length >= 5000) {
            morePages = false;
          } else {
            pageNum += 1;
          }
        } else if (response.status === 401) {
          const errorData = await response.json();
          if (errorData.code === "401-101") {
            toast.error("Session expired or invalid. Redirecting to login...");
            navigate("/egain/login");
            return;
          }
        } else {
          const errorData = await response.json();
          console.error(
            "Failed to fetch activities:",
            response.status,
            errorData
          );
          toast.error(
            `Error fetching activities: ${errorData.message || response.status}`
          );
          morePages = false;
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
        toast.error("Error fetching activities.");
        morePages = false;
      }
    }

    if (allActivities.length > 5000) {
      allActivities = allActivities.slice(0, 5000); // Limit to 5000 results
    }

    setActivities(allActivities); // Set activities state
    navigate("/egain/activity-result", {
      state: { activities: allActivities },
    });
    setIsLoading(false); // Reset loading state
  };

  return (
    <div className="mb-8">
      <div className="flex items-center">
        <h1 className="text-2xl ml-12 py-4 font-bold">Search Activity</h1>
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className={`px-12 py-2 mx-24 rounded-full mb-4 ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#25aae1]"
          } text-white`}
        >
          {isLoading ? "Loading..." : "Search"}
        </button>
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Type
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Attribute
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Operator
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* Row for Activity ID */}
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Activity</td>
              <td className="py-4 px-6 border-b border-gray-200 truncate">
                Activity ID
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <select
                  value={operator}
                  onChange={handleOperatorChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="=">=</option>
                  <option value="!=">!=</option>
                </select>
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <input
                  type="text"
                  className="block w-full bg-white text-gray-700 py-1 px-2 rounded-full text-xs focus:outline-none"
                  value={activityId}
                  onChange={handleActivityIdChange}
                  placeholder="Activity ID"
                />
              </td>
            </tr>

            {/* Row for Customer ID */}
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Activity</td>
              <td className="py-4 px-6 border-b border-gray-200 truncate">
                Customer ID
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <select
                  value={operator}
                  onChange={handleOperatorChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="=">=</option>
                  <option value="!=">!=</option>
                </select>
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <input
                  type="text"
                  className="block w-full bg-white text-gray-700 py-1 px-2 rounded-full text-xs focus:outline-none"
                  value={customerId}
                  onChange={handleCustomerIdChange}
                  placeholder="Customer ID"
                />
              </td>
            </tr>
            {/* Row for Case ID */}
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Activity</td>
              <td className="py-4 px-6 border-b border-gray-200 truncate">
                Case ID
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <select
                  value={operator}
                  onChange={handleOperatorChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="=">=</option>
                  <option value="!=">!=</option>
                </select>
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <input
                  type="text"
                  className="block w-full bg-white text-gray-700 py-1 px-2 rounded-full text-xs focus:outline-none"
                  value={caseId}
                  onChange={handleCaseIdChange}
                  placeholder="Case ID"
                />
              </td>
            </tr>
            {/* Row for Created On */}
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Activity</td>
              <td className="py-4 px-6 border-b border-gray-200 truncate">
                Created On
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <select
                  value={operator}
                  onChange={handleOperatorChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="=">=</option>
                  <option value="!=">!=</option>
                  <option value="<">&lt;</option>
                  <option value="<=">&lt;=</option>
                  <option value=">">&gt;</option>
                  <option value=">=">&gt;=</option>
                  <option value="between">between</option>
                  <option value="not between">not between</option>
                </select>
                <p className="text-xs text-red-500">
                  Can only search with between option
                </p>
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <input
                  type="date"
                  className="block w-full bg-white text-gray-700 py-1 px-2 rounded-full text-xs focus:outline-none"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
                {operator === "between" || operator === "not between" ? (
                  <input
                    type="date"
                    className="block w-full bg-white text-gray-700 py-1 px-2 rounded-full text-xs focus:outline-none mt-2"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                ) : null}
              </td>
            </tr>
            {/* Row for Queue ID */}
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Activity</td>
              <td className="py-4 px-6 border-b border-gray-200 truncate">
                Queue ID
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <select
                  value={operator}
                  onChange={handleOperatorChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="exactly">Exactly</option>
                  <option value="!=">!=</option>
                  <option value="begin with">Begin with</option>
                  <option value="contain">Contain</option>
                </select>
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <input
                  type="text"
                  className="block w-full bg-white text-gray-700 py-1 px-2 rounded-full text-xs focus:outline-none"
                  value={queueId}
                  onChange={handleQueueIdChange}
                  placeholder="Queue ID"
                />
              </td>
            </tr>
            {/* Row for Activity Type */}
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Activity</td>
              <td className="py-4 px-6 border-b border-gray-200 truncate">
                Activity Type
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <input
                  type="text"
                  className="block w-full bg-white text-gray-700 py-1 px-2 rounded-full text-xs focus:outline-none"
                  value={queueId}
                  onChange={handleQueueIdChange} // Handle input change for queue ID
                  placeholder="Enter Queue ID"
                />
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <select
                  value={activityType}
                  onChange={handleActivityTypeChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Activity Type</option>
                  <option value="email">Email</option>
                  <option value="chat">Chat</option>
                  <option value="social">Social</option>
                </select>
              </td>
            </tr>
            {/* Row for Substatus */}
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Activity</td>
              <td className="py-4 px-6 border-b border-gray-200 truncate">
                Substatus
              </td>
              <td className="py-4 px-6 border-b border-gray-200">
                <select
                  value={substatus}
                  onChange={handleSubstatusChange}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Substatus</option>
                  <option value="open">open</option>
                  <option value="assigned:in_progress">
                    Assigned-in Progress
                  </option>
                  <option value="completed:done">Completed-done</option>
                  {/* Add more substatus options if needed */}
                </select>
              </td>
            </tr>
            {/* Date fields only shown for relevant substatus */}
            {(substatus === "open" ||
              substatus === "assigned:in_progress" ||
              substatus === "done") && (
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">Activity</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  Last Modified Date
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <input
                      type="date"
                      className="block bg-white text-gray-700 py-1 px-2 rounded-full text-xs focus:outline-none"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityList;
