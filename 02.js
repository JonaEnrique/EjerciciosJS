/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ingredienteEnMalEstado(menu, comida, ingrediente) {
  // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
  // ya que deben estar contaminados también.
  // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
  // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
  // diferencia.
  // Ej:
  /* let menuDelDia = {
      raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
      bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
      tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
  } */
  // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
  // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
  // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
  // NOTA: No utilizar el método "includes".
  //
  // Tu código:

  const vecIngredientes = menu[comida]; // Vector de ingredientes de la comida seleccionada del menu
  let vecResp = []; // Acá vamos a pushear los elementos de la respuesta

  /* Buscamos el indice del ingrediente seleccionado */
  const ingrEncontrado = vecIngredientes.find(function (ingredienteBusc) {
    return ingredienteBusc === ingrediente;
  });

  const indIngrEncontrado = vecIngredientes.indexOf(ingrEncontrado);

  /* Si encontro el ingrediente pusheamos al vector de respuesta tanto el 
    ingrediente encontrado y sus proximos (izq y der), si es que no lo encontro
    asignamos al vector un string que indica "El menú está perfecto"*/
  if (indIngrEncontrado != -1) {
    if (indIngrEncontrado - 1 >= 0)
      vecResp.push(vecIngredientes[indIngrEncontrado - 1]);

    vecResp.push(vecIngredientes[indIngrEncontrado]);

    if (indIngrEncontrado + 1 < vecIngredientes.length)
      vecResp.push(vecIngredientes[indIngrEncontrado + 1]);
  } else {
    vecResp = "El menú está perfecto";
  }

  return vecResp; // retornamos el vector respuesta
};

let menuDelDia = {
  raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
  bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
  tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
}

// console.log(ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto")) // devuelve => ["Aceite", "Peceto", "Ricota"];
// console.log(ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite")) // devuelve => ["Pollo", "Aceite", "Huevos"];
// console.log(ingredienteEnMalEstado(menuDelDia, "bagnaCauda", "Ajo")) // devuelve => ["Pollo", "Aceite", "Huevos"];
console.log(ingredienteEnMalEstado(menuDelDia, "bagnaCauda", "Anchoas")) // devuelve => ["Pollo", "Aceite", "Huevos"];

// No modifiques nada debajo de esta linea //

module.exports = ingredienteEnMalEstado