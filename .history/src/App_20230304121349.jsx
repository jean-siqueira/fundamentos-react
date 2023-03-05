import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React (Arrow)</h1>

    <Card titulo="Desafio Aleatório">
      <Aleatorio min={0} max={100} />
    </Card>

    <Card titulo="Fragmento">
     <Fragmento />
    </Card>


    <Card titulo="Com ">
     <Fragmento />
    </Card>

    
    
    <Primeiro></Primeiro>
  </div>
);
