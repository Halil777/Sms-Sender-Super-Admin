import { FC } from "react";
import styled from "styled-components";
import { Table, Button, Modal } from "antd";
import { AiFillDelete } from "react-icons/ai"; // Import delete icon
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
  ];

  const columns = [
    {
      title: t("blacklist.word"),
      dataIndex: "word",
      key: "word",
    },
    {
      title: t("blacklist.identifiedCases"),
      dataIndex: "identifiedCases",
      key: "identifiedCases",
    },
    {
      title: t("blacklist.date"),
      dataIndex: "date",
      key: "date",
    },
    {
      title: t("blacklist.action"),
      key: "action",
      render: (_: any, record: any) => (
        <Button
          icon={<AiFillDelete className="delete-icon" />}
          onClick={() => showDeleteConfirm(record.key)}
          type="text"
        />
      ),
    },
  ];

  // Function to show the delete confirmation popup
  const showDeleteConfirm = (key: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(key);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // Handle delete action
  const handleDelete = (key: string) => {
    console.log(`Delete record with key: ${key}`);
    // Implement delete logic here, such as updating state or making an API call
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
