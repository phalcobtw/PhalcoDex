export function capitalizeWord(texto) {
  return texto
    .split(/[\s-]/) // divide por espacio o guión
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(" ");
}
