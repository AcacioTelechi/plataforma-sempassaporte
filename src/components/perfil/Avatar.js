import React from "react";

import "../../styles/css/style.css";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Avatar;