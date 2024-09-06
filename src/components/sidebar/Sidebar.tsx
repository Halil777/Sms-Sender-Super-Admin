import { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  TeamOutlined,
  MessageOutlined,
  StopOutlined,
  FileTextOutlined,
  MailOutlined,
  FileAddOutlined, // Added for Templates
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

// Container for the sidebar with added box-shadow
const SidebarContainer = styled.div`
  width: 230px;
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 20px;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */
  z-index: 100; /* Ensure it's above other elements if needed */
  position: relative; /* Ensure it's positioned relative to its container */
`;

// Title at the top of the sidebar
const SidebarTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #0e1217;
  padding: 20px;
`;

// Menu items styling
const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  color: #64748b; // Default color

  &.active {
    color: #1a54eb;
    background-color: #f4f7ff;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  .anticon {
    font-size: 18px;
    margin-right: 10px;
  }
`;

// Icon with conditional styling
const IconWrapper = styled.span<{ isActive: boolean }>`
  .anticon {
    color: ${(props) =>
      props.isActive
        ? "#1a54eb"
        : "#64748b"}; // Icon color based on active state
  }
`;

const Sidebar: FC = () => {
  const { t } = useTranslation();

  return (
    <SidebarContainer>
      <SidebarTitle>Sms Sender</SidebarTitle>
      <MenuItem
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <HomeOutlined />
        </IconWrapper>
        {t("sidebar.dashboard")}
      </MenuItem>

      <MenuItem
        to="/clients"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <TeamOutlined />
        </IconWrapper>
        {t("sidebar.clients")}
      </MenuItem>
      <MenuItem
        to="/sms-logs"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <MessageOutlined />
        </IconWrapper>
        {t("sidebar.smsLogs")}
      </MenuItem>
      <MenuItem
        to="/blacklist-words"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <StopOutlined />
        </IconWrapper>
        {t("sidebar.blacklistWords")}
      </MenuItem>
      <MenuItem
        to="/pending"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <MailOutlined />
        </IconWrapper>
        {t("dashboard.pendingMessages")}
      </MenuItem>
      <MenuItem
        to="/licences"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <FileTextOutlined />
        </IconWrapper>
        {t("sidebar.licenses")}
      </MenuItem>
      <MenuItem
        to="/templates"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <FileAddOutlined /> {/* Icon for Templates */}
        </IconWrapper>
        {t("sidebar.templates")}{" "}
        {/* Assuming 'templates' is added to the translation context */}
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
