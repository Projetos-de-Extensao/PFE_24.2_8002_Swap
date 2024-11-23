import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Perfil.css';

function ContentPerfil() {
  const [feed, setFeed] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFeed, setFilteredFeed] = useState([]);
  const [perfil, setPerfil] = useState(null);
  useEffect(() => {
    const fetchFeedAndPerfil = async () => {
      const feedResponse = await fetch('http://127.0.0.1:8000/api/feeds/?format=json');
      const feedData = await feedResponse.json();
      setFeed(feedData);
      setFilteredFeed(feedData);

      const perfilResponse = await fetch('http://127.0.0.1:8000/api/perfis/?format=json');
      const perfilData = await perfilResponse.json();
      setPerfil(perfilData[0]);
    };

    fetchFeedAndPerfil();
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

      <div className="info-perfil">
        {perfil ? (
          <div className="profile-header">
            <img
              src={perfil.foto_perfil || 'https://via.placeholder.com/150'}
              alt="User Profile"
              className="profile-picture"
            />
            <div className="profile-details">
              <h1 className="user-name">{perfil.usuario.first_name || 'Nome do Usuário'} {perfil.usuario.last_name || ''}</h1>
              <p>Email: {perfil.usuario.email}</p>
              <p>Interesses: {perfil.interesses || 'Nenhum interesse definido'}</p>
              <p>Gosta de: {perfil.gosta_de || 'Nada especificado'}</p>
              <p>Quer aprender: {perfil.quer_aprender || 'Nada especificado'}</p>
              <p>Perfil: {perfil.perfil}</p>
              <p>Data de Cadastro: {new Date(perfil.data_cadastro).toLocaleDateString()}</p>
            </div>
          </div>
        ) : (
          <div>Carregando perfil...</div>
        )}
      </div>

      <div className="video-grid">
        {filteredFeed.map((item) => (
          <div className="video-card" key={item.id}>
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

export default ContentPerfil;
