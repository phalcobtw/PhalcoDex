export default function Header({ ref, onSubmit }) {
  return (
    <header className="header">
      <h1>PhalcoDex</h1>
      <div className="container-search">
        <input type="text" placeholder="Pokemon..." ref={ref} />
        <button onClick={onSubmit}>Buscar</button>
      </div>
    </header>
  );
}
