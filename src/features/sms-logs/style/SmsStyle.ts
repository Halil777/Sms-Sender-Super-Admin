import { Table } from "antd";
import styled from "styled-components";

// Styled component for the table container
export const TableContainer = styled.div`
  margin-top: 50px; /* Adjust this value as needed */
`;

// Styled component for the table
export const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
    text-align: center;
    background-color: transparent; /* Remove header background color */
  }

  .ant-table-tbody > tr > td {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
    text-align: center;
  }
`;
