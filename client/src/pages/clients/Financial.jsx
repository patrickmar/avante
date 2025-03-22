import React from "react";
import FinancialSector from "../../components/FinancialSector";
import Union from "../../components/Union";
import Stanbic from "../../components/Stanbic";
import InsuraceBroker from "../../components/InsuraceBroker";
import Pension from "../../components/Pension";
import Diamond from "../../components/Diamond";
import United from "../../components/United";
import Access from "../../components/Access";
import FidelityClient from "../../components/FidelityClient";
import SterlingBank from "../../components/SterlingBank";

const Financial = () => {
  return (
    <div>
      <FinancialSector />
      <SterlingBank />
      <FidelityClient />
      <Union />
      <Stanbic />
      <InsuraceBroker />
      <Pension />
      <Diamond />
      <United />
      <Access />
    </div>
  );
};

export default Financial;
