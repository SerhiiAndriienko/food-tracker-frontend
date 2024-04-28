import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from 'pages/home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
