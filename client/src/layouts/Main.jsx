import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Layout, Button, Dropdown } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import { Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "../pages";
import Sidebar from "./Sidebar";
import { useContentContext } from "../providers/ContentContext";
import {Profile, Quest} from './../pages';

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  let { openSuccessNotification } = useContentContext();

  useEffect(() => {
    if (window.innerWidth < 426) {
      setCollapsed(true);
    }
  }, []);

  // Navigation Menu Options
  const items = [
    {
      label: "Logout",
      key: "1",
      icon: <PoweroffOutlined />,
    },
  ];

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      // Logout
      openSuccessNotification("Logged Out!", "Logout Success!");
      localStorage.clear();
      navigate("/login"); // Navigate to the login page
    }
  };

  const handleProfileClick = () => {
    // Navigate to the profile page
    navigate("/profile");
  };

  const handleDashboardClick = () => {
    // Navigate to the profile page
    navigate("/dashboard");
  };

  const handleQuestInformationClick = () => {
    // Navigate to the profile page
    navigate("/info");
  };
  const handleQuestClick = () => {
    // Navigate to the quest page
    navigate("/quest");
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Layout className="h-screen w-full flex flex-row">
      <Sider
        className={
          collapsed
            ? "max-md:hidden bg-[#EBEBEB]"
            : "visible sider bg-[#EBEBEB]"
        }
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#EBEBEB" }}
      >
        <Sidebar />
      </Sider>
      <Layout>
      <Header style={{ padding: 0, background: "white" }}>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex items-center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                zIndex: 999,
              }}
            />
            {/* App name visible only on small screens */}
            <span className="text-xl font-bold ml-4 md:hidden">Side Quest</span>
          </div>
          <div className="flex justify-end m-4 hidden md:flex"> {/* Hide on small screens, show on medium and up */}
            <Button className="mr-4" onClick={handleDashboardClick}>Dashboard</Button>
            <Button className="mr-4" onClick={handleProfileClick}>Profile</Button>
            <Button onClick={handleQuestClick}>Quest</Button>
            <Dropdown.Button
              menu={menuProps}
              icon={<UserOutlined />}
              className="ml-4"
            >
              Account
            </Dropdown.Button>
          </div>
        </div>
      </Header>



        <Content className="m-[24px] p-[24px] bg-white rounded-md h-full overflow-scroll">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            {/* Add routes for profile and quest */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/quest" element={<Quest />} />
          </Routes>
        </Content>
        <Footer className="text-center pt-0">
          Copyright 202 © ALL RIGHTS RESERVED. Design by{" "}
          <a href="https://aventureit.com" target="_blank" rel="noreferrer">
            Jake
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;



