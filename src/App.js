import React from "react";
import PaginaPrincipala from "./Components/PaginaPrincipala";
import Competitori from "./Components/Competitori";
import '../src/App.css';
import Pool from "./Components/Pool";
import { useState } from "react";

function App() {
  const [paginaCurenta, setPaginaCurenta] = useState(2);

  const paginaAnterioara = () => {
    setPaginaCurenta((prevPagina) => {
      if (prevPagina === 1) return 3;
      return prevPagina - 1;
    });
  };

  const paginaUrmatoare = () => {
    setPaginaCurenta((prevPagina) => {
      if (prevPagina === 3) return 1;
      return prevPagina + 1;
    });
  };

  return (
    <div className="app-container">
      <div className="slider-container">
        <button className="previous" onClick={paginaAnterioara}>
        </button>
        {paginaCurenta === 1 && <Pool />}
        {paginaCurenta === 2 && <PaginaPrincipala />}
        {paginaCurenta === 3 && <Competitori />}
        <button className="next" onClick={paginaUrmatoare}>
        </button>
      </div>
    </div>
  );
}

export default App;