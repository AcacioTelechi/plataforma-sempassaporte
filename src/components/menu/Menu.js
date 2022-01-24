import React from "react";

import "../../styles/css/style.css";

function Menu(props) {

  return (
    <div className="menubar">
      <ul className="menubar-menu">
          {props.children}
      </ul>
    </div>
  );
}

export default Menu;
