export default function Modal({ ref }) {
  return (
    <dialog ref={ref} className="error-modal">
      <h3>Error</h3>
      <p>Error al buscar el Pokémon</p>
      <form method="dialog">
        <button className="button-component">Cerrar</button>
      </form>
    </dialog>
  );
}
