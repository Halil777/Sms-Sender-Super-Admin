import { FC } from "react";
import styled from "styled-components";
import { Table, Modal } from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"; // Import icons from react-icons
import { useTranslation } from "react-i18next";

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

  .edit-icon {
    color: #1a54eb;
    font-size: 18px;
  }

  .delete-icon {
    color: red;
    font-size: 18px;
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

const LicensesTable: FC = () => {
  const { t } = useTranslation();

  const handleDelete = (key: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log(`Delete record with key: ${key}`);
        // Implement delete logic here
      },
    });
  };

  const columns = [
    {
      title: t("license.clientName"),
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: t("license.licenseKey"),
      dataIndex: "licenseKey",
      key: "licenseKey",
    },
    {
      title: t("license.phoneLimit"),
      dataIndex: "phoneLimit",
      key: "phoneLimit",
    },
    {
      title: t("license.usagePeriod"),
      dataIndex: "usagePeriod",
      key: "usagePeriod",
    },
    {
      title: t("license.status"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <StatusDiv status={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </StatusDiv>
      ),
    },
    {
      title: t("license.action"),
      key: "action",
      render: (_: any, record: any) => (
        <div style={{ display: "flex" }}>
          <ActionIcon className="edit-icon">
            <AiFillEdit className="edit-icon" />
          </ActionIcon>
          <ActionIcon
            className="delete-icon"
            onClick={() => handleDelete(record.key)}
          >
            <AiFillDelete className="delete-icon" />
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
