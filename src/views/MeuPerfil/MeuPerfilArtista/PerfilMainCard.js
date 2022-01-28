import React from "react";
import { useSelector } from "react-redux";

import Avatar from "../../../components/perfil/Avatar.js";
import CadastrarObraButton from "../../../components/botoes/CadastrarObraButton.js";
import EditarPerfilButton from "../../../components/botoes/EditarPerfilButton.js";

import { Grid } from "@mui/material";

import "../../../styles/css/style.css";

function PerfilMainCard() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Avatar src={user.fotoPerfil} alt={user.nome} />
        </Grid>
        <Grid item xs={12} md={9}>
          <div className="perfil-main-card">
            <h1>
              {user.nome} {user.sobrenome}
            </h1>
            <div className="box light p-1">
              <div className="text-secondary">
                {user.dadosPlataforma.seguidores} seguidores
              </div>
              <div className="text-secondary">
                {user.dadosPlataforma.obras} obras cadastradas
              </div>
            </div>
            <div className="btns">
              <CadastrarObraButton />
              <EditarPerfilButton />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default PerfilMainCard;
