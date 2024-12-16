'use client';

import React, { useState } from 'react';
import "./login.css";
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    // Estados para armazenar valores de email, senha e mensagem de erro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Recupera os dados do localStorage
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const { nome, email: storedEmail, senha: storedPassword } = JSON.parse(storedUser);

            // Verifica se o nome ou email e senha correspondem aos dados armazenados
            if ((email === nome || email === storedEmail) && password === storedPassword) {
                router.push('/pages/AgendamentoCliente/ResumoAgendado'); // Redireciona para a página
            } else {
                setErrorMessage('Email ou senha incorretos. Tente novamente.');
            }
        } else {
            setErrorMessage('Nenhum usuário cadastrado encontrado.');
        }
    };

    return (
        <main>
            <section className="container-login">
                <div className="img-login">
                    <img src="/img/img-login.png" width="612px" height="743" alt="" />
                </div>
                <div className="form-login">
                    <h2>Agendamento</h2>
                    <p>Faça o login para agendar um horário.</p>
                    <form onSubmit={handleLogin}>
                        <div className="forms">
                            <label htmlFor="email">Login</label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Informe seu nome ou email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Escreva sua senha" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            <button 
                                type="submit" 
                                className="button-entrar-login"
                                disabled={!email || !password} // Desabilita o botão se os campos estiverem vazios
                            >
                                Entrar
                            </button>
                            <div className="paragrafo-login">
                                <p>
                                    Esqueceu email ou senha? <a href="/esqueci-senha" className="esquecer-senha">Clique aqui</a>
                                </p>
                                <p>
                                    Sua primeira vez aqui? <a href="/pages/LoginCliente/Cadastramento" className="cadastre-login">Cadastre-se</a>
                                </p>
                            </div>
                        </div>
                    </form>

                    <div className="divider">
                        <span>OU</span>
                    </div>
                    <div className="button-google">
                        <button className="google-login-button">
                            <img src="/img/icons/Google-logo-colorido.png" alt="Google Logo" />
                            Logar com o Google
                        </button>
                    </div>
                </div> 
            </section>
        </main>
    );
}
