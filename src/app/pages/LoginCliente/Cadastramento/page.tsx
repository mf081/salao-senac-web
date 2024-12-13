import React from 'react';
import "./Cadastramento.css";

export default function Cadrastamento (){
    return(
        <main>
            return (
                <main>
                    <div className="left-section">
                        <img src="/img/img-login.png" alt="Imagem de login" />
                    </div>
                    <div className="right-section">
                        <h1>Cadastre-se</h1>
                        <form className="form">
                            <label htmlFor="nome">Nome completo *</label>
                            <input type="text" id="nome" placeholder="Digite seu nome" />
        
                            <label htmlFor="nome-social">Nome Social (Opcional)</label>
                            <input type="text" id="nome-social" placeholder="Digite seu nome" />
        
                            <label htmlFor="cpf">CPF *</label>
                            <input type="text" id="cpf" placeholder="XXX.XXX.XXX-XX" />
        
                            <label htmlFor="email">E-mail *</label>
                            <input type="email" id="email" placeholder="Digite seu e-mail" />
        
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" id="telefone" placeholder="(XX) XXXXX-XXXX" />
        
                            <button type="submit" className="btn-cadastrar">Cadastrar</button>
                            <p>Já tem cadastro? <a href="#">Clique aqui</a></p>
                            <div className="login-google">
                                <p>OU</p>
                                <button className="btn-google">Logar com o Google</button>
                            </div>
                        </form>
                    </div>
                </main>
            );
        </main>
    );
}