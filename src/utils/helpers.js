export function capitalizeWord(texto) {
  if (texto === "hp") {
    return "HP";
  } else {
    return texto
      .split(/[\s-]/) // divide por espacio o guión
      .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
      .join(" ");
  }
}
