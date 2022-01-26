import React from "react";

// import estilos from "../../utils/estilos.json";
// import categorias from "../../utils/categorias.json";
// import cores from "../../utils/cores.json";

import Filtro from "./filtro/Filtro";
import CardObra from "../../components/cardObra/CardObra";

import db from "../../serv/db.json";

import "../../styles/css/style.css";


function ObrasPage() {
  const obras = db.obras;

  return (
    <div>
      <div className="filtros" style={{"height": '80px'}}>
        <Filtro />
      </div>
      <div className="cardContainer">
        {obras.map((obra) => (
          <CardObra obra={obra} />
        ))}
      </div>
    </div>
  );
}

export default ObrasPage;
