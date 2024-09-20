import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as XLSX from "xlsx";

const ActivitityResult = () => {
  const location = useLocation();
  const activities = Array.isArray(location.state?.activities)
    ? location.state.activities
    : [];

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const activitiesPerPage = 50; // Number of activities per page (set to 100)

  // Calculate total pages
  const totalPages = Math.ceil(activities.length / activitiesPerPage);

  // Get current activities for the page
  const currentActivities = activities.slice(
    (currentPage - 1) * activitiesPerPage,
    currentPage * activitiesPerPage
  );

  // Function to handle export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      activities.map((activity) => ({
        Mode: activity.mode?.value || "-",
        Type: activity.type?.displayValue || "-",
        "Activity ID": activity.id || "-",
        Subject: activity.subject || "-",
        "Assigned to": activity.status?.assigned?.user?.name || "-",
        "Created on": activity.created?.date || "-",
        "Due on": activity.lastModified?.date || "-",
        Priority: activity.priority || "-",
        Substatus: activity.status?.substatus?.displayValue || "-",
        "Case ID": activity.case?.id || "-",
        "Queue name": activity.queue?.name || "-",
        "Department name": activity.department?.name || "-",
        "Reason for last action":
          activity.status?.activityFolder?.name?.displayValue || "-",
        "Contact point": ` ${
          activity.customer?.contactPersons?.contactPerson[0]?.contactPoints
            ?.contactPoint[0]?.type?.email?.emailAddress || "-"
        }`, // Combined field
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Activities");

    // Exporting the file
    XLSX.writeFile(workbook, "activities.xlsx");
  };

  // Function to go to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Function to go to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold ml-12">Activities</h1>
      <div className="flex items-center mb-4 space-x-4 ml-4">
        <button
          onClick={exportToExcel}
          className="bg-[#25aae1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Export to Excel
        </button>

        {/* Pagination Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`bg-[#25aae1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`bg-[#25aae1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
          <p className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Mode
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Activity ID
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned to (username)
              </th>
              <th scope="col" className="px-6 py-3">
                Created on
              </th>
              <th scope="col" className="px-6 py-3">
                Due on
              </th>
              <th scope="col" className="px-6 py-3">
                Priority
              </th>
              <th scope="col" className="px-6 py-3">
                Substatus
              </th>
              <th scope="col" className="px-6 py-3">
                Case ID
              </th>
              <th scope="col" className="px-6 py-3">
                Queue name
              </th>
              <th scope="col" className="px-6 py-3">
                Department name
              </th>
              <th scope="col" className="px-6 py-3">
                Reason for last action
              </th>
              <th scope="col" className="px-6 py-3">
                Contact point
              </th>
            </tr>
          </thead>
          <tbody>
            {currentActivities.length === 0 ? (
              <tr>
                <td colSpan="14" className="px-6 py-4 text-center">
                  No activities found.
                </td>
              </tr>
            ) : (
              currentActivities.map((activity) => (
                <tr
                  key={activity.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">{activity.mode?.value || "-"}</td>
                  <td className="px-6 py-4">
                    {activity.type?.displayValue || "-"}
                  </td>
                  <td className="px-6 py-4">{activity.id || "-"}</td>
                  <td className="px-6 py-4">{activity.subject || "-"}</td>
                  <td className="px-6 py-4">
                    {activity.status?.assigned?.user?.name || "-"}
                  </td>
                  <td className="px-6 py-4">{activity.created?.date || "-"}</td>
                  <td className="px-6 py-4">
                    {activity.lastModified?.date || "-"}
                  </td>
                  <td className="px-6 py-4">{activity.priority || "-"}</td>
                  <td className="px-6 py-4">
                    {activity.status?.substatus?.displayValue || "-"}
                  </td>
                  <td className="px-6 py-4">{activity.case?.id || "-"}</td>
                  <td className="px-6 py-4">{activity.queue?.name || "-"}</td>
                  <td className="px-6 py-4">
                    {activity.department?.name || "-"}
                  </td>
                  <td className="px-6 py-4">
                    {activity.status?.activityFolder?.name?.displayValue || "-"}
                  </td>
                  <td className="px-6 py-4">
                    {activity.customer?.contactPersons?.contactPerson[0]
                      ?.contactPoints?.contactPoint[0]?.type?.email
                      ?.emailAddress || "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivitityResult;
