(() => {
  // Arrays
  const fruit = ["manzana", "platano", "fresa"]; // malo: no da una idea correcta de lo que contiene la variable
  const fruitList = ["manzana", "platano", "fresa"]; // regular: nos dice que es un listado, pero no llegamos a saber el formato
  const fruits = ["manzana", "platano", "fresa"]; // bueno: 'list' puede ser redundante, así que quizás poniéndolo en plural se entiene mejor, pero seguimos sin saber qué datos contiene el array
  const fruitNames = ["manzana", "platano", "fresa"]; // mejor: por 'names' sabemos que es un listado y además sabemos que es un listado de strings 

  // Booleanos
    // Mal: no se entienden o no tienen sentido
    const open = true;
    const write = true;
    const apple = true;
    const active = false;
    const noValues = true;
    const notEmpty = true;
  
    // Bien: se entiende perfectamente y es descriptivo usar is, can, has, etc... puesto que por lo normal los valores serán true o false
    const isOpen = true;
    const canWrite = true;
    const hasApple = true;
    const isActive = false;
    const hasValues = true;
    const isEmpty = true;

  // Números: se puede usar min, max, total, etc... para que quede más específico
    // Mal
    const cars = 10;
    const things = 3;

    // Mejor
    const maxFruits = 5;
    const minFruits = 1;
    const totalFruits = 3;
    const totalOfCars = 5;
  
  // Funciones: el nombre de la función debe expresar lo que hace específicamente, pero también debe de tratar de abstenerse de toda la implementación que hace la función
    // Mal
    createUserIfNotExists();
    updateUserIfNotEmpty();
    sendEmailFieldsValid();

    // Bien: aquí entra en juego el principio SOLID de responsabilidad única, de forma que en todo caso tendríamos otras funciones para validar si el usuario existe, por ejemplo
    createUser();
    updateUser();
    sendEmail();

  // Clases: Las clases deben tener nombres formados por un sustantivo o frases de sustantivo
    // Mal: son nombres muy genéricos y pueden abarcar más responsabilidades de las que deben. EL NOMBRE DE LA CLASE ES LO MÁS IMPORTANTE DE LA MISMA
    class Manager {};
    class Data {};
    class Info {};
    class Individual {};
    class Processor {};
    class SpecialMonsterView {};
})();
