//8️⃣ Desestructuración de Arrays
/*Dado el array ['JavaScript', 'Python', 'Jasva', 'C++', 'Go']:
- Extrae los primeros 3 lenguajes - Extrae el primero y el último - Usa rest operator para separar el primero del resto - Intercambia dos variables usando desestructuración*/

const lenguajes = ["JavaScript", "Python", "Jasva", "C++", "Go"];

console.log("Extraer primeros tres elementos: ");

const [primero, segundo, tercero] = lenguajes;
console.log(primero);
console.log(segundo);
console.log(tercero);

console.log("Extraer primero y último:");

const [, , primer, , quinto] = lenguajes;
console.log(primer);
console.log(quinto);

console.log("Separar el primero del resto:");

const [principal, ...resto] = lenguajes;
console.log(principal);
console.log(resto);

console.log("Intercambio de dos variables:");
let x = "Java",
  y = "Go";
[x, y] = [y, x];
console.log(x, y);
