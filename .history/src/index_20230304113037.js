import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'

const tag = <strong>Olá React</strong>


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Jean Marcel"
            nota={9.3}/>
        <Fragmento/>
        
    </div>, 
    document.getElementById('root'))
