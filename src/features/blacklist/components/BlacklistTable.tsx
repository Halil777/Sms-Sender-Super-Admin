import { FC, useState } from "react";
import { Modal } from "antd";
import { FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { StyledTable } from "../../sms-logs/style/SmsStyle";

const BlacklistTable: FC = () => {
  const { t } = useTranslation();

  // Initial data for the blacklist
  const initialData = [
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

  const [data, setData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  // Function to show delete modal
  const showDeleteModal = (record: any) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  // Handle the deletion confirmation
  const handleDelete = () => {
    setData(data.filter((item) => item.key !== selectedRecord.key));
    setIsModalVisible(false);
  };

  // Handle modal cancel
  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      render: (_: unknown, record: any) => (
        <>
          <FaTrash
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => showDeleteModal(record)}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <StyledTable dataSource={data} columns={columns} rowKey="key" />

      <Modal
        title={t("blacklist.confirmDeletion")}
        visible={isModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText={t("blacklist.delete")}
        cancelText={t("blacklist.cancel")}
      >
        <p>
          {t("blacklist.confirmDeleteMessage", {
            word: selectedRecord?.word,
          })}
        </p>
      </Modal>
    </>
  );
};

export default BlacklistTable;
