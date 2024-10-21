import { FC, useState } from "react";
import styled from "styled-components";
import CreateButton from "../../../components/common/buttons/CreateButton";
import { Drawer, Form, Input, Button, message } from "antd";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between input and button */
`;

const BlacklistCreate: FC<{ refreshData: () => void }> = ({ refreshData }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const onFinish = async (values: { word: string; reason: string }) => {
    try {
      await axios.post("http://localhost:3000/banned-words", values);
      message.success("Banned word added successfully!");
      refreshData();
      onClose();
    } catch (error) {
      console.error("Error adding banned word:", error);
      message.error("Failed to add banned word.");
    }
  };

  return (
    <Container>
      <CreateButton onClick={showDrawer}>Create Blacklist</CreateButton>

      <Drawer
        title="Add Blacklist Word"
        placement="right"
        onClose={onClose}
        visible={drawerVisible}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Word"
            name="word"
            rules={[{ required: true, message: "Please input the word!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Reason"
            name="reason"
            rules={[{ required: true, message: "Please input the reason!" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </Container>
  );
};

export default BlacklistCreate;
