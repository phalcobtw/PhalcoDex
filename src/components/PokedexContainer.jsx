import Abilities from "./Abilities.jsx";

export default function PokedexContainer(data) {
  return (
    <>
      <div className="container-pokedex">
        <div className="pokedex-header">
          <p>{data.name ? data.name : "???"}</p>
          <p>#{data.id ? data.id : "???"}</p>
        </div>
        <div className="pokedex-sprites">
          <p>SPRITE FRONT</p>
          <p>SPRITE BACK</p>
        </div>
        <div className="pokedex-info">
          <div className="info-leftpanel panel">
            <h3>About</h3>
            <div className="about-info">
              <p>Height: {data.height ? data.height : "?"}</p>
              <p>Weight: {data.weight ? data.weight : "?"}</p>
            </div>
            <div className="info-leftpanel panel">
              <h3>Abilities</h3>
              <div className="abilities-container">
                {/* TODO: Displayear las habilidades con map */}
                {data.abilities
                  ? data.abilities.map((ability) => {
                      return (
                        <Abilities key={ability.slot}>
                          <h4>{ability.ability.name}</h4>
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
              {/* Display pokemon types dynamically */}
              {data.types
                ? data.types.map((type) => (
                    <p className="type" key={type.slot}>
                      type.type.name
                    </p>
                  ))
                : "?"}
            </div>
            <div className="stats-container">
              <h3>Base Stats</h3>
              {/* Display base stats dynamically */}
              {data.stats
                ? data.stats.map((stat, index) => (
                    <p key={index}>
                      {stat.stat.name}: {stat.base_stat}
                    </p>
                  ))
                : "No pokemon selected..."}
              {/* <p>HP: ###</p>
              <p>Attack: ###</p>
              <p>Special Attack: ###</p>
              <p>Defense: ###</p>
              <p>Special Defense: ###</p>
              <p>Speed: ###</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
