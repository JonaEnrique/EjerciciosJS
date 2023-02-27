/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:

  let menor = arr[0], mayor = arr[0];
  let diferencia = 0;

  arr.forEach((elemento, indice, array) => {
    if(elemento < menor)
      menor = elemento;
  });

  arr.forEach((elemento, indice, array) => {
    if(elemento > mayor)
      mayor = elemento;
  });

    // for(let i = 0; i < arr.length; i++)
    // {
    //   if(arr[i] < menor)
    //     menor = arr[i];
    // }

    // for(let i = 0; i < arr.length; i++)
    // {
    //   if(arr[i] > mayor)
    //     mayor = arr[i];
    // }
  
  diferencia = mayor - menor;

  console.log(menor);
  console.log(mayor);

  return diferencia;
};

const array = [20, 31, 11, 15, 32];

mayorMenosMenor(array);

// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor