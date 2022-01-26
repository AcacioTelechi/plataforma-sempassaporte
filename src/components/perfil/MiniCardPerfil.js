import React from "react";
import { Link } from "react-router-dom";

import SeguirButton from "./SeguirButton";

function MiniCardPerfil(props) {
  const { perfil } = props;

  console.log({ perfil });
  return (
    <div className="minicard-perfil my-2">
      <div className="foto-perfil">
        <Link to={`/artista/${perfil.id}`}>
          <img src={perfil.fotoPerfil} alt={perfil.nome} />
        </Link>
      </div>
      <div className="minicard-perfil-info">
        <Link to={`/artista/${perfil.id}`}>
          {perfil.nome} {perfil.sobrenome}
        </Link>
        <p>{perfil.dadosPlataforma.seguidores} seguidores</p>
      </div>
      <SeguirButton perfil={perfil} />
    </div>
  );
}

export default MiniCardPerfil;
