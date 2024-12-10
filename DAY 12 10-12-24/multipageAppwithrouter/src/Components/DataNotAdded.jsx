import React from "react";
import Homepage from "./Homepage";

const DataNotAdded = ({ msg }) => {
  return (
    <div>
      <p>{msg}</p>
      <Homepage></Homepage>
    </div>
  );
};

export default DataNotAdded;
