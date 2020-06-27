import React from "react";
import styled from "@emotion/styled";

// styles
import styles from "./input.styles";

const InputConatiner = styled("input")(styles.input);
const handleInputChange = (event, callback) => {
  event.preventDefault();
  callback(event.target.value);
};

const handleFileInput = (event, callback) => {
  event.preventDefault();
  callback(event.target.files);
};

const Input = ({ type, name, changeHandler }) => (
  <InputConatiner
    type={type}
    name={name}
    onChange={event =>
      type === "file"
        ? handleFileInput(event, changeHandler)
        : handleInputChange(event, changeHandler)
    }
  />
);

export default Input;
