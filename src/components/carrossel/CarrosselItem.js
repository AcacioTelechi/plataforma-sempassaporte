import React from "react";

import CardObra from "../cardObra/CardObra";

function CarrosselItem(props) {
  return (
    <div className="carrossel-item">
        <CardObra nome={props.titulo} img={props.imagem} />
    </div>
  );
}

export default CarrosselItem;
