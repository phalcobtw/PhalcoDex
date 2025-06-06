import { capitalizeWord } from "../utils/helpers.js";
export default function PokedexHeader({ data }) {
  return (
    <div className="pokedex-header">
      <p className="pokedex-header--name">{data.name ? capitalizeWord(data.name) : "???"}</p>
      <p className="pokedex-header--number">#{data.id ? data.id : "???"}</p>
    </div>
  );
}
