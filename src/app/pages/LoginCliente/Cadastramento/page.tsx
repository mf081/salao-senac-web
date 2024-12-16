'use client';

import React, { useState } from 'react';
import "./Cadastramento.css";

export default function Cadastramento() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = (event: React.FormEvent) => {
        event.preventDefault();
        
        // Armazenar dados no localStorage
        const userData = { nome, email, senha };
        localStorage.setItem('user', JSON.stringify(userData));
        
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <main>
            <section className="container-login">
                <div className='img-login'>
                    <img src="/img/img-login.png" width="612px" height="743" alt="Imagem Login" />
                </div>
                <div className='form-login'>
                    <h2>Cadastre-se</h2>
                    <form onSubmit={handleCadastro}>
                        <div className="forms">
                            <div className="forms-colunas">
                                <div className="input-group">
                                    <label htmlFor="nome">Nome Completo*</label>
                                    <input 
                                        type="text" 
                                        id="nome" 
                                        name="nome" 
                                        placeholder="Informe seu nome completo" 
                                        required 
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email">Email*</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Informe seu email" 
                                        required 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="forms-colunas">
                                <div className="input-group">
                                    <label htmlFor="password">Senha*</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        placeholder="Escreva sua senha" 
                                        required 
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="button-entrar-login">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
