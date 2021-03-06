import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Bubble from "../../bubble/Bubble";
import HeaderButtons from "./HeaderButtons";

import "../../../styles/css/style.css";

import db from "../../../serv/db";

function Header() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const state = useSelector((state) => state);
  console.log(state);

  function handleLogin() {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const user = getUser();
    dispatch({
      type: "LOGIN_SUCCESS",
    });
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  }

  function getUser() {
    return db.artistas[0];
  }

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
          {authState.isAuthenticated ? (
            <HeaderButtons />
          ) : (
            <>
              <button className="btn-entrar" onClick={handleLogin}>
                Entrar
              </button>
              <button className="btn-criarConta">Criar conta</button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
