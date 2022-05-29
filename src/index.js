import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // ENTRADA, RODANDO, FIM
  // 0 <> 300
  // numeros de palpites

  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);

  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}> começar a jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2);
    setPalpite(proxPalpite);
  };

  return (
    <div clasname="App">
      <p> O seu numero de palpite é {palpite} ? </p>
      <p> Numero palpite é {numPalpites} ? </p>
      <p>
        {" "}
        Min: {min} / Max: {max}{" "}
      </p>
      <button onClick={menor}>Menor</button>
      <button>Acertou</button>
      <button>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
