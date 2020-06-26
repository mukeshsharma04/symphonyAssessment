import React from "react";
import InputLabel from "../../molecules/InputLabel";

const UserInputGroup = ({ handleDelimiterData, handleLinesData }) => (
  <div style={{ display: "flex" }}>
    <InputLabel
      labelText="Delimiter"
      inputType="text"
      handleInputChange={handleDelimiterData}
    />
    <InputLabel
      labelText="Lines"
      inputType="text"
      handleInputChange={handleLinesData}
    />
  </div>
);

export default UserInputGroup;
