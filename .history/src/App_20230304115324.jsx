import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React (Arrow)</h1>

    
    <Aleatorio min={0} max={100}/>
    <Fragmento />
    <ComParametro titulo="Situação do aluno" aluno="Jean Marcel" nota={9.3} />
    <Primeiro></Primeiro>
  </div>
);
