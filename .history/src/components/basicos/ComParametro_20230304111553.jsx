import React from "react"

export default function ComParametro(props) {
    console.log(props)
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno }</strong>
                tem nota
                <strong>{ props.nota}</strong>
            </p>
            <h3>{ props.aluno }</h3>
        </div>
    )
}