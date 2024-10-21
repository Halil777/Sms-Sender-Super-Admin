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
import Language from "../../utils/language/Language";

// Container for the sidebar with added box-shadow
const SidebarContainer = styled.div`
  width: 230px;
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 20px;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  position: relative;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

// Title at the top of the sidebar
const SidebarTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #0e1217;
  padding: 20px;

  @media (max-width: 768px) {
    display: none;
  }
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

export const TitleLink = styled.h4`
  @media (max-width: 768px) {
    display: none;
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

export const LanguageContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
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
        <TitleLink>{t("sidebar.dashboard")}</TitleLink>
      </MenuItem>

      <MenuItem
        to="/clients"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <TeamOutlined />
        </IconWrapper>
        <TitleLink>{t("sidebar.clients")}</TitleLink>
      </MenuItem>
      <MenuItem
        to="/sms-logs"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <MessageOutlined />
        </IconWrapper>
        <TitleLink>{t("sidebar.smsLogs")}</TitleLink>
      </MenuItem>
      <MenuItem
        to="/blacklist-words"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <StopOutlined />
        </IconWrapper>
        <TitleLink>{t("sidebar.blacklistWords")}</TitleLink>
      </MenuItem>
      <MenuItem
        to="/pending"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <MailOutlined />
        </IconWrapper>
        <TitleLink>{t("dashboard.pendingMessages")}</TitleLink>
      </MenuItem>
      <MenuItem
        to="/licences"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <FileTextOutlined />
        </IconWrapper>
        <TitleLink>{t("sidebar.licenses")}</TitleLink>
      </MenuItem>
      <MenuItem
        to="/templates"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <IconWrapper isActive={false}>
          <FileAddOutlined />
        </IconWrapper>
        <TitleLink>{t("sidebar.templates")}</TitleLink>
      </MenuItem>
      <LanguageContainer>
        <Language />
      </LanguageContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
