import React, { useState, useEffect } from "react";

import FiltroItem from "./FiltroItem";

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
      setIsHide(true);
    } else if (scrollPos[0] < scrollPos[1]) {
      setIsHide(false);
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
      {isOpen && (
        <div className="filtro-content p-1">
          <FiltroItem titulo="Estilos" obj={estilos} />
          <FiltroItem titulo="Cores" obj={cores} />
        </div>
      )}
      <div
        className="filtro px-1"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: isHide ? "block" : "none",
        }}
      >
        Filtro
      </div>
    </div>
  );
}

export default Filtro;
