import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardObra from "../components/cardObra/CardObra.js";

import db from "../serv/db.json";

function ArtistaPage() {
  const { id } = useParams();
  const [artista, setArtista] = useState([]);
  const [isArtistaLoaded, setIsArtistaLoaded] = useState(false);
  const [obras, setObras] = useState([]);
  const [isObrasLoaded, setIsObrasLoaded] = useState(false);

  useEffect(() => {
    getArtista();
    getObras();
  }, [id]);

  function getArtista() {
    for (let i = 0; i < db.artistas.length; i++) {
      if (db.artistas[i].id === id) {
        setArtista(db.artistas[i]);
        setIsArtistaLoaded(true);
      }
    }
  }

  function getObras() {
    const obrasFiltradas = [];
    for (let i = 0; i < db.obras.length; i++) {
      if (db.obras[i].autorId === id) {
        obrasFiltradas.push(db.obras[i]);
      }
    }
    setObras(obrasFiltradas);
    setIsObrasLoaded(true);
  }

  if (!isArtistaLoaded) {
    return <h1>Carregando...</h1>;
  } else {
    const {
      nome,
      sobrenome,
      nacionalidade,
      estado,
      dadosProfissionais,
      dadosPlataforma,
    } = artista;
    const { sobre, poetica, estilos } = dadosProfissionais;
    const { seguidores } = dadosPlataforma;

    return (
      <div className="container">
        <div className="titulo-centralizado">
          {nome} {sobrenome}
        </div>
        <div className="subtitulo-centralizado">Seguidores: {seguidores}</div>
        <div className="subtitulo-centralizado">
          {nacionalidade} / {estado}
        </div>
        <h1>Estilos</h1>
        <ul>
          {estilos.map((estilo, index) => (
            <li key={index}>{estilo}</li>
          ))}
        </ul>
        <h1> Sobre </h1>
        <p>{sobre}</p>
        <h1> Poética </h1>
        <p>{poetica}</p>
        <h1> Obras </h1>
        {!isObrasLoaded ? (
          <h1>Carregando...</h1>
        ) : (
          <div className="cardContainer">
            {obras.map((obra) => (
              <CardObra obra={obra}/>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ArtistaPage;
