import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import "./App.css"
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório" color="#FA">
        <Aleatorio min={0} max={100} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmentro">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Jean Marcel"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
