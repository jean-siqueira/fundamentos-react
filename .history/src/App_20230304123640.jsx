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
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={0} max={100} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmentro" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Jean Marcel"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);