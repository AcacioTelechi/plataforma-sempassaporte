import React, { useEffect, useState } from "react";

import Avatar from "../../components/perfil/Avatar";

import db from "../../serv/db.json";

function Comentario(props) {
  const { comentario } = props;
  const [usuario, setUsuario] = useState({});
  const [isLoadedUsuario, setIsLoadedUsuario] = useState(false);

  useEffect(() => {
    getUsuario();
  }, [comentario]);

  function getUsuario() {
    const usuario = db.usuarios.find(
      (usuario) => usuario.id === comentario.autorId
    );
    setUsuario(usuario);
    setIsLoadedUsuario(true);
  }

  if (!isLoadedUsuario) {
    return <div>Carregando...</div>;
  } else {
    return (
      <div className="comentario p-1 my-1">
        <div className="avatar-container">
          <Avatar
            src={usuario.fotoPerfil}
            alt={usuario.nomeUsuario}
            size="small"
          />
        </div>
        <div className="comentario-wrapper">
          <div className="comentario-content">
            <h5>{usuario.nomeUsuario}</h5>
            <div className="comentario-text">{comentario.comentario}</div>
          </div>
          <div className="comentario-actions">
            <div className="comentario-action main">
            <button>Curtir</button>
            <button>Responder</button>
            </div>
            <div className="comentario-action secondary">
            <button>Outros</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comentario;
