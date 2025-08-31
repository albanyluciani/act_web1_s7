//1️⃣ Gestión de Inventario Básico
/* Crea un array de objetos que represente un inventario de productos. Cada producto debe tener: id, nombre, precio, categoria, stock.
Declara al menos 5 productos y muestra: - Todos los productos - Total de productos en inventario - Valor total del inventario*/
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
console.log("Lista de Productos:");

const mostrarProductos = productos.forEach((productos) => {
  console.log(productos.nombre);
});

console.log("Total Stock Productos:");

const productosEnStock = productos.reduce(
  (suma, productos) => suma + productos.stock,
  0
);
console.log(productosEnStock);

console.log("Valor total del inventario:");
const valorInventario = productos.reduce(
  (suma, productos) => suma + productos.precio * productos.stock,
  0
);
console.log(valorInventario);
