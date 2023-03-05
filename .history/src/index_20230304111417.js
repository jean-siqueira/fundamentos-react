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
            titulo="Segundo Componente"
            aluno="Muito Legal!"
            nota={9.}/>
    </div>, 
    document.getElementById('root'))
