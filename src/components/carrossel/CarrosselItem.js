import React from "react";


function CarrosselItem(props) {
  return (
    <div className="carrossel-item">
        {props.children}
    </div>
  );
}

export default CarrosselItem;
