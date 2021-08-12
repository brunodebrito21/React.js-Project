import React, { useEffect,useState } from "react"
import Proof from "./Proof"
import sem_foto from "./sem_foto.jpg"

const ShowProof=({especialty,handleModal})=>{
    const[professionals,setProfessionals]=useState([])
    const[logado,setLogado]=useState(false)
    const[counter,setCounter]=useState(0)

        useEffect(()=>{
        let url_professionals="https://api.feegow.com.br/api/professional/list"


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-access-token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOjE2MjQ0NjgxODIsImxpY2Vuc2VJRCI6IjEwNSJ9.N7YZkaFrP597xjBOcArFnWk9lN45V9S6OeNyGtxi6bc");
        
        //req profissionais
        fetch(url_professionals,{method:'GET',headers:myHeaders,})
            .then(res=>res.json())
            .then(res=>{
                setProfessionals(res.content)
                setLogado(true)
             })
        },[especialty])
        function handleRenderCards(){
            const card = logado?professionals.filter(prof=>prof.especialidades.find(esp=>esp.especialidade_id===parseInt(especialty)))
                        .map(card=><Proof handleModal={handleModal}src={card.foto?card.foto:sem_foto} conselho={card.documento_conselho?card.conselho +" "+card.documento_conselho:"Sem Conselho"} nome={card.nome?card.nome.slice(0,18):"Sem Nome"}></Proof>):<p>Aguarde...</p>
           setTimeout(()=>{setCounter(card.length)},5)
            return card
        }
    return(
        <div className="showProof">
            <div>
                <h2>{counter} encontrados</h2> 
            </div>
            <div className="containerProof">
                {handleRenderCards()}
            </div>
        </div>
    )
}


export default ShowProof;