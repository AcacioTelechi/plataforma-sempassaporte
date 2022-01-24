import React, { useState } from "react";
import { Link } from "react-router-dom";

import BubbleItem from "./BubbleItem";

import "../../styles/css/style.css";

function Bubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [className, setClassName] = useState("bubble");

  function handleClick() {
    if (isOpen) {
      setIsOpen(false);
      setClassName("bubble");
    } else {
      setIsOpen(true);
      setClassName("bubble open");
    }
  }

  function onDragStart(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData(
      "text/plain",
      parseInt(style.getPropertyValue("left"), 10) -
        event.clientX +
        "," +
        (parseInt(style.getPropertyValue("top"), 10) - event.clientY)
    );
  }
  
  return (
    <div
      id="bubble-drag"
      className={className}
      draggable
      onDragStart={onDragStart}
    >
      <div className="hamburger" onClick={handleClick}>
        <span className="line open"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <BubbleItem>
        <Link to="/">Home</Link>
      </BubbleItem>
      <BubbleItem>
        <Link to="/obras">Técnicas</Link>
      </BubbleItem>
      <BubbleItem>
        <Link to="/sobre">Sobre</Link>
      </BubbleItem>
      {/* <BubbleItem></BubbleItem> */}
    </div>
  );
}

export default Bubble;
