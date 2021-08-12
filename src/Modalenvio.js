import React from "react"
import Button from "./Button"

const ModalEnvio = ({handleModal})=>{
    return(
        <div>
            <div id="overlay">
            </div>
            <div className="containerModalEnvio">
                <button className="close"onClick={handleModal}>X</button>
                <h2>Preencha Seus Dados</h2>
                <div className="inputsModal">
                    <input type="text" placeholder="Nome Completo"></input>
                    <select>
                        <option>Como conheceu?</option>
                        <option>Redes Sociais</option>
                        <option>Indicação de Alguém</option>
                        <option>Pesquisando</option>
                    </select>
                    <input type="text" placeholder="Nascimento"></input>
                    <input type="text" placeholder="CPF"></input>
                </div>
                <div className="modalButton">
                    <Button event={handleModal}>Solicitar horários</Button>
                </div>
            </div>
        </div>
        
    )
}

export default ModalEnvio