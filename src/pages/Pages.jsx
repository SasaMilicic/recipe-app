import React from 'react';
import Searched from './Searched';
import Home from './Home';
import Cuisine from './Cuisine';
import { Routes, Route } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:country" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;
