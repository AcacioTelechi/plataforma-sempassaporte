import React from "react";

import Banner from "../components/banner/Banner";
import Carrossel from "../components/carrossel/Carrossel";
import CarrosselItem from "../components/carrossel/CarrosselItem";
import CardObra from "../components/cardObra/CardObra";

import db from "../serv/db.json";

function HomePage() {
  const obras = db.obras;
  return (
    <div>
      <Banner />
      <Carrossel titulo="Mais curtidos">
        {obras.map((obra, index) => (
          <CarrosselItem key={index}>
            <CardObra obra={obra} />
          </CarrosselItem>
        ))}
      </Carrossel>
      <Carrossel titulo="Mais vendidos">
        {obras.map((obra, index) => (
          <CarrosselItem key={index}>
            <CardObra obra={obra} />
          </CarrosselItem>
        ))}
      </Carrossel>
      <Carrossel titulo="Categorias">
        {obras.map((obra, index) => (
          <CarrosselItem key={index}>
            <CardObra obra={obra} />
          </CarrosselItem>
        ))}
      </Carrossel>
    </div>
  );
}

export default HomePage;
