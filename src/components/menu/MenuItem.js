import React, { useState } from "react";

import "../../styles/css/style.css";

function MenuItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="menubar-item">
      <a href="#" className="icon-btn" onClick={() => setIsOpen(!isOpen)}>
        {props.icon}
      </a>
      {isOpen && props.children}
    </li>
  );
}

export default MenuItem;
