import React from "react";
import { Link } from "react-router-dom";

import Bubble from "../../bubble/Bubble";

import "../../../styles/css/style.css";

function Header() {
  return (
    <div className="App-header">
      <header>
        <div className="App-header-left">
          <div className="logo">
            <img src="#" alt="logo" />
          </div>
          <Bubble />
        </div>
        <div className="App-header-btns">
          <button className="btn-entrar">
            <Link to="/artista/1000001">teste artista</Link>
          </button>
          <button className="btn-entrar">Entrar</button>
          <button className="btn-criarConta">Criar conta</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
