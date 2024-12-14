import React from 'react';
import "./Cadastramento.css";

export default function Cadastramento() {
    return (
        <main>
            <section className="container-login">
                <div className='img-login'>
                    <img src="/img/img-login.png" width="612px" height="743" alt="Imagem Login" />
                </div>
                <div className='form-login'>
                    <h2>Cadastre-se</h2>
                    <form action="/login" method="POST">
                        <div className="forms">
                            <label htmlFor="nome">Nome Completo ou Social</label>
                            <input 
                                type="text" 
                                id="nome" 
                                name="nome" 
                                placeholder="Informe seu nome completo ou social" 
                                required 
                            />

                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Informe seu email" 
                                required 
                            />

                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Escreva sua senha" 
                                required 
                            />

                            <label htmlFor="cpf">CPF</label>
                            <input 
                                type="text" 
                                id="cpf" 
                                name="cpf" 
                                placeholder="Informe seu CPF" 
                                required 
                            />

                            <label htmlFor="telefone">Telefone</label>
                            <input 
                                type="tel" 
                                id="telefone" 
                                name="telefone" 
                                placeholder="Informe seu telefone" 
                                required 
                            />

                            <button type="submit" className="button-entrar-login">Entrar</button>
                            <div className='paragrafo-login'>
                                <p>
                                    Já tem Cadastro? <a href="/pages/LoginCliente/Cadastramento" className='cadastre-login'>Clique Aqui</a>
                                </p>
                            </div>
                        </div>
                    </form>

                    <div className="divider">
                       <span>OU</span>
                    </div>
                    <div className='button-google'>
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
