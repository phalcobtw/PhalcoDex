import PokemonOfTheDay from "../components/PokemonOfTheDay";
export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to the Pokédex</h1>
      <p>Use the search bar to find information about any Pokémon.</p>
      <PokemonOfTheDay></PokemonOfTheDay>
    </div>
  );
}
