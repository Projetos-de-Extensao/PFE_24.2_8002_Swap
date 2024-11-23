import React from 'react';
import Sidebar from './Sidebar';
import ContentPerfil from './ContentPerfil';
import './Perfil.css';

function Perfil() {
  return (
    <div className="app-container">
      <Sidebar />
      <ContentPerfil />
    </div>
  );
}

export default Perfil;