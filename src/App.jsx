import "./App.css";
import Header from "./components/Header.jsx";
import PokedexContainer from "./components/PokedexContainer.jsx";
import Toast from "./components/Toast.jsx";
import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [toasts, setToasts] = useState([]);
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
        showToasty(err.message);
        setPokemonName("");
      }
    }

    fetchData();
  }, [pokemonName]);

  function showToasty(message) {
    const id = Date.now(); // ID único por tiempo
    const newToast = { id, message };
    setToasts((prev) => [...prev, newToast]);
  }

  function handleClick() {
    const name = inputRef.current.value.trim().toLowerCase();
    if (name) {
      setPokemonName(name);
    }
  }

  return (
    <>
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            duration={3000}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </div>
      <Header inputRef={inputRef} onSubmit={handleClick}></Header>
      <PokedexContainer data={pokemonData}></PokedexContainer>
    </>
  );
}

export default App;
