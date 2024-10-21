import { Input } from "antd";
import styled from "styled-components";

// Styling for the modal title
export const ModalTitle = styled.h2`
  margin: 0;
`;

// Container for input fields and labels
export const FormContainer = styled.div`
  margin-top: 20px;
`;

// Styling for input labels
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  color: #0e1217;
  font-family: "Inter", sans-serif;
`;

// Styling for input fields
export const InputField = styled(Input)`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  background-color: #f6f6f6;
  margin-bottom: 26px;
  font-size: 16px;
  border: none;
`;

// Styling for the button container
export const FooterButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
