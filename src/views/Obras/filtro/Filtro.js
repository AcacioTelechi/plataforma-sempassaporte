import React, { useState } from "react";

import FiltroItem from "./FiltroItem";

import estilos from "../../../utils/estilos.json"
import cores from "../../../utils/cores.json"

import "../../../styles/css/style.css";

function Filtro() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-fluid p-1">
      {isOpen && (
        <div className="filtro-content p-1">
          <FiltroItem titulo= "Estilos" obj={estilos}/>
          <FiltroItem titulo= "Cores" obj={cores}/>
        </div>
      )}
      <div className="filtro px-1" onClick={() => setIsOpen(!isOpen)}>
        Filtro
      </div>
    </div>
  );
}

export default Filtro;
