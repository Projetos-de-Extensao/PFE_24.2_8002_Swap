import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
    const navigate = useNavigate();
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

            <label>Senha</label>
            <input type="password" placeholder="Insira sua Senha..." />

            <button className="button full-width" onClick={() => navigate('/feed')}>Entrar</button>

            <a href="#" className="forgot-password">Esqueceu a senha?</a>
        </div>
        </div>
    );
}

export default Login;
