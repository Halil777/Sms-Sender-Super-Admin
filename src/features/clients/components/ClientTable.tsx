import { FC, useState } from "react";
import { Modal } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import { StyledTable } from "../../sms-logs/style/SmsStyle"; // Use your StyledTable here
import { useTranslation } from "react-i18next";

// Columns definition with action buttons (Edit and Delete)
const columns = (onDelete: (record: any) => void) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Client Name",
    dataIndex: "clientName",
    key: "clientName",
  },
  {
    title: "Phone Count",
    dataIndex: "phoneCount",
    key: "phoneCount",
  },
  {
    title: "Usage Period",
    dataIndex: "usefulDuration",
    key: "usefulDuration",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <span
        style={{
          backgroundColor:
            status === "Active"
              ? "#219653"
              : status === "Paused"
              ? "#747474"
              : "#F80000",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "20px",
        }}
      >
        {status}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_: unknown, record: any) => (
      <>
        <FaEdit style={{ color: "blue", cursor: "pointer", marginRight: 10 }} />
        <FaTrash
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(record)}
        />
      </>
    ),
  },
];

// Static data for the table
const initialData = [
  {
    key: "1",
    name: "John Doe",
    clientName: "Doe Enterprises",
    phoneCount: "Android - 5",
    usefulDuration: "2 years",
    status: "Active",
  },
  {
    key: "2",
    name: "Jane Smith",
    clientName: "Smith Co.",
    phoneCount: "iOS - 3",
    usefulDuration: "1 year",
    status: "Passive",
  },
  // Add more data as needed
];

const ClientTable: FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);

  // Handle delete confirmation modal
  const showDeleteModal = (record: any) => {
    setSelectedClient(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setData(data.filter((item) => item.key !== selectedClient.key));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StyledTable columns={columns(showDeleteModal)} dataSource={data} />

      <Modal
        title="Delete Client"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>{t("clients.deleteConfirm", { name: selectedClient?.name })}</p>
      </Modal>
    </>
  );
};

export default ClientTable;
