'use client';
import React, { useEffect, useState } from "react";
import './AvatarProfile.css';

export default function AvatarProfile() {
    // Definir o estado do nome e da imagem
    const [nomeUsuario, setNomeUsuario] = useState<string>('Usuário');
    const [imageSrc, setImageSrc] = useState<string>('');

    // Recuperar o nome do usuário do localStorage assim que o componente for montado
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            const nome = user.nome || 'Usuário'; // Pega o nome do usuário, se disponível
            setNomeUsuario(nome);

            // Definir a imagem com base no nome
            if (nome === 'Danilo Farias') {
                setImageSrc('/img/prof-danilo.jpg');
            } else if (nome === 'Mateus Fernando') {
                setImageSrc('/img/img-mateus.png');
            } else {
                setImageSrc(''); // Imagem padrão caso não seja nenhum dos dois
            }
        }
    }, []); // O useEffect é chamado apenas uma vez após a montagem do componente

    return (
        <div>
            <div className="moldura-container">
                <div className="img-moldura">
                    {imageSrc && <img src={imageSrc} alt="Avatar do usuário" />}
                </div>
            </div>
        </div>
    );
}
