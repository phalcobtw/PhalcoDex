export default function PokedexSprites({ data }) {
  return (
    <div className="pokedex-sprites">
      {data?.sprites?.front_default ? <img src={data.sprites.front_default} alt={data.name} /> : "..."}
      {data?.sprites?.back_default ? <img src={data.sprites.back_default} alt={data.name} /> : ""}
    </div>
  );
}
