import React, { useEffect } from "react";
import "./App.css";
import BoardPage from "./componenets/BoardPage";

function App() {
  const getAllPokemons = async () => {};

  useEffect(() => {
    (async () => {
      await getAllPokemons();
    })();
  });

  return (
    <div className="App">
      <BoardPage />
    </div>
  );
}

export default App;
