import { useState } from "react";
import { Button, ContainerContador } from "./styles"


export function Contador() {
    
    const [numero, setNumero] = useState(0)
    
    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1 )
    }

    return (
        <ContainerContador>
            <Button onClick={diminuir}>-</Button>
            <h5>{numero}</h5>
            <Button onClick={aumentar}>+</Button>
        </ContainerContador>

        
    )
}