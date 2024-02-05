import React, { useEffect } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  CaretRightOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import { LogoL } from "../assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  let path = window.location.pathname;

  useEffect(() => {}, []);

  const selectedKey = () => {
    if (path === "/dashboard") {
      return "1";
    } else if (path === "/map") {
      return "2";
    } else {
      return "1";
    }
  };
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center py-4 bg-[#EBEBEB]">
        <h1 className="text-3xl text-teal-600 font-bold">SQ</h1>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[selectedKey()]}
        className="text-base font-normal text-black bg-[#EBEBEB]"
        items={[
          {
            key: "1",
            icon: <AppstoreOutlined />,
            label: <Link to="/dashboard">Dashboard</Link>,
          },
          // {
          //   key: "2",
          //   icon: <GlobalOutlined />,
          //   label: <Link to="/map">Map</Link>,
          // },
          {
            key: "3",
            icon: <CaretRightOutlined />,
            label: <Link to="/quest">Quest</Link>,
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: <Link to="/profile">Profile</Link>,
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
