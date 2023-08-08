(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate !! Si tenemos que poner este tipo de comentarios es porque las siguientes líneas no están claras, ya que si no, no haría falta
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];

  // Esto sería mejor de la siguiente manera:
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  const arhivos = fs.filter((f) => f.f);
  const filesToDelete = filesToEvaluate.filter((fileToDelete) => fileToDelete.flagged); // Esto hablaría por sí solo

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {} // Esto es mejor porque no tiene sentido duplicar la información: si el código ya nos dice que es una interface, no tenemos por qué llamar a dicha interface UserInterface, y ocurrel o mismo con los nombres de clases de arriba

  // Todo: Tarea

  // Día de hoy - today
  const ddmmyyyy = new Date();
  const today = new Date(); // NOMBRE DE VARIABLE MÁS LEGIBLE Y CORRECTO

  // Días transcurridos - elapsed time in days
  const d: number = 23;
  const elapsedTimeInDays: number = 23; // NOMBRE DE VARIABLE MÁS LEGIBLE Y CORRECTO

  // Número de archivos en un directorio - number of files in directory
  const dir = 33;
  const totalPathFiles = 33; // NOMBRE DE VARIABLE MÁS LEGIBLE Y CORRECTO

  // Primer nombre - first name
  const nombre = "Fernando";
  const firstName = "Fernando"; // NOMBRE DE VARIABLE MÁS LEGIBLE Y CORRECTO

  // Primer apellido - last name
  const apellido = "Herrera";
  const lastName = "Herrera"; // NOMBRE DE VARIABLE MÁS LEGIBLE Y CORRECTO

  // Días desde la última modificación - days since modification
  const dsm = 12;
  const totalDaysFromLastUpdate = 12; // NOMBRE DE VARIABLE MÁS LEGIBLE Y CORRECTO

  // Cantidad máxima de clases por estudiante - max classes per student
  const max = 6;
  const maxClassByStudent = 6; // NOMBRE DE VARIABLE MÁS LEGIBLE Y CORRECTO
})();
