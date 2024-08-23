import { FC } from "react";
import styled from "styled-components";
import CreateButton from "../../../components/common/buttons/CreateButton";

// Styled container for the input and button
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between input and button */
`;

const StyledInput = styled.input`
  width: 233px;
  height: 47px;
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
`;

const BlacklistCreate: FC = () => {
  return (
    <Container>
      <StyledInput placeholder="Enter word" />
      <CreateButton>Create Blacklist</CreateButton>
    </Container>
  );
};

export default BlacklistCreate;
