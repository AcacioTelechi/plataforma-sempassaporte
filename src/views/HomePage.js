import React from "react";

import Banner from "../components/banner/Banner";
import Carrossel from "../components/carrossel/Carrossel";
import CarrosselItem from "../components/carrossel/CarrosselItem";

const itens = [
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
  {
    titulo: "Título 1",
    imagem: "https://picsum.photos/200/300",
  },
];

function HomePage() {
  return (
    <div>
      <Banner />
      <Carrossel titulo="Mais curtidos">
        {itens.map((item, index) => (
          <CarrosselItem key={index} {...item} />
        ))}
      </Carrossel>
      <Carrossel titulo="Mais vendidos">
        {itens.map((item, index) => (
          <CarrosselItem key={index} {...item} />
        ))}
      </Carrossel>
      <Carrossel titulo="Categorias">
        {itens.map((item, index) => (
          <CarrosselItem key={index} {...item} />
        ))}
      </Carrossel>
    </div>
  );
}

export default HomePage;
