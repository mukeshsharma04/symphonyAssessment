import React from "react";

const handleInputChange = (event, callback) => {
  event.preventDefault();
  const value = event.target.value;
  callback(value);
};

const handleFileInput = (event, callback) => {
  const file = event.target.files;
  if (file.length) {
    const reader = new FileReader();
    reader.readAsText(file[0], "UTF-8");
    reader.onload = evt => {
      const contents = evt.target.result;
      const lines = contents.split("\n");
      callback(lines);
    };
    // to load file with same file name, we have to reset
    event.target.value = "";
  }
};

const Input = ({ type, name, changeHandler }) => (
  <input
    type={type}
    name={name}
    onChange={event =>
      type === "file"
        ? handleFileInput(event, changeHandler)
        : handleInputChange(event, changeHandler)
    }
    style={{ padding: "1px", margin: "10px" }}
  />
);

export default Input;
