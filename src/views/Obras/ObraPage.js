import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MiniCardPerfil from "../../components/perfil/MiniCardPerfil";
import CompartilharButton from "../../components/botoes/CompartilharButton";
import AmeiButton from "../../components/botoes/AmeiButton";
import AddCartButton from "../../components/botoes/AddCartButton";
import Preco from "../../components/preco/Preco";

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
  }

  if (!isLoaded) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="container-flex">
        <div className="col-2 p-1">
          <img src={obra.img} alt={obra.titulo} />
        </div>
        <div className="col-2 p-1 container-space-between column">
          <div>
            <h1>{obra.titulo}</h1>
            {isLoadedArtista && <MiniCardPerfil perfil={artista} />}
            <p className="text-secondary py-2">{obra.descricao}</p>
            <p className="text-secondary">Técnica: Pintura em tinta óleo</p>
            <p className="text-secondary">
              Dimensões: {obra.tamanhoX}cm x {obra.tamanhoY}cm
            </p>
            <Preco obra={obra} />
            <div className="container-felx-start my-2">
              <AmeiButton />
              <CompartilharButton />
              <AddCartButton />
            </div>
          </div>
          <div className="container-felx-start">Comentários</div>
        </div>
      </div>
    );
  }
}

export default ObraPage;
