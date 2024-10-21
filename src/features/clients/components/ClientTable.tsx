import { FC, useState, useEffect } from "react";
import { Modal, Drawer, Button, Select, message, Input } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import useSWR from "swr";
import axios from "axios";
import styled from "styled-components";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

interface Client {
  key: number;
  name: string;
  client_name: string;
  client_password: string;
  phone_count: number;
  usage_period: string;
  status: string;
}

const ClientTable: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditDrawerVisible, setIsEditDrawerVisible] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [clientIdForEdit, setClientIdForEdit] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const [usagePeriod, setUsagePeriod] = useState<string>("12 months");
  const [status, setStatus] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const statusOptions = ["Active", "Passive", "Paused"];

  const { data, mutate } = useSWR<Client[]>(
    "http://localhost:3000/clients",
    fetcher
  );

  useEffect(() => {
    const fetchClientData = async (clientId: number) => {
      try {
        const response = await axios.get<Client>(
          `http://localhost:3000/clients/${clientId}`
        );
        const clientData = response.data;

        setName(clientData.name);
        setUsername(clientData.client_name);
        setPhone(clientData.phone_count);
        setUsagePeriod(clientData.usage_period);
        setStatus(clientData.status);
        setPassword(clientData.client_password);
      } catch (error) {
        console.error("Error fetching client data:", error);
        message.error("Failed to fetch client data.");
      }
    };

    if (clientIdForEdit) {
      fetchClientData(clientIdForEdit);
    }
  }, [clientIdForEdit]);

  const showDeleteModal = (record: Client) => {
    setSelectedClient(record);
    setIsModalVisible(true);
  };

  const showEditDrawer = (record: Client) => {
    setClientIdForEdit(record.key);
    setIsEditDrawerVisible(true);

    setName(record.name);
    setUsername(record.client_name);
    setPhone(record.phone_count);
    setUsagePeriod(record.usage_period);
    setStatus(record.status);
    setPassword(record.client_password);
  };

  const handleOk = async () => {
    if (!selectedClient) return;

    try {
      const response = await axios.delete(
        `http://localhost:3000/clients/${selectedClient.key}`
      );

      if (response.status !== 200) {
        throw new Error(`Failed to delete client: ${response.statusText}`);
      }

      mutate();
      setIsModalVisible(false);
    } catch (err) {
      console.error("Error deleting client:", err);
      Modal.error({
        title: "Error",
        content: "Failed to delete client.",
      });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdateClient = async () => {
    const updatedClient: Client = {
      key: clientIdForEdit!,
      name,
      client_name: username,
      phone_count: phone,
      usage_period: usagePeriod,
      status,
      client_password: password,
    };

    try {
      await axios.patch(
        `http://localhost:3000/clients/${clientIdForEdit}`,
        updatedClient,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      message.success("Client updated successfully!");
      mutate();
      setIsEditDrawerVisible(false);
    } catch (error) {
      console.error("Error updating client:", error);
      message.error("Failed to update client.");
    }
  };

  return (
    <>
      <StyledTableContainer>
        <StyledTable>
          <StyledRow>
            <StyledCell isHeader>Name</StyledCell>
            <StyledCell isHeader>Client Name</StyledCell>
            <StyledCell isHeader>Client Password</StyledCell>
            <StyledCell isHeader>Phone Count</StyledCell>
            <StyledCell isHeader>Usage Period</StyledCell>
            <StyledCell isHeader>Status</StyledCell>
            <StyledCell isHeader>Action</StyledCell>
          </StyledRow>
          {data?.map((client) => (
            <StyledRow key={client.key}>
              <StyledCell>{client.name}</StyledCell>
              <StyledCell>{client.client_name}</StyledCell>
              <StyledCell>********</StyledCell>
              <StyledCell>{client.phone_count}</StyledCell>
              <StyledCell>{client.usage_period}</StyledCell>
              <StyledCell>
                <StatusBadge status={client.status}>
                  {client.status}
                </StatusBadge>
              </StyledCell>
              <StyledCell>
                <FaEdit
                  style={{
                    color: "#1890FF",
                    cursor: "pointer",
                    marginRight: 10,
                  }}
                  onClick={() => showEditDrawer(client)}
                />
                <FaTrash
                  style={{ color: "#FF4D4F", cursor: "pointer" }}
                  onClick={() => showDeleteModal(client)}
                />
              </StyledCell>
            </StyledRow>
          ))}
        </StyledTable>
      </StyledTableContainer>

      <Modal
        title="Delete Client"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>{`Are you sure you want to delete ${selectedClient?.name}?`}</p>
      </Modal>

      <Drawer
        title={`Edit Client ${clientIdForEdit}`}
        placement="right"
        closable={true}
        onClose={() => setIsEditDrawerVisible(false)}
        visible={isEditDrawerVisible}
        width={500}
      >
        <div>
          <Label>Name</Label>
          <InputField
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Label>Username</Label>
          <InputField
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Label>Password</Label>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            visibilityToggle
            iconRender={(visible) => (visible ? "👁️" : "🙈")}
          />

          <Label>Phone</Label>
          <InputField
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(Number(e.target.value))}
          />

          <Label>Usage Period</Label>
          <InputField
            placeholder="Usage Period"
            value={usagePeriod}
            onChange={(e) => setUsagePeriod(e.target.value)}
          />

          <Label>Status</Label>
          <Select
            placeholder="Select status"
            value={status}
            onChange={(value) => setStatus(value)}
            style={{ width: "100%", marginBottom: "26px" }}
          >
            {statusOptions.map((option) => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </div>
        <Button type="primary" onClick={handleUpdateClient}>
          Update Client
        </Button>
      </Drawer>
    </>
  );
};

export default ClientTable;

// Styled components
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

const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 8px;
  border-radius: 4px;
  color: #fff;
  background-color: ${({ status }) =>
    status === "Active"
      ? "#52c41a"
      : status === "Passive"
      ? "#f5222d"
      : status === "Paused"
      ? "#faad14"
      : "#d9d9d9"};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const InputField = styled(Input)`
  margin-bottom: 16px;
`;
