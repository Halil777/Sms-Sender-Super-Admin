import { FC, useState } from "react";
import { Modal, Select, message, Button } from "antd";
import axios from "axios";
import {
  FooterButtons,
  FormContainer,
  InputField,
  Label,
  ModalTitle,
} from "../styles/createStyle";

interface CreateClientProps {
  visible: boolean;
  onCancel: () => void;
  onAdd: () => void;
}

const CreateClient: FC<CreateClientProps> = ({ visible, onCancel, onAdd }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState<number>(0);
  const [usagePeriod, setUsagePeriod] = useState("12 months");
  const [status, setStatus] = useState("");

  const statusOptions = ["Active", "Passive", "Paused"];

  const handleAddClient = async () => {
    const newClient = {
      name,
      client_name: username,
      phone_count: phone,
      usage_period: usagePeriod,
      status,
      client_password: password,
    };

    console.log("Adding client with data:", newClient);

    try {
      await axios.post("http://localhost:3000/clients", newClient, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      message.success("Client added successfully!");
      setName("");
      setUsername("");
      setPassword("");
      setPhone(0);
      setStatus("");
      setUsagePeriod("12 months");
      onAdd();
      onCancel();
    } catch (err) {
      console.error("Error response:", (err as any)?.response);
      message.error(
        `Error adding client: ${
          (err as any)?.response?.data?.message || (err as Error).message
        }`
      );
    }
  };

  return (
    <Modal
      title={<ModalTitle>Create New Client</ModalTitle>}
      visible={visible}
      footer={null}
      onCancel={onCancel}
      width={680}
      bodyStyle={{ padding: "20px" }}
      style={{ top: 100 }}
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
          onChange={(e) => setPassword(e.target.value)} // Set password
        />

        <Label>Phone</Label>
        <InputField
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(Number(e.target.value))}
        />

        <Label>Usage Period</Label>
        <InputField
          placeholder="Usage Period (e.g., 12 months)"
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
        <Button type="primary" onClick={handleAddClient}>
          Add Client
        </Button>
      </FooterButtons>
    </Modal>
  );
};

export default CreateClient;
