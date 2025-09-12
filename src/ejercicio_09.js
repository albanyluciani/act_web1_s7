//9️⃣ Desestructuración de Objetos
/*Crea un objeto persona con propiedades anidadas (dirección, contacto).
Demuestra: - Desestructuración básica - Renombrado de variables - Valores por defecto - Desestructuración anidada - Rest operator en objetos*/

const persona = {
  nombre: "Albany",
  edad: 33,
  profesion: "Ama de Casa",
  direccion: {
    barrio: "Machado",
    municipio: "Copacabana",
    departamento: "Antioquia",
  },
  contacto: 3044173359,
};
const objeto = new Object();
objeto.propiedad = "valor";

console.log(persona.nombre);
console.log(persona.contacto);

console.log("Desestructuración básica:");

const { nombre, edad, profesion, direccion, contacto } = persona;
console.log(nombre);
console.log(profesion);
console.log(contacto);

console.log("Renombrando variables:");

const { nombre: nombreCompleto, edad: años } = persona;
console.log(nombreCompleto);
console.log(años);

console.log("Valores por defecto:");

const { nombre: nom, email = "no@disponible.com" } = persona;
console.log(email);

console.log("Desestructuración anidada:");

const {
  direccion: { barrio, municipio },
} = persona;
console.log(barrio);
console.log(municipio);

console.log("Rest operator en objetos:");

const { edad: n, ...restoPersona } = persona;
console.log(restoPersona);
