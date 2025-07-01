import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokedexContainer from "../components/PokedexContainer";
import Toast from "../components/Toast";
export default function PokemonPage() {
  const { pokemonName } = useParams();
  const [toasts, setToasts] = useState([]);
  const [pokemonData, setPokemonData] = useState({});

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
      {pokemonData !== null || pokemonData !== undefined ? (
        <PokedexContainer data={pokemonData}></PokedexContainer>
      ) : (
        ""
      )}
    </>
  );
}
