import React, { useEffect } from "react";
import { Button } from "antd";
import { useContentContext } from "../providers/ContentContext";

const Logout = () => {
  const { openSuccessNotification } = useContentContext();

  const handleLogout = () => {
    // Perform logout action
    localStorage.removeItem("token"); // Remove token from localStorage
    openSuccessNotification("Logout Success!", "Successfully Logged Out");
    window.location.replace("/login"); // Redirect to login page after logout
  };

  // Effect to check if user is already logged out (on initial mount)
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.replace("/login"); // Redirect to login if not logged in
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="text-2xl font-semibold mt-2">Side Quest</div>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="text-lg font-medium">Logout</div>
        <Button type="primary" onClick={handleLogout} className="mt-4">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Logout;
