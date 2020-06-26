import React from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const InputLabel = ({ labelText, inputType, inputName, handleInputChange }) => (
  <div style={{ margin: "5px" }}>
    <Label text={labelText} />
    <Input
      type={inputType}
      name={inputName}
      changeHandler={handleInputChange}
    />
  </div>
);

export default InputLabel;
