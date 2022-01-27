import React, { useEffect, useState } from "react";

import "../../styles/css/style.css";

function Avatar(props) {
  const [className, setClassName] = useState("avatar");

  useEffect(() => {
    if (props.size) {
      setClassName(`avatar ${props.size}`);
    }
  }, [props]);

  return (
    <div className={className}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Avatar;
