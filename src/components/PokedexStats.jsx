import { capitalizeWord } from "../utils/helpers.js";

export default function PokedexStats({ data }) {
  return (
    <div className="stats-container">
      <h3 className={`type-${data.types[0].type.name} text-type`}>Base Stats</h3>
      {data?.stats
        ? data.stats.map((stat, index) => (
            <p key={index}>
              {capitalizeWord(stat.stat.name)}: {stat.base_stat}
            </p>
          ))
        : "..."}
    </div>
  );
}
