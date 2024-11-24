import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import Feed from './Feed';
import  Perfil from './Perfil';
import VideoVisualizer from './VideoVisualizer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/video" element={<VideoVisualizer />} />

    </Routes>
  );
}

export default App;
