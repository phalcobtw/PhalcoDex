import pokemonList from "./pokemon-list.json";

export function fetchDailyPokemon() {
  const today = getTodayDateString();
  const stored = localStorage.getItem("dailypokemon");

  if (stored) {
    const data = JSON.parse(stored);
    if (data.date === today) {
      // Ya existe uno para hoy
      return data.pokemon;
    }
  }

  // No hay uno guardado o ya cambió el día => genera nuevo
  const randomIndex = Math.floor(Math.random() * 1302);
  const dailyPokemon = pokemonList[randomIndex];

  const toStore = {
    pokemon: dailyPokemon,
    date: today,
  };

  localStorage.setItem("dailypokemon", JSON.stringify(toStore));
  return dailyPokemon;
}

function getTodayDateString() {
  const today = new Date();
  return today.toISOString().split("T")[0]; // "2025-07-11"
}
