import PokedexHeader from "./PokedexHeader.jsx";
import PokedexSprites from "./PokedexSprites.jsx";
import PokedexInfo from "./PokedexInfo.jsx";

export default function PokedexContainer({ data }) {
  if (!data || !data.types || !data.types[0]) return null;
  return (
    <>
      <div className={`container-pokedex type-${data?.types[0]?.type?.name} bg-type`}>
        <PokedexHeader data={data}></PokedexHeader>
        <PokedexSprites data={data}></PokedexSprites>
        <PokedexInfo data={data}></PokedexInfo>
      </div>
    </>
  );
}
