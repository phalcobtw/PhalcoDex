export default function Header({ onSubmit, inputRef }) {
  function handleSubmit(e) {
    e.preventDefault(); // evita que recargue la página
    onSubmit();
  }
  return (
    <header className="header">
      <h1 className="main-title">PhalcoDex</h1>
      <form className="container-search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Pokemon..." ref={inputRef} />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
}
