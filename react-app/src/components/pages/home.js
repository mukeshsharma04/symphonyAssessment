import React from "react";
import styled from "@emotion/styled";
// components.
import UserInputGroup from "../organisms/UserInputGroup";
import Table from "../atoms/Table";
import DropZone from "../molecules/DropZone";
// styles
import styles from "./home.styles";
const Container = styled("div")(styles.container);

class Home extends React.Component {
  state = {
    delimiter: ",",
    lines: 2
  };

  setDelimiterData = value => {
    const {
      fileUpload: { fileData },
      actions: { updateFileData }
    } = this.props;
    this.setState({ delimiter: value }, () => {
      const { delimiter } = this.state;
      return fileData && delimiter ? updateFileData(fileData, delimiter) : null;
    });
  };

  setLinesData = value => this.setState({ lines: value });

  render() {
    const {
      fileUpload: { fileData },
      actions: { initFileUpload }
    } = this.props;

    return (
      <Container>
        <DropZone setFileData={data => initFileUpload(data)} />
        <UserInputGroup
          handleDelimiterData={this.setDelimiterData}
          handleLinesData={this.setLinesData}
        />
        <Table data={fileData} />
      </Container>
    );
  }
}
export default Home;
