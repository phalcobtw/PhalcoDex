import { useNavigate } from "react-router";
import { fetchDailyPokemon } from "../utils/fetchDaily";
import { capitalizeWord } from "../utils/helpers";
import { useEffect, useState } from "react";

export default function PokemonOfTheDay() {
  const [dailyPokemon, setDailyPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const pokemon = fetchDailyPokemon();
    setDailyPokemon(pokemon);
  }, []);

  if (!dailyPokemon) return null;
  const spriteID = dailyPokemon.url.split("/").filter(Boolean).pop();

  function handleClick() {
    navigate(`/pokemon/${dailyPokemon.name}`);
  }

  return (
    <div className="daily-container">
      <h2>Your Pokemon of the Day</h2>
      <button className="infotext-container dailypokemon" onClick={handleClick}>
        <h3>{capitalizeWord(dailyPokemon.name)}</h3>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${spriteID}.png
`}
          alt="sprite"
        />
      </button>
    </div>
  );
}
