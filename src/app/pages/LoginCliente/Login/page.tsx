import React from 'react';
import "./login.css";

export default function Login (){
    return(
        <main>
            <section className="container-login">
                <div className='img-login'>
                    <img src="/img/img-login.png" width="612px" height="743" alt="" />
                </div>
                <div className='form-login'>
                    <h2>Agendamento</h2>
                    <p>Faça o login para agendar um horario.</p>
                    <form action="/login" method="POST">
                        <div className="forms">
                            <label htmlFor="email">Login</label>
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
                            <button type="submit" className="button-entrar-login">Entrar</button>
                            <div className='paragrafo-login'>
                                <p>
                                    Esqueceu email ou senha? <a href="/esqueci-senha" className='esquecer-senha'>Clique aqui</a>
                                </p>
                                <p>
                                    Sua primeira vez aqui? <a href="/pages/LoginCliente/Cadastramento" className='cadastre-login'>Cadastre-se</a>
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
