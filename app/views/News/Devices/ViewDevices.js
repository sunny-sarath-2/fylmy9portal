import React, { Component } from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
import TableStructure from "./TabelStructure";

const ViewDevices = props => {
  return <CustomTable columns={TableStructure} />;
};

export default ViewDevices;
