import React from "react";
import { Link } from "react-router-dom";
import db from "../serv/db.json";

function ListaArtistasPage() {
  const artistas = db.artistas

     return (
      <div>
        {/* Menu de pesquisa por nome e filtros*/}
        <h1>Artistas</h1>
        {/* Card com foto do perfil */}
        <ul>
          {artistas.map((artista) => (
            <li key={artista.id}>
              <Link to={`/artista/${artista.id}`}>
                {artista.nome} {artista.sobrenome}
              </Link>
              <h3>Estilos</h3>
              <ul>
                {artista.dadosProfissionais.estilos.map((estilo) => (
                  <li key={estilo}>{estilo}</li>
                ))}
              </ul>
              <h4>Obras</h4>
              <p>{artista.dadosPlataforma.obras}</p>
              <h4>Curtidas</h4>
              <p>{artista.dadosPlataforma.curtidas}</p>
              <h4>Seguidores</h4>
              <p>{artista.dadosPlataforma.seguidores}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default ListaArtistasPage;
