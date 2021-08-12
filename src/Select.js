import React, { useEffect , useState} from "react"
import Button from "./Button"

const Select = ({handleListProfessionals,handleModal})=>{
    const[especialties,setEspecialties]=useState([])
    const[isLoadedEspecialties,setIsLoadedEspecialties]= useState(false)

        
    useEffect(()=>{
        let url_especialties="https://api.feegow.com.br/api/specialties/list"
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-access-token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOjE2MjQ0NjgxODIsImxpY2Vuc2VJRCI6IjEwNSJ9.N7YZkaFrP597xjBOcArFnWk9lN45V9S6OeNyGtxi6bc");
        fetch(url_especialties,{ 
            method:'GET',
            headers: myHeaders,
            })
        .then(res=>res.json())
        .then(res=>{
            setEspecialties(res) 
            setIsLoadedEspecialties(true)}) 
        //fim req especialidades    
        
    },[])
    
    function getEspecialty(){
        let especialty = document.getElementById("selectEspecialty").value
        handleListProfessionals(especialty)
    }
    
    return(
        <div className="containerSelect">
            <span>Consulta de</span>
            <select id="selectEspecialty" onChange={getEspecialty}>
                <option >Selecione a Especialidade</option>
                {isLoadedEspecialties?especialties.content.map((conteudo)=><option value={conteudo.especialidade_id}key={conteudo.especialidade_id}>{conteudo.nome}</option>):<option>Carregando...</option>}
            </select>
            <Button event={handleModal}>Agendar</Button>
        </div>
    )
}

export default Select;