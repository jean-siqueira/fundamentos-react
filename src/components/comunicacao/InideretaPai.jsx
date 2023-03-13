import React from "react";
import InidetaFilho from "./InidetaFilho";

export default (props) => {
  let nome = '?'
  let idade = 0
  let nerd = false
  // nome idade nerd

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
   
    nome = nomeParam;
    idade = idadeParam;
    nerd = nerdParam;
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <div>
        <span>{nome}</span>
        <span>
          <strong>{idade}</strong>
        </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <InidetaFilho quandoClicar={fornecerInformacoes}></InidetaFilho>
    </div>
  );
};
