import { FC } from "react";
import styled from "styled-components";
import { Table, Button } from "antd";
import { AiFillDelete } from "react-icons/ai"; // Import delete icon

// Styled container for the table
const TableContainer = styled.div`
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  background-color: #ffffff;
  margin-top: 50px;
  .ant-table-thead > tr > th {
    font-weight: bold;
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    text-align: center;
    background-color: #ffffff;
  }

  .delete-icon {
    color: red;
    cursor: pointer;
    font-size: 18px;
  }
`;

const BlacklistTable: FC = () => {
  // Define static data for the table
  const dataSource = [
    {
      key: "1",
      word: "example",
      identifiedCases: "Case 1, Case 2",
      date: "2024-08-23",
    },
    {
      key: "2",
      word: "test",
      identifiedCases: "Case 3",
      date: "2024-08-22",
    },
    // Add more data as needed
  ];

  // Define table columns
  const columns = [
    { title: "Word", dataIndex: "word", key: "word" },
    {
      title: "Anyklanan yagdaylar",
      dataIndex: "identifiedCases",
      key: "identifiedCases",
    },
    { title: "Doredilen senesi", dataIndex: "date", key: "date" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button
          icon={<AiFillDelete className="delete-icon" />}
          onClick={() => handleDelete(record.key)}
          type="text"
        />
      ),
    },
  ];

  // Handle delete action
  const handleDelete = (key: string) => {
    console.log(`Delete record with key: ${key}`);
    // Implement delete logic here
  };

  return (
    <TableContainer>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey="key"
      />
    </TableContainer>
  );
};

export default BlacklistTable;
