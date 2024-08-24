import { FC, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Table container with scrollable body
const TableContainer = styled.div`
  overflow: auto;
  max-height: 800px; /* Adjust based on your layout */
  position: relative;
  background-color: #fff;
  margin-top: 50px;
  padding: 20px;
  border-radius: 8px;
`;

// Table with sticky headers
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Table header styling
const TableHeader = styled.th`
  background-color: #fff;
  position: sticky;
  top: 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0e1217;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

// Table cell styling
const TableCell = styled.td`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #0e1217;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  opacity: 0.8;
`;

// Table row styling
const TableRow = styled.tr``;

// Scrollbar styling
const ScrollBar = styled.div`
  position: absolute;
  width: 5px;
  height: 95px;
  top: 64px;
  left: 1080px;
  border-radius: 17px;
  background-color: rgba(151, 151, 151, 0.5); /* 50% opacity */
`;

// Status select styling
const StatusSelect = styled.select<{ status: string }>`
  width: ${(props) =>
    props.status === "Active"
      ? "83px"
      : props.status === "Paused"
      ? "81px"
      : props.status === "Passive"
      ? "92px"
      : "auto"};
  height: 30px;
  border-radius: 30px;
  padding: 4px 14px;
  background-color: ${(props) =>
    props.status === "Active"
      ? "#219653"
      : props.status === "Paused"
      ? "#747474"
      : props.status === "Passive"
      ? "#F80000"
      : "#ffffff"};
  color: #ffffff;
  border: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  -webkit-appearance: none; /* Hide default arrow */
  -moz-appearance: none; /* Hide default arrow */
  appearance: none; /* Hide default arrow */
  option {
    color: #ffffff;
  }
  &:focus {
    outline: none; /* Remove default focus outline */
  }
`;

// Action icons styling
const ActionIcon = styled.div`
  display: flex;
  gap: 10px; /* Space between icons */
  svg {
    font-size: 20px; /* Icon size */
    cursor: pointer;
  }
`;

// Sample data
const data = [
  {
    id: 1,
    name: "John Doe",
    clientName: "Doe Enterprises",
    phoneCount: "Android - 5",
    usefulDuration: "2 years",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    clientName: "Smith Co.",
    phoneCount: 3,
    usefulDuration: "1 year",
    status: "Passive",
  },
  // Add more data as needed
];

const ClientTable: FC = () => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedClient, setSelectedClient] = useState<number | null>(null);

  const showDeleteModal = (id: number) => {
    setSelectedClient(id);
    setIsModalVisible(true);
  };

  const handleDelete = () => {
    console.log("Delete client with id:", selectedClient);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedClient(null);
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>{t("clients.name")}</TableHeader>
            <TableHeader>{t("clients.clientName")}</TableHeader>
            <TableHeader>{t("clients.phoneCount")}</TableHeader>
            <TableHeader>{t("clients.usagePeriod")}</TableHeader>
            <TableHeader>{t("clients.status")}</TableHeader>
            <TableHeader>{t("clients.action")}</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.clientName}</TableCell>
              <TableCell>{client.phoneCount}</TableCell>
              <TableCell>{client.usefulDuration}</TableCell>
              <TableCell>
                <StatusSelect status={client.status}>
                  <option value="Active">Active</option>
                  <option value="Paused">Paused</option>
                  <option value="Passive">Passive</option>
                </StatusSelect>
              </TableCell>
              <TableCell>
                <ActionIcon>
                  <FaEdit style={{ color: "#1A54EB" }} />
                  <FaTrash
                    style={{ color: "#FF3521" }}
                    onClick={() => showDeleteModal(client.id)}
                  />
                </ActionIcon>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <ScrollBar />

      <Modal
        title="Delete Client"
        visible={isModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete this client?</p>
      </Modal>
    </TableContainer>
  );
};

export default ClientTable;
