import React from "react";

export default (props) => {

  const {min, max} = props

  const valorRandomico = parseInt(Math.random() * (max - min)) + min;

  return (
    <
    <p>
      Valor randômico entre {min} e {max} é : <strong>{valorRandomico}</strong>
    </p>
  );
};
