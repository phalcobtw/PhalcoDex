import PokedexStats from "./PokedexStats.jsx";
import PokedexTypes from "./PokedexTypes.jsx";
import PokedexAbout from "./PokedexAbout.jsx";
import PokedexHeader from "./PokedexHeader.jsx";
import PokedexSprites from "./PokedexSprites.jsx";
import PokedexAbilities from "./PokedexAbilities.jsx";

export default function PokedexContainer({ data }) {
  return (
    <>
      <div className="container-pokedex">
        <PokedexHeader data={data}></PokedexHeader>
        <PokedexSprites data={data}></PokedexSprites>
        <div className="pokedex-info">
          <div className="info-leftpanel panel">
            <PokedexAbout data={data}></PokedexAbout>
            <PokedexAbilities data={data}></PokedexAbilities>
          </div>
          <div className="info-rightpanel panel">
            <PokedexTypes data={data}></PokedexTypes>
            <PokedexStats data={data}></PokedexStats>
          </div>
        </div>
      </div>
    </>
  );
}
