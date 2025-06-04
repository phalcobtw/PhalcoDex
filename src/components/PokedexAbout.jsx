export default function PokedexAbout({ data }) {
  return (
    <>
      <h3>About</h3>
      <div className="about-info">
        <p>Height: {data.height ? (data.height / 10).toFixed(1) + "mts." : "?"}</p>
        <p>Weight: {data.weight ? (data.weight / 10).toFixed(1) + "kg." : "?"} </p>
      </div>
    </>
  );
}
