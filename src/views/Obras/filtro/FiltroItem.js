import React, {useState} from "react";

function FiltroItem(props) {
  return (
    <div className="p-1">
      <h3>{props.titulo}</h3>
        <ul>
            {props.obj.map((item) => (
                <li key={item.id}>{item.nome}</li>
            ))}
        </ul>
    </div>
  );
}

export default FiltroItem;
