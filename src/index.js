import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  // palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpits, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  // function iniciarJogo
  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <h1>
          Vamos jogar?
          <p>Pense em um número de 0 à 300</p>
        </h1>
        <button type="button" className="btn" onClick={iniciarJogo}>
          Começar a jogar!
        </button>
      </div>
    );
  }

  // function menor
  const menor = () => {
    setNumPalpites(numPalpits + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  // function maior
  const maior = () => {
    setNumPalpites(numPalpits + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  // function acertou
  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="App">
        <h1>
          Acertei o número <strong>{palpite}</strong> com{" "}
          <strong>{numPalpits}</strong> chutes!
        </h1>
        <button type="button" onClick={iniciarJogo}>
          Iniciar novamente!
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>O seu número é {palpite}?</h1>
      <p>Nº de palpites: {numPalpits}</p>
      <button type="button" onClick={menor}>
        Menor!
      </button>
      <button type="button" onClick={acertou}>
        Acertou!
      </button>
      <button type="button" onClick={maior}>
        Maior!
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
