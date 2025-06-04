import { capitalizeWord } from "../utils/helpers.js";
export default function PokedexTypes({ data }) {
  return (
    <div className="type-container">
      <h3>Types</h3>
      {data.types
        ? data.types.map((type) => (
            <p className="type" key={type.slot}>
              {capitalizeWord(type.type.name)}
            </p>
          ))
        : "?"}
    </div>
  );
}
