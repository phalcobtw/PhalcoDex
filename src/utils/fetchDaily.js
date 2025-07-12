import pokemonList from "./pokemon-list.json";

export function fetchDailyPokemon() {
  const stored = localStorage.getItem("dailypokemon");

  // Se usa el valor stored si existe
  if (stored) {
    const data = JSON.parse(stored);
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (now - data.timestamp < oneDay) {
      // Ya hay uno válido
      return data.pokemon;
    }
  }

  // Si no hay uno guardado o ya pasó un día => genera uno nuevo
  const randomIndex = Math.floor(Math.random() * 1302);
  const dailyPokemon = pokemonList[randomIndex];
  const timestamp = Date.now();

  const toStore = {
    pokemon: dailyPokemon,
    timestamp: timestamp,
  };

  localStorage.setItem("dailypokemon", JSON.stringify(toStore));

  return dailyPokemon;
}
