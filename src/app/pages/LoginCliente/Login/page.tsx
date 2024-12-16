'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './login.css';
import Image from 'next/image'; // Importação do Image

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const predefinedUser = {
        nome: 'Mateus Fernando',
        email: 'mateusfss@368@gmail.com',
        senha: 'odeiofrontend',
    };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const normalizedEmail = email.toLowerCase();
        const normalizedName = predefinedUser.nome.toLowerCase();

        if (
            (normalizedEmail === predefinedUser.email.toLowerCase() || normalizedEmail === normalizedName) &&
            password === predefinedUser.senha
        ) {
            // Salva o usuário e marca como logado
            localStorage.setItem('user', JSON.stringify(predefinedUser));
            localStorage.setItem('isLoggedIn', JSON.stringify(true)); // Salvando como booleano
            router.push('/pages/AgendamentoCliente/ResumoAgendado'); // Redireciona para a página de agendamentos
            return;
        }

        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const { nome, email: storedEmail, senha: storedPassword } = JSON.parse(storedUser);

            if (
                (normalizedEmail === storedEmail.toLowerCase() || normalizedEmail === nome.toLowerCase()) &&
                password === storedPassword
            ) {
                localStorage.setItem('isLoggedIn', JSON.stringify(true)); // Salvando como booleano
                router.push('/pages/AgendamentoCliente/ResumoAgendado');
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
                    <Image 
                        src="/img/img-login.png" 
                        width={612} 
                        height={743} 
                        alt="Imagem de login"
                    />
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
                            <button type="submit" className="button-entrar-login" disabled={!email || !password}>
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
