import React from "react";

import Bubble from "../bubble/Bubble";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout(props) {

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(",");
    var dm = document.getElementById("bubble-drag");
    dm.style.left = event.clientX + parseInt(offset[0], 10) + "px";
    dm.style.top = event.clientY + parseInt(offset[1], 10) + "px";
    event.preventDefault();
    event.dataTransfer.clearData()
    return false;
  }

  return (
    <div className="layout" onDragOver={onDragOver} onDrop={onDrop}>
      <Header />
      <main >{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
