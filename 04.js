/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
  // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
  // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
  // Ej:
  /* var estudiantes = [
      { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
      { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
      { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
      { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
  ] */
  // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
  //
  // Tu código:
  let respEstudiantes;

  /* Primero filtro del array estudiantes (array de objetos) y guardo en otro nuevo array (tambien array de objetos)
  aquellos estudiantes que cumplen con la condicion*/
  const estudiantesEncontrados = estudiantes.filter(estudiante => {
    return estudiante.check1 >= nota1 && estudiante.check2 >= nota2;
  });

  /* Una vez que los encuentro unicamente agarro del nuevo array de objetos (estudiantesEncontrados) sus nombres y
  los guardo en un nuevo array que contenga los strigns de los nombre unicamente */
  respEstudiantes = estudiantesEncontrados.map(({nombre, apellido}) => {
    return `${nombre} ${apellido}`;
  });

  return respEstudiantes; // Retorno el 
};

var estudiantes = [
      { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
      { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
      { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
      { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
  ]

console.log(obtenerSoloLosMejores(estudiantes, 15, 15)); // retorna => ["Fulano Rodriguez", "Perengano Leiria"];

// No modifiques nada debajo de esta linea //

module.exports = obtenerSoloLosMejores