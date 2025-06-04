import Abilities from "./Abilities.jsx";
import { capitalizeWord } from "../utils/helpers.js";

export default function PokedexContainer({ data }) {
  return (
    <>
      <div className="container-pokedex">
        <div className="pokedex-header">
          <p>{data.name ? capitalizeWord(data.name) : "???"}</p>
          <p>#{data.id ? data.id : "???"}</p>
        </div>
        <div className="pokedex-sprites">
          {data.sprites ? <img src={data.sprites.front_default} alt={data.name} /> : "No Pokemon Selected..."}
          {data.sprites ? <img src={data.sprites.back_default} alt={data.name} /> : ""}
        </div>
        <div className="pokedex-info">
          <div className="info-leftpanel panel">
            <h3>About</h3>
            <div className="about-info">
              <p>Height: {data.height ? (data.height / 10).toFixed(1) + "mts." : "?"}</p>
              <p>Weight: {data.weight ? (data.weight / 10).toFixed(1) + "kg." : "?"} </p>
            </div>
            <div className="info-leftpanel panel">
              <h3>Abilities</h3>
              <div className="abilities-container">
                {data.abilities
                  ? data.abilities.map((ability) => {
                      return (
                        <Abilities key={ability.slot}>
                          <h4>{capitalizeWord(ability.ability.name)}</h4>
                          <p>text test</p>
                        </Abilities>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
          <div className="info-rightpanel panel">
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
            <div className="stats-container">
              <h3>Base Stats</h3>
              {data.stats
                ? data.stats.map((stat, index) => (
                    <p key={index}>
                      {capitalizeWord(stat.stat.name)}: {stat.base_stat}
                    </p>
                  ))
                : "No pokemon selected..."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
