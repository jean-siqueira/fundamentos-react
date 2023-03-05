import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default functionApp(props) {

    return (
        <div id="app">
            
            <Primeiro></Primeiro>
            <ComParametro 
                titulo="Situação do aluno"
                aluno="Jean Marcel"
                nota={9.3}/>
        </div>
    )
}