import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import "./App.css";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import InideretaPai from "./components/comunicacao/InideretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Mega Sena" color="#E89F56">
        <Mega qtde={8}></Mega>
      </Card>

      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={105}></Contador>
      </Card>

      <Card titulo="#11 - Componente Controlado" color="#E46F56">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
        <InideretaPai></InideretaPai>
      </Card>

      <Card titulo="#09 - Comunicação direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Jean" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: "jean@teste.com" }}></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Tabela Produtos" color="#001f3f">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componentes com filhos" color="#00C8F8">
        <Familia sobrenome="Siqueira">
          <FamiliaMembro nome="Jean"></FamiliaMembro>
          <FamiliaMembro nome="Débora"></FamiliaMembro>
          <FamiliaMembro nome="Arthur"></FamiliaMembro>
        </Familia>
      </Card>

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

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
