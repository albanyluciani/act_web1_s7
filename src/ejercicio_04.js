//4️⃣ Análisis de Ventas con reduce()
/*Dado un array de ventas con producto, cantidad, precio, fecha:
Usa reduce() para calcular: - Total de ingresos - Producto más vendido (por cantidad) - Promedio de venta por transacción*/
const ventas = [
  { producto: "Harina", cantidad: 5, precio: 2300, fecha: "Junio" },
  { producto: "Azúcar", cantidad: 4, precio: 5500, fecha: "Julio" },
  { producto: "Arroz", cantidad: 3, precio: 4500, fecha: "Abril" },
  { producto: "Embutidos", cantidad: 2, precio: 6000, fecha: "Mayo" },
];
console.log("Total Ingresos:");

const totalIngresos = ventas.reduce(
  (suma, producto) => suma + producto.precio * producto.cantidad,
  0
);
console.log(totalIngresos);

console.log("Producto más vendido:");
const masVendido = ventas.reduce((max, cantidad) =>
  cantidad > max ? cantidad : max
);
console.log(masVendido);

console.log("El promedio de venta por transacción es:");
const promedioPorTransaccion = totalIngresos / ventas.length;
console.log(promedioPorTransaccion);

// console.log("Producto más vendido:");

// // Sumar cantidades por producto
// const cantidadesPorProducto = {};
// ventas.forEach((venta) => {
//   if (cantidadesPorProducto[venta.producto]) {
//     cantidadesPorProducto[venta.producto] += venta.cantidad;
//   } else {
//     cantidadesPorProducto[venta.producto] = venta.cantidad;
//   }
// });

// // Encontrar el producto con mayor cantidad
// let productoMasVendido = "";
// let maxCantidad = 0;
// for (const producto in cantidadesPorProducto) {
//   if (cantidadesPorProducto[producto] > maxCantidad) {
//     maxCantidad = cantidadesPorProducto[producto];
//     productoMasVendido = producto;
//   }
// }
// console.log(productoMasVendido, "con", maxCantidad, "unidades");
