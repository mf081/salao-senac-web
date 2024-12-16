'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './AvatarProfile.css';

export default function AvatarProfile() {
    // Definir o estado do nome e da imagem
    const [nomeUsuario, setNomeUsuario] = useState<string>('Usuário');
    const [imageSrc, setImageSrc] = useState<string>('');

    useEffect(() => {
        // Recuperar informações do localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            const nome = user.nome || 'Usuário'; // Nome padrão caso não exista
            setNomeUsuario(nome);

            // Definir imagem com base no nome
            if (
                nome.toLowerCase() === 'danilo farias' ||
                nome.toLowerCase() === 'danilo faria'
            ) {
                setImageSrc('/img/prof-danilo.jpg');
            } else if (nome.toLowerCase() === 'mateus fernando') {
                setImageSrc('/img/img-mateus.png');
            } else {
                setImageSrc(''); // Imagem padrão caso não seja nenhum dos dois
            }
        }
    }, []); // Executar apenas uma vez após o componente montar

    return (
        <div>
            <div className="moldura-container">
                <div className="img-moldura">
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt="Avatar do usuário"
                            width={180} // Largura definida
                            height={180} // Altura definida
                        />
                    )}
                </div>

                {/* <p>{nomeUsuario}</p> Exibindo o nome do usuário */}
            </div>
        </div>
    );
}
