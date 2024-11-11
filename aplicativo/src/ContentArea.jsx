import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Feed.css';

function ContentArea() {
  return (
    <div className="content-area">
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar" />
        <button className="search-button">
          <FaSearch />
        </button>
        <button className="filter-button">Filtro</button>
      </div>
      <div className="video-grid">
        {[...Array(15)].map((_, index) => (
          <div className="video-card" key={index}>
            <div className="thumbnail">Thumbnail Vídeo</div>
            <div className="title" title="Como construir uma prateleira no Minecraft 1.20.2">Como construir uma prateleira no Minecraft 1.20.2</div>
            <div className="creator-info">Informações do Criador</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentArea;
