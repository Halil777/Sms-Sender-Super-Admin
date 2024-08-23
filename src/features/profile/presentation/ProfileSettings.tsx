import React, { useState } from "react";
import { Tabs } from "antd";
import Profile from "../components/Profile";
import Notifications from "../components/Notifications";

const ProfileSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    console.log(activeTab);
  };

  return (
    <Tabs defaultActiveKey="profile" onChange={handleTabChange}>
      <Tabs.TabPane tab="Profile" key="profile">
        <Profile />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Notifications" key="notifications">
        <Notifications />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default ProfileSettings;
