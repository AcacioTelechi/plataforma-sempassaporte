import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import MiniCardPerfil from "../../components/perfil/MiniCardPerfil";

import db from "../../serv/db.json";

function ObraPage(props) {
  const { id } = useParams();
  const [obra, setObra] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [artista, setArtista] = useState({});
  const [isLoadedArtista, setIsLoadedArtista] = useState(false);

  useEffect(() => {
    getObra();
  }, [id]);

  function getObra() {
    const obra = db.obras.find((obra) => obra.id === id);
    setObra(obra);
    setIsLoaded(true);
    getArtista(obra);
  }

  function getArtista(obra) {
    const artista = db.artistas.find((artista) => artista.id === obra.autorId);
    setArtista(artista);
    setIsLoadedArtista(true);
    console.log({ artista });
  }

  if (!isLoaded) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="container-flex">
        <div className="col-2 p-1">
          <img src={obra.img} alt={obra.titulo} />
        </div>
        <div className="col-2 p-1">
          <h1>{obra.titulo}</h1>
          {isLoadedArtista && <MiniCardPerfil perfil={artista} />}
          <p className="py-2">{obra.descricao}</p>
        </div>
      </div>
    );
  }
}

export default ObraPage;
