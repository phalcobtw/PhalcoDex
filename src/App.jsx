import "./App.css";
import Header from "./components/Header.jsx";
import PokedexContainer from "./components/PokedexContainer.jsx";
import Modal from "./components/Modal.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const modalRef = useRef();
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
        modalRef.current.showModal();
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
      {<Modal ref={modalRef}></Modal>}
      <Header inputRef={inputRef} onSubmit={handleClick}></Header>
      <PokedexContainer data={pokemonData}></PokedexContainer>
    </>
  );
}

export default App;
