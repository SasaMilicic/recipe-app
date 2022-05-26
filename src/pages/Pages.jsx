import React from 'react';
import Searched from './Searched';
import Home from './Home';
import Cuisine from './Cuisine';
import Recipe from './Recipe';
import { Routes, Route } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:country" element={<Cuisine />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
