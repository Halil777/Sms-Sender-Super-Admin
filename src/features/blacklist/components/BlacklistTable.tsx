import { FC, useState } from "react";
import { Modal } from "antd";
import { FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import useSWR, { mutate } from "swr";
import axios from "axios";
import styled from "styled-components";

interface BannedWord {
  id: number;
  word: string;
  reason: string;
  created_date: string; // Keeping as string to handle ISO date format
  updated_date: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// Styled components for the table
const StyledTableContainer = styled.div`
  margin: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const StyledTable = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

const StyledRow = styled.div`
  display: table-row;
`;

const StyledCell = styled.div<{ isHeader?: boolean }>`
  display: table-cell;
  padding: 12px;
  text-align: center;
  border: 1px solid #eaeaea;
  background-color: ${({ isHeader }) => (isHeader ? "#f5f5f5" : "#ffffff")};
  color: ${({ isHeader }) => (isHeader ? "#333" : "#555")};
  font-weight: ${({ isHeader }) => (isHeader ? "bold" : "normal")};

  &:last-child {
    padding: 0;
  }

  &:hover {
    background-color: ${({ isHeader }) => (isHeader ? "#f5f5f5" : "#f0f0f0")};
  }
`;

const ActionCell = styled(StyledCell)`
  cursor: pointer;

  &:hover {
    color: #ff4d4f; // Change trash icon color on hover
  }
`;

const BlacklistTable: FC = () => {
  const { t } = useTranslation();

  // Fetch banned words data from your API
  const { data, error } = useSWR<BannedWord[]>(
    "http://localhost:3000/banned-words",
    fetcher
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<BannedWord | null>(null);

  const showDeleteModal = (record: BannedWord) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleDelete = async () => {
    if (selectedRecord) {
      try {
        await axios.delete(
          `http://localhost:3000/banned-words/${selectedRecord.id}`
        );
        // Optionally refetch the data
        mutate("http://localhost:3000/banned-words"); // Re-fetch data after deletion
      } catch (error) {
        console.error("Error deleting the record", error);
      }
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle loading and error states
  if (error) return <div>{t("blacklist.errorLoadingData")}</div>;
  if (!data) return <div>{t("blacklist.loading")}</div>;

  // Date formatting function
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16).replace("T", " "); // Formats to 'YYYY-MM-DD HH:mm'
  };

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledRow>
          <StyledCell isHeader>{t("blacklist.word")}</StyledCell>
          <StyledCell isHeader>{t("blacklist.identifiedCases")}</StyledCell>
          <StyledCell isHeader>{t("blacklist.date")}</StyledCell>
          <StyledCell isHeader>{t("blacklist.action")}</StyledCell>
        </StyledRow>
        {data.map((record) => (
          <StyledRow key={record.id}>
            <StyledCell>{record.word}</StyledCell>
            <StyledCell>{record.reason}</StyledCell>
            <StyledCell>{formatDate(record.created_date)}</StyledCell>
            <ActionCell>
              <FaTrash onClick={() => showDeleteModal(record)} />
            </ActionCell>
          </StyledRow>
        ))}
      </StyledTable>

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
    </StyledTableContainer>
  );
};

export default BlacklistTable;
