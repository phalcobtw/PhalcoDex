import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokedexContainer from "../components/PokedexContainer";
import Toast from "../components/Toast";
import Loading from "../components/Loading";
export default function PokemonPage() {
  const { pokemonName } = useParams();
  const [toasts, setToasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    if (!pokemonName) return; // evita llamada inicial vacía

    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!res.ok) throw new Error("Pokemon not found!");
        const data = await res.json();
        setPokemonData(data);
        setIsLoading(false);
      } catch (err) {
        showToasty(err.message);
        setIsLoading(false);
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
      {isLoading ? <Loading></Loading> : ""}
      {(pokemonData !== null || pokemonData !== undefined) && !isLoading ? (
        <PokedexContainer data={pokemonData}></PokedexContainer>
      ) : (
        ""
      )}
    </>
  );
}
