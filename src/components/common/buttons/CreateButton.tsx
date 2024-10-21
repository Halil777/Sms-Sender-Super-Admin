import { FC } from "react";
import styled from "styled-components";

// Styled button component
const StyledButton = styled.button`
  width: 181px; /* Fixed width */
  height: 47px; /* Fixed height */
  border-radius: 6px; /* Border radius */
  background-color: #0762c8; /* Background color */
  color: #ffffff; /* Text color */
  border: none; /* Remove default border */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  font-weight: bold; /* Font weight */
  transition: background-color 0.3s; /* Smooth background color transition */

  &:hover {
    background-color: #064b8b; /* Darker background on hover */
  }

  &:focus {
    outline: none; /* Remove default focus outline */
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 38px;
    padding: 10px;
  }
`;

// Props interface for the CreateButton component
interface CreateButtonProps {
  onClick?: () => void; // Optional onClick handler
  children?: React.ReactNode; // Button content
}

// CreateButton Component
const CreateButton: FC<CreateButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default CreateButton;
