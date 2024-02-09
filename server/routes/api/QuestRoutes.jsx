import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import QuestInfo from '../pages/QuestInfo';
import Quest from '../pages/Quest';
import NotFound from '../pages/NotFound';

const QuestRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/info" element={<QuestInfo />} />
      <Route path="/quest" element={<Quest />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default QuestRoutes;
