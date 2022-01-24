import React from "react";

// import estilos from "../../utils/estilos.json";
// import categorias from "../../utils/categorias.json";
// import cores from "../../utils/cores.json";

import Filtro from "./filtro/Filtro";
import CardObra from "../../components/cardObra/CardObra";

import db from "../../serv/db.json";

import "../../styles/css/style.css";

// const filtros = [
//   { titulo: "Tamanho", dropdown: [{"id":"999", "nome": "Range selector com o tamanho AAxBB"}] },
//   { titulo: "Estilo", dropdown: estilos },
//   { titulo: "Categorias", dropdown: categorias },
//   { titulo: "Cor", dropdown: cores },
//   {
//     titulo: "Faixa de preço",
//     dropdown: [{"id":"666", "nome": "Range selector com o tamanho AAxBB"}],
//   },
// ];

function ObrasPage() {
  const obras = db.obras;

  return (
    <div>
      <Filtro />
      <div className="cardContainer">
        {obras.map((obra) => (
          <CardObra nome={obra.nome} img={obra.img} />
        ))}
      </div>
    </div>
  );
}

export default ObrasPage;
