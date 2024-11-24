import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Feed.css';

function ContentArea() {
  const [feed, setFeed] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFeed, setFilteredFeed] = useState([]);

  const navigate = useNavigate();

  const goToVideo = () => {
    navigate('/video');
  };

  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/feeds/?format=json');
      const data = await response.json();
      setFeed(data);
      setFilteredFeed(data);
    };

    fetchFeed();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = () => {
    const filtered = feed.filter((item) =>
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFeed(filtered);
  };

  return (
    <div className="content-area">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button" onClick={handleFilter}>
          <FaSearch />
        </button>
        <button className="filter-button">Filtro</button>
      </div>

      <div className="video-grid">
        {filteredFeed.map((item) => (
          <div className="video-card" key={item.id} onClick={goToVideo}>
            <div className="thumbnail">Thumbnail Vídeo</div>
            <div className="title" title={item.titulo}>{item.titulo}</div>
            <div className="creator-info">Usuário Upload: {item.usuario}</div>
            <div className="description">{item.descricao}</div>
            <div className="type">Tipo: {item.tipo}</div>
            <div className="publish-date">Publicado em: {new Date(item.data_publicacao).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentArea;
