import { capitalizeWord } from "../utils/helpers.js";
export default function PokedexHeader({ data }) {
  return (
    <div className="pokedex-header">
      <p>{data.name ? capitalizeWord(data.name) : "???"}</p>
      <p>#{data.id ? data.id : "???"}</p>
    </div>
  );
}
