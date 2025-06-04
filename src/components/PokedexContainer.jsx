import Abilities from "./Abilities.jsx";

export default function PokedexContainer() {
  return (
    <>
      <div className="container-pokedex">
        <div className="pokedex-header">
          <p>NOMBRE</p>
          <p># NUMERO</p>
        </div>
        <div className="pokedex-sprites">
          <p>SPRITE FRONT</p>
          <p>SPRITE BACK</p>
        </div>
        <div className="pokedex-info">
          <div className="info-leftpanel panel">
            <h3>About</h3>
            <p>Height: {"height"}</p>
            <p>Weight: {"weight"}</p>
            <div className="info-leftpanel panel">
              <h3>Abilities</h3>
              <div className="abilities-container">
                <Abilities>
                  <h4>Blaze</h4>
                  <p>Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.</p>
                </Abilities>
                <Abilities>
                  <h4>Blaze</h4>
                  <p>Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.</p>
                </Abilities>
              </div>
              {/* TODO: Displayear las habilidades con map */}
            </div>
          </div>
          <div className="info-rightpanel panel">
            <p>test</p>
          </div>
        </div>
      </div>
    </>
  );
}
