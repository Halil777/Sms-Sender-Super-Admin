import { FC, useState, useEffect } from "react";
import { Drawer, Button, Select, message } from "antd";
import axios from "axios";
import {
  FooterButtons,
  FormContainer,
  InputField,
  Label,
} from "../styles/createStyle";

interface EditClientProps {
  visible: boolean;
  onClose: () => void;
  clientId: number;
  onUpdate: () => void;
}

const EditClient: FC<EditClientProps> = ({
  visible,
  onClose,
  clientId,
  onUpdate,
}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState<number>(0);
  const [usagePeriod, setUsagePeriod] = useState("12 months");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");

  const statusOptions = ["Active", "Passive", "Paused"];

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/clients/${clientId}`
        );
        const clientData = response.data;

        setName(clientData.name);
        setUsername(clientData.client_name);
        setPhone(clientData.phone_count);
        setUsagePeriod(clientData.usage_period);
        setStatus(clientData.status);
      } catch (error) {
        console.error("Error fetching client data:", error);
        message.error("Failed to fetch client data.");
      }
    };

    if (clientId) {
      fetchClientData();
    }
  }, [clientId]);

  const handleUpdateClient = async () => {
    const updatedClient = {
      name,
      client_name: username,
      phone_count: phone,
      usage_period: usagePeriod,
      status,
      client_password: password,
    };

    try {
      await axios.patch(
        `http://localhost:3000/clients/${clientId}`,
        updatedClient,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      message.success("Client updated successfully!");
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating client:", error);
      message.error("Failed to update client.");
    }
  };

  return (
    <Drawer
      title={`Edit Client ${clientId}`}
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      width={500}
    >
      <FormContainer>
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
        <InputField
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      </FormContainer>
      <FooterButtons>
        <Button type="primary" onClick={handleUpdateClient}>
          Update Client
        </Button>
      </FooterButtons>
    </Drawer>
  );
};

export default EditClient;
