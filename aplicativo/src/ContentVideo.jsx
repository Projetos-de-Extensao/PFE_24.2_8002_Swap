import React, { useState, useEffect } from 'react';
import { FaPlay } from "react-icons/fa6";

function ContentVideo() {
    const [user, setUser] = useState([]);  // Inicializando como um array vazio
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const fetchFeedAndUser = async () => {
            // Carregar vídeos
            const response = await fetch('http://127.0.0.1:8000/api/feeds/?format=json');
            const data = await response.json();
            setVideo(data);

            // Carregar perfil do usuário
            const perfilResponse = await fetch('http://127.0.0.1:8000/api/perfis/?format=json');
            const perfilData = await perfilResponse.json();
            setUser(perfilData);  // Agora 'perfilData' será um array de objetos
        };

        fetchFeedAndUser();
    }, []);

    const firstItem = video.length > 0 ? video[0] : null;
    const userData = user.length > 0 ? user[0] : null;  // Acessando o primeiro item do array 'user'

    return (
      <div className="content-area">
        {firstItem ? (
            <div className="video-visualizer-card" key={firstItem.id}>
            <div className="video-visualizer-thumbnail"><FaPlay size={40} /></div>
            <div className="title-video" title={firstItem.titulo}>{firstItem.titulo}</div>
            {/* Verificando se 'userData.usuario' está disponível */}
            <div className="creator-info-video">
                {userData && userData.usuario ? userData.usuario.username : 'Carregando...'}
            </div>
            <div className="description">{firstItem.descricao}</div>
            </div>
        ) : (
            <p>Nenhum vídeo encontrado.</p>
        )}
      </div>
    );
}

export default ContentVideo;
