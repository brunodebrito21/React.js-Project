import React from "react"
import Button from "./Button"

const Proof=({src,nome,conselho,handleModal})=>{
    return(
        <div className="proof">
            <div className="containerImgProof">
                <img src={src}alt=" "></img>
                <div className="containerDrCrm">
                    <h5>{nome}</h5>
                    <small>{conselho}</small>
                </div>
            </div>
            <Button event={handleModal}>agendar</Button>
        </div>
    )
}


export default Proof;