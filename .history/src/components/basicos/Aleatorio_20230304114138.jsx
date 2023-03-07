import React from "react";

export default function(props) {

    const max = props.max;
    const min = props.min;
    const valorRandomico = Math.random() * (max - min) + min;

    return <p>
        Valor randômico entre { min } e {max} é : <strong>{ valorRandomico }</strong> 
    </p>

}