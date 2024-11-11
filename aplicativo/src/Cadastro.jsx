import React from 'react';
import './App.css';

function Cadastro() {
  return (
    <div className="container">
      <div className="loader">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="loader-line" />
        ))}
      </div>
      <h1 className="titulo">SWAP</h1>
      <div className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Insira seu Email..." />
        
        <label>Username</label>
        <input type="username" placeholder="Insira seu Username..." />


        <label>Senha</label>
        <input type="password" placeholder="Insira sua Senha..." />

        <button className="button full-width">Cadastrar</button>

      </div>
    </div>
  );
}

export default Cadastro;
