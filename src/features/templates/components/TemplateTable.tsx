import { FC, useState } from "react";
import { Modal } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import { StyledTable } from "../../sms-logs/style/SmsStyle";

const columns = (onDelete: (record: any) => void) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ulanyldy",
    dataIndex: "used",
    key: "used",
  },
  {
    title: "Custom Fields",
    dataIndex: "customFields",
    key: "customFields",
  },
  {
    title: "Doredildi",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
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
    name: "Template 1",
    used: "Yes",
    customFields: "Field A, Field B",
    createdAt: "2023-09-01",
    status: "Active",
  },
  {
    key: "2",
    name: "Template 2",
    used: "No",
    customFields: "Field C, Field D",
    createdAt: "2023-09-02",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Template 3",
    used: "Yes",
    customFields: "Field E",
    createdAt: "2023-09-03",
    status: "Pending",
  },
];

const TemplateTable: FC = () => {
  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  // Handle delete confirmation modal
  const showDeleteModal = (record: any) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setData(data.filter((item) => item.key !== selectedRecord.key));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StyledTable columns={columns(showDeleteModal)} dataSource={data} />

      <Modal
        title="Confirm Deletion"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete "{selectedRecord?.name}"?</p>
      </Modal>
    </>
  );
};

export default TemplateTable;
