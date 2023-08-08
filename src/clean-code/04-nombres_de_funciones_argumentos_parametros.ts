(() => {
  // Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica
  // Cuando definimos una función definimos PARÁMETROS
  // Cuando llamamos a dicha función, enviamos ARGUMENTOS

  // EJERCICIO PARA CORREGIR NOMBRES
  // función para obtener información de una película por Id
  function getMovieById(id: number) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: number) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: number) {
    console.log({ id });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  // function createMovie (data: Movie) { // En lugar de definir cada propiedad de movie como parámetro, creamos una interface y pasamos sólo un objeto como argumento
  function createMovie({ title, description, rating, cast }: Movie) {
    // También podríamos desestructurar
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre // Esto debería estar en otra función
    // ..
    // ..
    if (fullName === "fernando") return false; // Esto debería estar en otra función

    console.log("Crear actor");
    return true;
  }

  // Función complicada
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if ( isDead ) {
        result = 1500;
    } else {
        if ( isSeparated ) {
            result = 2500;
        } else {
            if ( isRetired ) {
                result = 3000;
            } else {
                result = 4000; 
            }
        }
    }
    
    return result;
  }

  // Función complicada REFACTORIZACIÓN
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) { return 1500; } 
    
    if (isSeparated) { return 2500; } 
    
    return isRetired ? 3000 : 4000;
  }
})();
