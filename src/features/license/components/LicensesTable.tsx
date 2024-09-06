import { FC } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { StyledTable } from "../../sms-logs/style/SmsStyle";

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
      render: (_: unknown, record: any) => (
        <>
          <FaEdit
            style={{ color: "blue", cursor: "pointer", marginRight: 10 }}
          />
          <FaTrash
            onClick={() => handleDelete(record.key)}
            style={{ color: "red", cursor: "pointer" }}
          />
        </>
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
  ];

  return <StyledTable columns={columns} dataSource={data} rowKey="key" />;
};

export default LicensesTable;
