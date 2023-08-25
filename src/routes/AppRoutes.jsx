import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../components/Home';
import Navbar from '../components/navbar';

const AppRoutes = () => {
  const counter = 0;
  return (
    <>
      <Navbar />
      <li>{counter}</li>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
