import React from "react"

export default function ComParametro(props) {
    cconst status = props.nota >= 
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota
                <strong> { props.nota }</strong>
            </p>
        </div>
    )
}