import { capitalizeWord } from "../utils/helpers.js";
export default function PokedexTypes({ data }) {
  return (
    <div className="type-container">
      <h3 className={`type-${data.types[0].type.name} text-type`}>Types</h3>
      {data?.types
        ? data.types.map((type) => (
            <p className={`type-${type.type.name} type`} key={type.slot}>
              {capitalizeWord(type.type.name)}
            </p>
          ))
        : "?"}
    </div>
  );
}
