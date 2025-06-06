import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header({ onSubmit, inputRef }) {
  function handleSubmit(e) {
    e.preventDefault(); // evita que recargue la página
    onSubmit();
  }
  return (
    <header className="header">
      <h1 className="main-title">PhalcoDex</h1>
      <form className="container-search" onSubmit={handleSubmit}>
        <input type="text" placeholder="e.g. Ampharos / Mewtwo Mega X / Landorus Therian" ref={inputRef} />
        <button type="submit" className="button-component">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="faIcon" />
          <span className="button-text">Buscar</span>
        </button>
      </form>
    </header>
  );
}
