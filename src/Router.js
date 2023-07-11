import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apresentacao from "./Components/Apresentacao";
import Pedido from "./Components/Pedido";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Apresentacao />} />
            <Route path="/pedido" element={<Pedido />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
