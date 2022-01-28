import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PerfilMainCard from "./PerfilMainCard.js";
import CardObra from "../../../components/cardObra/CardObra.js";
import Avatar from "../../../components/perfil/Avatar.js";
import SeguirButton from "../../../components/botoes/SeguirButton.js";

import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import db from "../../../serv/db.json";

function MeuPerfilArtista() {
  const {id} = useSelector((state) => state.user);
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
    return <h2>Carregando...</h2>;
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
        <PerfilMainCard />
        <div className="my-2">
        <h2>Estilos</h2>
        <Stack direction="row" spacing={1}>
          {estilos.map((estilo, index) => (
            <Chip key={index} label={estilo} variant="outlined" />
          ))}
        </Stack>
        </div>
        <div className="my-2">
          <h2> Sobre </h2>
          <p>{sobre}</p>
        </div>
        <div className="my-2">
          <h2> Poética </h2>
          <p>{poetica}</p>
        </div>
        <div className="my-2">
          <h2> Minhas Obras </h2>
          {!isObrasLoaded ? (
            <h2>Carregando...</h2>
          ) : (
            <div className="cardContainer">
              {obras.map((obra) => (
                <CardObra obra={obra} />
              ))}
            </div>
           )}
        </div>
      </div>
    );
  }
}

export default MeuPerfilArtista;
