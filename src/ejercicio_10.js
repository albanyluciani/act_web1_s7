//🔟 Métodos de Objeto
/*Crea un objeto y demuestra: - Object.keys() - obtener claves - Object.values() - obtener valores - Object.entries() - obtener pares clave-valor - Iterar sobre el objeto con forEach()*/
const tortas = {
  id: 1,
  ingredientes: ["Harina", "Azucar", "Huevos"],
  precio: 50000,
  sabor: "Chocolate",
};

const claves = Object.keys(tortas);
console.log(claves);

const valores = Object.values(tortas);
console.log(valores);

const entradas = Object.entries(tortas);
console.log(entradas);

Object.entries(tortas).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});
