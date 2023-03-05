import React from "react";

export default function(props) {

    return (
        <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Jean Marcel"
            nota={9.3}/>
        <Fragmento/>
        
    </div>
    )
}