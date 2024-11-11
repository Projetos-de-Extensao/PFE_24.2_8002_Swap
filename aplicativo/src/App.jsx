import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import Feed from './Feed';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
