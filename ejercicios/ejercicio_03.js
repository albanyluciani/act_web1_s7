//3️⃣ Transformación de Datos con map()
/*Crea un array de estudiantes con nombre, edad, notas (array de números).
Usa map() para: - Crear un nuevo array con solo los nombres - Crear un array con el promedio de cada estudiante - Agregar una propiedad estado ("Aprobado" si promedio >= 70, "Reprobado" si < 70)*/
const estudiantes = [
  { nombre: "Albany", edad: 25, notas: [40, 76, 90, 54] },
  { nombre: "Irwin", edad: 30, notas: [30, 60, 88, 77] },
  { nombre: "Anderson", edad: 28, notas: [65, 76, 78, 95] },
];

console.log("Nombres de los Estudiantes:");

const nombresEstudiantes = estudiantes.map((nombres) => nombres.nombre);
console.log(nombresEstudiantes);

console.log("Promedio de cada estudiante:");
const promedioEstudiantes = estudiantes.map((estudiante) => {
  const sumaNotas = estudiante.notas.reduce((suma, notas) => suma + notas, 0);
  const promedio = sumaNotas / estudiante.notas.length;
  return {
    nombre: estudiante.nombre,
    promedio: promedio.toFixed(2),
  };
});

console.log(promedioEstudiantes);

console.log("Estado de cada estudiante:");
const estadoEstudiantes = estudiantes.map((estudiante) => {
  const sumaNotas = estudiante.notas.reduce((suma, notas) => suma + notas, 0);
  const promedio = sumaNotas / estudiante.notas.length;
  const estado = promedio >= 70 ? "Aprobado" : "Reprobado";
  return {
    ...estudiante,
    promedio: promedio.toFixed(2),
    estado: estado,
  };
});

console.log(estadoEstudiantes);
