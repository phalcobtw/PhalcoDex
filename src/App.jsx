import "./App.css";
import Header from "./components/Header.jsx";
import PokedexContainer from "./components/PokedexContainer.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    if (!pokemonName) return; // evita llamada inicial vacía

    async function fetchData() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await res.json();
        setPokemonData(data);
      } catch (err) {
        console.error("Error al buscar el Pokémon:", err);
        setPokemonData(null); // o podrías manejar un estado de error
      }
    }

    fetchData();
  }, [pokemonName]);

  function handleClick() {
    const name = inputRef.current.value.trim().toLowerCase();
    if (name) {
      setPokemonName(name);
    }
  }

  return (
    <>
      <Header ref={inputRef} onSubmit={handleClick}></Header>
      <PokedexContainer data={pokemonData}></PokedexContainer>
    </>
  );
}

export default App;
