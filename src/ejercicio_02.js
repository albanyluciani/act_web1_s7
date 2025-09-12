// 2️⃣ Filtrado de Productos por Categoría
/*Usando el inventario del ejercicio anterior, utiliza el método filter() para: - Mostrar solo productos de la categoría "Electrónicos" - Mostrar productos con stock menor a 10 - Mostrar productos con precio mayor a $500*/
const productos = [
  {
    id: 1,
    nombre: "Impresora",
    precio: 200,
    categoria: "Electrónicos",
    stock: 6,
  },
  {
    id: 2,
    nombre: "Cable Largo",
    precio: 500,
    categoria: "Accesorios",
    stock: 10,
  },
  {
    id: 3,
    nombre: "Computadores",
    precio: 1000,
    categoria: "Electrónicos",
    stock: 8,
  },
  {
    id: 4,
    nombre: "Teclados",
    precio: 600,
    categoria: "Accesorios",
    stock: 6,
  },
  {
    id: 5,
    nombre: "Diademas",
    precio: 300,
    categoria: "Accesorios",
    stock: 20,
  },
];
console.log("Productos Electrónicos:");

const productosCategoria = productos.filter(
  (productos) => productos.categoria === "Electrónicos"
);
console.log(productosCategoria);

console.log("Productos con Stock menor a 10:");

const stockMenor = productos.filter((productos) => productos.stock < 10);
console.log(stockMenor);

console.log("Productos con Precio mayor a $500:");

const precioMayor = productos.filter((productos) => productos.precio > 500);
console.log(precioMayor);
