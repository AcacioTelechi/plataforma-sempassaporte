import React from "react";
import { useSelector } from "react-redux";

import MeuPerfilArtista from "./MeuPerfilArtista";
import MeuPerfilUsuario from "./MeuPerfilUsuario";

function MeuPerfil() {
  const { tipoUsuario } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    if (tipoUsuario === "a") {
      return <MeuPerfilArtista />;
    } else {
      return <MeuPerfilUsuario />;
    }
  } else {
    return <div>Usuario não está logado</div>;
  }
}

export default MeuPerfil;
