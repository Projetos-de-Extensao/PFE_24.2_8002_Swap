import React from 'react';
import { FaCamera, FaHome, FaCog} from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom';
import './Feed.css';

function Sidebar() {
  const navigate = useNavigate();

  const goToFeed = () => {
    navigate('/feed');
  };

  const goToProfile = () => {
    navigate('/perfil');
  }

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
        <div className="menu-item" onClick={goToFeed}>
          <FaHome size={20} />
          <span>Página Inicial</span>
        </div>
      </nav>
      <div className="settings" onClick={goToProfile}>
      <VscAccount size={20} />
        <span>Perfil</span>
      </div>
    </div>
  );
}

export default Sidebar;
