/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function bienvenidoSr(persona) {
  // La funcion recibe un objeto "persona".
  // de la forma: 
  // {
  //  nombre: 'Lionel
  //  apellido: 'Messi',
  //  invitado: true
  //  }
  // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
  // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
  // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
  // "Bienvenido Sr. Messi".
  // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
  // "Hola Lionel, tu mesa está lista".
  // En caso de que no tenga la propiedad "invitado" retornar:
  // "Disculpe señor, no está invitado a la fiesta".
  //
  // Tu código:

  let invitacion = [];

  if(persona.invitado && persona.nombre && persona.apellido) {
    invitacion = `${persona.nombre} ${persona.apellido}, un gusto tenerlo nuevamente! Bienvenido`;
  }

  if(persona.invitado && !persona.nombre && persona.apellido) {
    invitacion = `Bienvenido Sr. ${persona.apellido}`;
  }

  if(persona.invitado && persona.nombre && !persona.apellido) {
    invitacion = `Hola ${persona.nombre}, tu mesa está lista`;
  }

  if(!persona.invitado) {
    invitacion = `Disculpe señor, no está invitado a la fiesta`;
  }

  return invitacion;
};


const persona = {
  nombre: "Lionel",
  apellido: 'Messi',
  invitado: true
};

console.log(bienvenidoSr(persona))

// No modifiques nada debajo de esta linea //

module.exports = bienvenidoSr