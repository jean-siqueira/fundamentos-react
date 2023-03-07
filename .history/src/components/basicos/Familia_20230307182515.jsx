import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default propos => {
    return (
        <div>
            <FamiliaMembro nome="Jean" sobrenome="Siqueira"></FamiliaMembro>
            <FamiliaMembro nome="Débora" sobrenome="Moreira"></FamiliaMembro>
            <FamiliaMembro nome="Arthur" sobrenome="Siqueira"></FamiliaMembro>
        </div>
    )
}