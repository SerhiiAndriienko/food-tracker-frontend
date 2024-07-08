import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from 'pages/home/Home';
import Profile from 'pages/profile/Profile';
import GoalCreate from './goalCreate/GoalCreate';
// import { useSelector } from 'react-redux';

export const App = () => {
  // const userName = useSelector(state => state.user.userName);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/goal" element={<GoalCreate />} />
        {/* <Route path="/{userName}" element={<Home />} /> */}
      </Route>
    </Routes>
  );
};
