import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const tag = <strong>Olá React</strong>


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Jean"
            nota={9.3}/>

    <ComParametro 
            titulo="Situação do aluno"
            aluno="Maria"
            nota={9.5}/>
    </div>, 
    document.getElementById('root'))
