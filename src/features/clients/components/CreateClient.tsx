import { FC } from "react";
import { Modal, Input } from "antd";
import styled from "styled-components";
import AddButton from "../../../components/common/buttons/AddButton"; // Adjust the import path as needed

// Styling for the modal title
const ModalTitle = styled.h2`
  margin: 0;
`;

// Container for input fields and labels
const FormContainer = styled.div`
  margin-top: 20px;
`;

// Styling for input labels
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  color: #0e1217;
  font-family: "Inter", sans-serif;
`;

// Styling for input fields
const InputField = styled(Input)`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  background-color: #f6f6f6;
  margin-bottom: 26px;
  font-size: 16px;
  border: none;
`;

// Styling for the button container
const FooterButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

interface CreateClientProps {
  visible: boolean;
  onCancel: () => void;
  onAdd: () => void;
}

const CreateClient: FC<CreateClientProps> = ({ visible, onCancel, onAdd }) => {
  return (
    <Modal
      title={<ModalTitle>Create New Client</ModalTitle>}
      visible={visible}
      footer={null} // We will use custom footer
      onCancel={onCancel}
      width={680}
      bodyStyle={{ padding: "20px" }} // Add padding to modal body
      style={{ top: 100 }} // Adjust modal position
    >
      <FormContainer>
        <Label>Name</Label>
        <InputField placeholder="Name" />

        <Label>Username</Label>
        <InputField placeholder="Username" />

        <Label>Password</Label>
        <InputField placeholder="Password" type="password" />

        <Label>Phone</Label>
        <InputField placeholder="Phone" />
      </FormContainer>
      <FooterButtons>
        <AddButton onClick={onAdd}>Add Client</AddButton>
      </FooterButtons>
    </Modal>
  );
};

export default CreateClient;
