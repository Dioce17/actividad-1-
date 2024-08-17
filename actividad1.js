// Definir variables
let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
  {
    nombre: "El Padrino",
    año: 1972,
    protagonistas: ["Marlon Brando", "Al Pacino", "James Caan"]},
  {
    nombre: "La Ley De Los Audaces",
    año: 2011,
    protagonistas: ["Gabriel Macht", "Patricj Adams", "Gina Torres"]
  }
];// Mostrar valores por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series favoritas:", seriesFavoritas);
console.log("Películas favoritas:", peliculasFavoritas);

// Incrementar edad 1 y volvemos a mostrar
edad++;
console.log("Edad incrementada:", edad);

// Agregamos serie a la lista y volvemos a mostrar
seriesFavoritas.push("Rosario Tijeras");
console.log("Series favoritas actualizadas:", seriesFavoritas);