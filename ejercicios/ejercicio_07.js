// 7️⃣ Ordenamiento y Reversión
/*Crea arrays de: - Números desordenados - ordena ascendente y descendente - Nombres de personas - ordena alfabéticamente - Objetos con propiedad edad - ordena por edad - Usa reverse() para invertir el orden*/
const numerosDesordenados = [8, 5, 3, 9, 1, 6, 7];

numerosDesordenados.sort((a, b) => a - b);
console.log("Orden Ascendete", numerosDesordenados);
numerosDesordenados.reverse();
console.log("Orden Descendente", numerosDesordenados);

const listaPersonas = [
  { nombres: "Albany", edad: 33 },
  { nombre: "Belkys", edad: 56 },
  { nombre: "Irwin", edad: 34 },
  { nombre: "Said", edad: 9 },
  { nombre: "Alvaro", edad: 66 },
  { nombre: "Samira", edad: 2 },
  { nombre: "Lili", edad: 4 },
  { nombre: "Lola", edad: 9 },
];

console.log("Lista de nombres ordenados alfabeticamente:");

listaPersonas.sort();
console.log(listaPersonas);

console.log("Nombres ordenados en reversa:");
listaPersonas.reverse();
console.log(listaPersonas);
