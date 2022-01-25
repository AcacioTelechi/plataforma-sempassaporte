import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  card: {
    // margin: "15px 10px",
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
  },
  s: {
    gridRowEnd: "span 26",
  },
  m: {
    gridRowEnd: "span 33",
  },
  l: {
    gridRowEnd: "span 45",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "16px",
  },
  imgHover: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "16px",
    filter: "brightness(0.5)",
  },
};

function CardObra(props) {
  const { autorId, id, img } = props.obra;
  const [imgUrl, setImgUrl] = useState(img);
  const [imgSize, setImgSize] = useState("s");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    defSize(imgUrl);
  }, [imgUrl]);

  function defSize(imgUrl) {
    let img = new Image();
    img.src = imgUrl;
    img.onload = function () {
      const h = this.height;
      const w = this.width;

      if (h * w > 1000000) {
        setImgSize("l");
      } else if (h * w > 600000) {
        setImgSize("m");
      } else {
        setImgSize("s");
      }
    };
  }

  function mouseHover() {
    setHover(!hover);
  }

  return (
    <Link to={`/obra/${id}`}>
      <div
        style={{
          ...styles.card,
          ...styles[imgSize],
        }}
      >
        <img
          src={imgUrl}
          alt={props.nome}
          style={hover ? styles.imgHover : styles.img}
          onMouseEnter={mouseHover}
          onMouseOut={mouseHover}
        />
      </div>
    </Link>
  );
}

export default CardObra;
