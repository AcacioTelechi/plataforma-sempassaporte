import React from "react";

function Carrossel(props) {
  return (
    <div className="carrossel p-2">
      <h2>{props.titulo}</h2>
      <div className="carrossel-trilho-wrapper">
        <div className="carrossel-trilho">{props.children}</div>
      </div>
      <div className="indicador">pontos que marcam a pagina</div>
    </div>
  );
}

export default Carrossel;
