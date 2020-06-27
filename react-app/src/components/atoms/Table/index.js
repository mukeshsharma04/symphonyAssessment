import React from "react";
import styled from "@emotion/styled";
// styles
import styles from "./table.styles";
const TableCell = styled("td")(styles.cell);
const TableContainer = styled("table")(styles.container);

const renderCellData = cells =>
  Array.isArray(cells) ? (
    cells.map(
      (cell, index) => index < 4 && <TableCell key={index}>{cell}</TableCell>
    )
  ) : (
    <TableCell>{cells}</TableCell>
  );

const renderRowData = rowData => {
  return rowData && rowData.length
    ? rowData.map((row, index) => <tr key={index}>{renderCellData(row)}</tr>)
    : null;
};

const Table = ({ data }) => (
  <TableContainer>
    <tbody>{renderRowData(data)}</tbody>
  </TableContainer>
);

export default Table;
