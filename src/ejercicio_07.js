// 7️⃣ Ordenamiento y Reversión
/*Crea arrays de: - Números desordenados - ordena ascendente y descendente - Nombres de personas - ordena alfabéticamente - Objetos con propiedad edad - ordena por edad - Usa reverse() para invertir el orden*/
const numerosDesordenados = [8, 5, 3, 9, 1, 6, 7];

numerosDesordenados.sort((a, b) => a - b);
console.log("Orden Ascendete", numerosDesordenados);
numerosDesordenados.reverse();
console.log("Orden Descendente", numerosDesordenados);

const personas = [
  "Albany",
  "Samira",
  "Irwin",
  "Said",
  "Belkys",
  "Alvaro",
  "Lola",
  "Lili",
];

console.log("Lista de personas ordenadas alfabeticamente:");

personas.sort();
console.log(personas);

console.log("Nombres ordenados en reversa:");
personas.reverse();
console.log(personas);

const listaPersonasConEdad = [
  { nombre: "Albany", edad: 33 },
  { nombre: "Belkys", edad: 56 },
  { nombre: "Irwin", edad: 34 },
  { nombre: "Said", edad: 9 },
  { nombre: "Alvaro", edad: 66 },
  { nombre: "Samira", edad: 2 },
  { nombre: "Lili", edad: 4 },
  { nombre: "Lola", edad: 9 },
];

console.log("Lista de nombres ordenados por edad:");

listaPersonasConEdad.sort((a, b) => a.edad - b.edad);
console.log(listaPersonasConEdad);

listaPersonasConEdad.reverse();
console.log(listaPersonasConEdad);
