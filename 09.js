/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// EN ESTE EJERCICIO PASAN 3 EXPECT SON LOS QUE INDICAN QUE NO UTILIZAS LOS METODOS (values, keys, entries)
function intercambio(objeto) {
  // Devolver un objeto con los pares clave-valor intercambiados.
  // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
  // NOTA: No utilizar métodos de Object (values, keys, entries);
  //
  // Tu código:
  let objetoClaveValorInter = {};

  /* Recorremos el objeto original y vamos agregando propieades al nuevo objeto copia
  intercambiando las propiedades con la nomenclatura adecuada */
  for(let prop in objeto) {
    objetoClaveValorInter[objeto[prop]] = prop;
  }

  return objetoClaveValorInter;
};

// const obj = {a: 1, b: 2, c: 3};

//   for (let prop in obj) {
//     console.log(prop + ': ' + obj[prop]);
//   }

const obj = {nombre: "Jonathan", apellido: "Enrique"};
const objInter = intercambio(obj);

console.log(objInter);

// No modifiques nada debajo de esta linea //

module.exports = intercambio