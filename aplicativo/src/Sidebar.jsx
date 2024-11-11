import React from 'react';
import { FaCamera, FaHome, FaCog } from 'react-icons/fa';
import './Feed.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="loader">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="loader-line" />
          ))}
        </div>
        <h1>SWAP</h1>
      </div>
      <nav className="menu">
        <div className="menu-item">
          <FaCamera size={20} />
          <span>Criar</span>
        </div>
        <div className="menu-item">
          <FaHome size={20} />
          <span>Página Inicial</span>
        </div>
      </nav>
      <div className="settings">
        <FaCog size={20} />
        <span>Configurações</span>
      </div>
    </div>
  );
}

export default Sidebar;
