import PokedexAbout from "./PokedexAbout.jsx";
import PokedexStats from "./PokedexStats.jsx";
import PokedexTypes from "./PokedexTypes.jsx";
import PokedexAbilities from "./PokedexAbilities.jsx";

export default function PokedexInfo({ data }) {
  return (
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
  );
}
