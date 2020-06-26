import React from "react";
import Input from "../../atoms/Input";

const DropZone = ({ setFileData }) => (
  <div>
    <Input type="file" changeHandler={setFileData} />
  </div>
);

export default DropZone;
