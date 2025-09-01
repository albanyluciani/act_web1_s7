//5️⃣ Búsqueda y Verificación
/*Crea un array de usuarios con id, nombre, email, activo.
Implementa búsquedas usando: - find() para buscar usuario por email - findIndex() para obtener posición de usuario por id - some() para verificar si hay usuarios inactivos - every() para verificar si todos tienen email válido (contiene @)*/

const usuarios = [
  {
    id: 1,
    nombre: "Albany",
    email: "albanyluciani@gmail.com",
    estado: "Inactivo",
  },
  {
    id: 2,
    nombre: "Irwin",
    email: "irwincolmenarez@gmail.com",
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "Anderson",
    email: "andersoncolmenarez@gmail.com",
    estado: "Inactivo",
  },
  {
    id: 4,
    nombre: "Alvaro",
    email: "alvaroluciani@gmail.com",
    estado: "Activo",
  },
];

console.log("Usuario encontrado por email:");

const usuarioEncontrado = usuarios.find(
  (user) => user.email === "alvaroluciani@gmail.com"
);
console.log(usuarioEncontrado);

console.log("Buscar posición por id:");
const ubicacion = usuarios.findIndex((user) => user.id === 4);
console.log(ubicacion);

console.log("Usuario Inactivos:");
const usuariosInactivos = usuarios.some(
  (usuario) => usuario.estado === "Inactivo"
);
console.log(usuariosInactivos);

console.log("Email válidos:");
const emailValidos = usuarios.every((usuario) => usuario.email.includes("@"));
console.log("¿Todos los email son válidos?", emailValidos);
