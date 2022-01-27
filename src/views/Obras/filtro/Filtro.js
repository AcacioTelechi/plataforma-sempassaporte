import React, { useState, useEffect } from "react";

import FiltroItens from "./FiltroItens";

import estilos from "../../../utils/estilos.json";
import cores from "../../../utils/cores.json";

import "../../../styles/css/style.css";

function Filtro() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState([0, 0]);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    if (scrollPos[0] > scrollPos[1]) {
      setIsHide(false);
    } else if (scrollPos[0] < scrollPos[1]) {
      setIsHide(true);
      // setIsOpen(false);
    }
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [scrollPos]);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScrollPos([scrollPos[1], winScroll]);
  };

  return (
    <div className="container-fluid p-1">
      <button
        className="btn vermelho"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: isHide ? "none" : "block",
          margin: 0,
        }}
      >
        Filtro
      </button>
      {isOpen && !  isHide && (
        <div className="filtro-content p-1">
          <FiltroItens titulo="Estilos" obj={estilos} />
          <FiltroItens titulo="Cores" obj={cores} />
        </div>
      )}
      
    </div>
  );
}

export default Filtro;
