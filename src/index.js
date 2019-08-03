import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const titleFull =  <h1> CHUTES! </h1>
const subtitle = <h4>Algoritmo que acerta seu número que esteja entre 0 e 300</h4>
const dev = <label>By: Vitor Gomes</label>

function chutesV (numPalpites){
  if(numPalpites===1){
    return 'CHUTE!'
  }else{
    return 'CHUTES!'
  }
}

function App(props) {
// ENTRADA, RODANDO, FIM
const [estado, setEstado] = useState('ENTRADA')
// NUMERO QUE SERÁ O CHUTE, VALOR INICIAL 150
const [palpite, setPalpite] = useState(150)
// CONTADOR DE QUANTOS CHUTES JÁ FORAM FEITOR
const [numPalpites, setNumPalpites] = useState(1)
// VALOR MINIMO E MAXIMO PARA EXECUÇÃO DO PROGRAMA
const [min, setMin] = useState(0)
const [max, setMax] = useState(301)


const iniciarJogo = () =>{
  setEstado('RODANDO')
  setMin(0)
  setMax(301)
  setNumPalpites(1)
  setPalpite(150)
}

if(estado === 'ENTRADA'){
  return (<div className="App">
  {titleFull}
  {subtitle}
  <button onClick={iniciarJogo}>Começar a jogar!</button>
  {dev}
  </div>
  )
}

const menor = () =>{
  setNumPalpites(numPalpites + 1)
  setMax(palpite)
  const proxPalpite = parseInt((palpite - min) /2) + min
  setPalpite(proxPalpite)
}


const maior = () => {
  setNumPalpites(numPalpites + 1)
  setMin(palpite)
  const proxPalpite = parseInt((max -  palpite) /2) + palpite
  setPalpite(proxPalpite)
}

const acertou = () =>{
  setEstado('FIM')
}

if(estado === 'FIM'){
  return (
    <div className="App">
    {titleFull}
    {subtitle}
    <p>Acertei o número <strong> {palpite} </strong> em <strong>{numPalpites} </strong>
    {chutesV(numPalpites)}
    </p>
    
    <button onClick={iniciarJogo}>Reiniciar jogo!</button>
    {dev}
    </div>
  )
}
  return (
    <div className="App">
    {titleFull}
     <p>O seu Número é {palpite}?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
      {dev}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
