'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Importando useRouter do Next.js
import './Cadastramento.css';
import Image from 'next/image'; // Importação do Image

export default function Cadastramento() {
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    
    const router = useRouter();  // Criando o hook do router para navegação

    const handleCadastro = (event: React.FormEvent) => {
        event.preventDefault();
        
        // Armazenar dados no localStorage
        const userData = { nome, nomeSocial, email, senha, cpf, telefone };
        localStorage.setItem('user', JSON.stringify(userData));
        
        alert('Cadastro realizado com sucesso!');

        // Redirecionando para a página de Login após o cadastro
        router.push('/pages/LoginCliente/Login');
    };

    return (
        <main>
            <section className="container-login">
                <div className="img-login">
                    <Image 
                        src="/img/img-login.png" 
                        width={612} 
                        height={743} 
                        alt="Imagem Login"
                    />
                </div>
                <div className="form-login">
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
                                    <label htmlFor="nomeSocial">Nome Social (Opcional)</label>
                                    <input 
                                        type="text" 
                                        id="nomeSocial" 
                                        name="nomeSocial" 
                                        placeholder="Informe seu nome social (se aplicável)" 
                                        value={nomeSocial}
                                        onChange={(e) => setNomeSocial(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="forms-colunas">
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
                                    <label htmlFor="cpf">CPF (Opcional)</label>
                                    <input 
                                        type="text" 
                                        id="cpf" 
                                        name="cpf" 
                                        placeholder="Informe seu CPF" 
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="telefone">Telefone (Opcional)</label>
                                    <input 
                                        type="text" 
                                        id="telefone" 
                                        name="telefone" 
                                        placeholder="Informe seu telefone" 
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
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
