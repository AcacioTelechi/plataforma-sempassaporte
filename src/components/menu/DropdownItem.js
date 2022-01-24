import React from "react";

function DropdownItem(props) {
  return (
    <a href="#" className="dropdown-item">
      {/* <span className="icon-btn">{props.leftIcon}</span> */}
      {props.children}
      {/* <span className="icon-right">{props.rightIcon}</span> */}
    </a>
  );
}

export default DropdownItem;
