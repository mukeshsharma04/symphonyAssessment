import React from "react";

const renderCellData = cells =>
  Array.isArray(cells) ? (
    cells.map((cell, index) => (
      <td style={{ border: "1px solid black" }} key={index}>
        {cell}
      </td>
    ))
  ) : (
    <td style={{ border: "1px solid black" }}>{cells}</td>
  );

const renderRowData = rowData => {
  return rowData && rowData.length
    ? rowData.map((row, index) => {
        console.log("ROW", row.length);
        return <tr key={index}>{renderCellData(row)}</tr>;
      })
    : null;
};

const Table = ({ data }) => (
  <table style={{ width: "100%" }}>
    <tbody>{renderRowData(data)}</tbody>
  </table>
);

export default Table;
