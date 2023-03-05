import React from "react";

export default (props) => {

  const {min, max} = props

  const valorRandomico = parseInt(Math.random() * (max - min)) + min;

  return (
    
    <h1>Valor Aleatório</h1>
    <p>
      Valor randômico entre {min} e {max} é : <strong>{valorRandomico}</strong>
    </p>
  );
};
