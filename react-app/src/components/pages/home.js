import React from "react";
import UserInputGroup from "../organisms/UserInputGroup";
import Table from "../atoms/Table";
import DropZone from "../molecules/DropZone";

class Home extends React.Component {
  state = {
    fileData: null,
    delimiter: ";",
    lines: 2
  };

  setFileData = data => this.setState({ fileData: data });

  setDelimiterData = value => {
    const { fileData } = this.state;
    this.setState(
      { delimiter: value },
      () => fileData && this.state.delimiter && this.updateFileData()
    );
  };

  updateFileData = () => {
    const { fileData, delimiter } = this.state;
    let updatedData = fileData.map(line => {
      console.log("line", line);
      if (delimiter && !Array.isArray(line)) return line.split(delimiter);
      return line;
    });

    this.setState({ fileData: updatedData });
  };

  setLinesData = value => this.setState({ lines: value });

  render() {
    const { fileData } = this.state;
    console.log("STATE", this.state);
    return (
      <div style={{ padding: "50px" }}>
        <DropZone setFileData={this.setFileData} />
        <UserInputGroup
          handleDelimiterData={this.setDelimiterData}
          handleLinesData={this.setLinesData}
        />
        <Table data={fileData} />
      </div>
    );
  }
}
export default Home;
