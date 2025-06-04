export default function Header() {
  return (
    <header className="header">
      <h1>PhalcoDex</h1>
      <div className="container-search">
        <input type="text" placeholder="Pokemon..." />
        <button>Buscar</button>
      </div>
    </header>
  );
}
