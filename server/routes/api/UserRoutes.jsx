import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      {/* Add more user-related routes as needed */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoutes;
