import React from "react";

import "../../styles/css/style.css";

function Preco(props) {
  const { obra } = props;
  if (obra.disp === "true") {
    return <div className="text-price my-2">R$ {obra.preco}</div>;
  } else {
    return (
      <div className="text-secondary my-2" style={{ textAlign: "left" }}>
        Não disponível para venda
      </div>
    );
  }
}
export default Preco;
