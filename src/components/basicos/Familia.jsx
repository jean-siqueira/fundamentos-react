import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Jean" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Débora" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Arthur" sobrenome="Fixo"></FamiliaMembro>
        </div>
    )
}