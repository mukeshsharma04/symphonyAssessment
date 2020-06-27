import React from "react";
import styled from "@emotion/styled";
// components
import InputLabel from "../../molecules/InputLabel";
// styles.
import styles from "./userInputGroup.styles";
const Container = styled("div")(styles.container);

const UserInputGroup = ({ handleDelimiterData, handleLinesData }) => (
  <Container>
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
  </Container>
);

export default UserInputGroup;
