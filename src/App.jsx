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
        if (!res.ok) throw new Error("Pokémon no encontrado");
        const data = await res.json();
        setPokemonData(data);
      } catch (err) {
        console.error("Error al buscar el Pokémon:", err);
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
      <Header inputRef={inputRef} onSubmit={handleClick}></Header>
      <PokedexContainer data={pokemonData}></PokedexContainer>
    </>
  );
}

export default App;
