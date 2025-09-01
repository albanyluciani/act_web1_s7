// 6️⃣ Manipulación de Arrays
/*Crea un array inicial [1, 2, 3, 4, 5] y demuestra: - push() y pop() - agregar y quitar del final - shift() y unshift() - agregar y quitar del inicio - splice() - insertar elementos en posición específica - slice() - extraer porción sin modificar original*/
const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros);

const removerUltimo = numeros.pop();
console.log(removerUltimo);
console.log(numeros);

numeros.unshift(0);
console.log(numeros);

const removerPrimero = numeros.shift(0);
console.log(removerPrimero);
console.log(numeros);

numeros.splice(3, 0, -3, -4);
console.log(numeros);

const extaerElemento = numeros.slice(1, 3);
console.log(extaerElemento);
console.log(numeros);
