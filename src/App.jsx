import "./App.css";
import Header from "./components/Header.jsx";
import PokedexContainer from "./components/PokedexContainer.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [pokemonData, setPokemonData] = useState({});

  async function fetchPokemonData(pokemon) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    setPokemonData(fetchPokemonData(inputRef.current.value));
  }

  return (
    <>
      <Header ref={inputRef} onSubmit={handleClick}></Header>
      <PokedexContainer data={pokemonData}></PokedexContainer>
    </>
  );
}

export default App;
