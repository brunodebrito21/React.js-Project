import React,{useEffect, useState} from "react"
import Select from "./Select"
import ShowProof from "./ShowProof"
import ModalEnvio from "./Modalenvio"
import './App.css';

function App() {
  const[wasClicked,setWasClicked]=useState(false)
  const[selectedEspecialty,setSelectedEspecialty]=useState("")

  function handleListProfessionals(especialty){
    setSelectedEspecialty(especialty)
}
  function handleModal(){
    setWasClicked(!wasClicked)
  }
useEffect(()=>{
},[selectedEspecialty])
  return (
    <div className="App">
        <Select handleModal={handleModal} handleListProfessionals={handleListProfessionals}/>
        <ShowProof handleModal={handleModal} especialty={selectedEspecialty}/>
        {wasClicked?<ModalEnvio handleModal={handleModal}></ModalEnvio>:[]}
    </div>
  );
}

export default App;
