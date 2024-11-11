import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="loader">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="loader-line" />
        ))}
      </div>
      <h1 className="titulo">SWAP</h1>
      <div className="buttons">
        <button className="button" onClick={() => navigate('/login')}>ENTRAR</button>
        <button className="button" onClick={() => navigate('/cadastro')}>CADASTRAR</button>
      </div>
    </div>
  );
}

export default Home;
