import { FC } from "react";
import styled from "styled-components";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Define styled components
const TableContainer = styled.div`
  margin-top: 50px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
`;

const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 5px;

  .anticon {
    font-size: 18px;
  }

  .edit-icon {
    color: #1a54eb;
  }

  .delete-icon {
    color: red;
  }
`;

const StatusDiv = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.status) {
      case "active":
        return "#e0f7fa"; // Light cyan for active
      case "passive":
        return "#f1f8e9"; // Light green for passive
      case "pending":
        return "#fff3e0"; // Light orange for pending
      default:
        return "#ffffff"; // Default background
    }
  }};
  color: ${(props) => (props.status === "passive" ? "#000" : "#333")};
  cursor: default;
`;

const columns = [
  { title: "Client Name", dataIndex: "clientName", key: "clientName" },
  { title: "License Key", dataIndex: "licenseKey", key: "licenseKey" },
  { title: "Phone Limit", dataIndex: "phoneLimit", key: "phoneLimit" },
  { title: "Usage Period", dataIndex: "usagePeriod", key: "usagePeriod" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <StatusDiv status={status}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </StatusDiv>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <div style={{ display: "flex" }}>
        <ActionIcon className="edit-icon">
          <EditOutlined />
        </ActionIcon>
        <ActionIcon className="delete-icon">
          <DeleteOutlined />
        </ActionIcon>
      </div>
    ),
  },
];

// Sample data for the table
const data = [
  {
    key: "1",
    clientName: "Client A",
    licenseKey: "ABCD1234",
    phoneLimit: 100,
    usagePeriod: "2024-01-01 to 2024-12-31",
    status: "active",
  },
  {
    key: "2",
    clientName: "Client B",
    licenseKey: "EFGH5678",
    phoneLimit: 50,
    usagePeriod: "2024-01-01 to 2024-06-30",
    status: "pending",
  },
  // Add more rows as needed
];

const LicensesTable: FC = () => {
  return (
    <TableContainer>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
      />
    </TableContainer>
  );
};

export default LicensesTable;
