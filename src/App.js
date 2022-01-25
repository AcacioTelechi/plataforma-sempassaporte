import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import HomePage from "./views/HomePage";
import PerfilPage from "./views/PerfilPage";
import ObrasPage from "./views/Obras/ObrasPage";
import ObraPage from "./views/Obras/ObraPage";
import ArtistaPage from "./views/ArtistaPage";
import SobrePage from "./views/SobrePage";

const routes = [
  { path: "/", element: <HomePage />, access: "public" },
  { path: "/perfil", element: <PerfilPage />, access: "public" },
  { path: "/obras", element: <ObrasPage />, access: "public" },
  { path: "/obras/:id", element: <ObraPage />, access: "public" },
  { path: "/artista/:id", element: <ArtistaPage />, access: "public" },
  { path: "/sobre", element: <SobrePage />, access: "public" },
];

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
