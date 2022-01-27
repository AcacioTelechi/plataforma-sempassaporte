import React, { useEffect, useState } from "react";

import Comentario from "./Comentario";

import db from "../../serv/db.json";

function ComentariosBox(props) {
  const { obraId } = props;
  const [comentarios, setComentarios] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getComentarios();
  }, [obraId]);

  function getComentarios() {
    const comentarios = db.comentarios.filter(
      (comentario) => comentario.obraId === obraId
    );
    setComentarios(comentarios);
    setIsLoaded(true);
    console.log(comentarios);
  }

  if (!isLoaded) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        {comentarios.map((comentario) => (
          <Comentario comentario={comentario} />
        ))}
      </div>
    );
  }
}

export default ComentariosBox;
