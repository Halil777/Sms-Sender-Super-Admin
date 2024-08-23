// src/components/Profile.tsx

import React from "react";
import { Avatar, Row, Col } from "antd";
import { useProfileLogic } from "../logic/useProfileLogic";
import {
  ActionButtonsContainer,
  AvatarContainer,
  AvatarSection,
  CancelButton,
  HiddenInput,
  HorizontalLine,
  ProfileContainer,
  SaveButton,
  StyledInput,
  StyledTextArea,
  UploadLabel,
  UserDetails,
} from "../styles/ProfileStyles";

const Profile: React.FC = () => {
  const {
    avatar,
    firstName,
    surname,
    handleAvatarChange,
    handleFirstNameChange,
    handleSurnameChange,
    handleSave,
    handleCancel,
  } = useProfileLogic();

  return (
    <ProfileContainer>
      <UserDetails>User Details</UserDetails>
      <AvatarSection>
        <AvatarContainer>
          <Avatar size={100} src={avatar} />
        </AvatarContainer>
        <div>
          <UploadLabel htmlFor="avatar-upload">Change Picture</UploadLabel>
          <HiddenInput
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>
      </AvatarSection>
      <HorizontalLine />
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <StyledInput
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Col>
        <Col xs={24} sm={12}>
          <StyledInput
            placeholder="Surname"
            value={surname}
            onChange={handleSurnameChange}
          />
        </Col>
      </Row>
      <StyledInput placeholder="Email" />
      <StyledTextArea placeholder="Share some information about you" rows={4} />
      <HorizontalLine />
      <ActionButtonsContainer>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </ActionButtonsContainer>
    </ProfileContainer>
  );
};

export default Profile;
