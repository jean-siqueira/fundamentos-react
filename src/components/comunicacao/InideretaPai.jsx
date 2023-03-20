import React, { useState }  from "react";
import InidetaFilho from "./InidetaFilho";

export default (props) => {

  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)
  // nome idade nerd

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
   
    setNome(nomeParam);
    setIdade(idadeParam);
    setNerd(nerdParam);

    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade} </strong>
        </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <InidetaFilho quandoClicar={fornecerInformacoes}></InidetaFilho>
    </div>
  );
};
