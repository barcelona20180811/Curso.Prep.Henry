// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  const primerElemento = array[0];

  return primerElemento;
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const ultimo = array.length - 1;
  return array[ultimo];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const largo = array.length;
  return largo;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  longitud = array.length;

  for (let i = 0; i < longitud; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let frase = palabras.join(" ");

  return frase;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  si = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      si = true;
    }
  }
  return si;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0;
  let suma = 0;
  let longitud = resultadosTest.length;
  for (let i = 0; i < longitud; i++) {
    suma += resultadosTest[i];
  }
  promedio = suma / longitud;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let grande = -99999999999;
  let l = numeros.length;
  for (let i = 0; i < l; i++) {
    if (numeros[i] > grande) {
      grande = numeros[i];
    }
  }
  return grande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos
  // y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento,
  // simplemente devuélvelo
  // Escribe tu código aquí:
  let producto = 1;

  if (arguments.length === 1) {
    producto = arguments[0];
  } else if (arguments.length > 1) {
    for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
    }
  } else {
    producto = 0;
  }
  return producto;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo
  // cuyo valor es mayor a 18.
  //Escribe tu código aquí:
  let elementos = 0,
    longitud = arreglo.length;

  for (let i = 0; i < longitud; i++) {
    if (arreglo[i] > 18) {
      elementos += 1;
    }
  }
  return elementos;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes
  // y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne:
  // "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí:
  let dia = "";
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    dia = "Es fin de semana";
  } else {
    dia = "Es dia Laboral";
  }
  return dia;
}

function empiezaConNueve(n) {
  // Desarrolle una función que recibe como parámetro un número entero n.
  // Debe retornar true si el entero
  // inicia con 9 y false en otro caso.
  // Escribe tu código aquí:
  retorna = null;
  num = n.toString();
  numero = num.charAt(0);
  numero === "9" ? (retorna = true) : (retorna = false);
  return retorna;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos
  //de un arreglo son iguales. En ese caso
  //retornar true; caso contrario retornar false.
  //Escribe tu código aquí:
  let iguales = arreglo[0],
    largo = arreglo.length,
    si = true;

  for (let i = 1; i < largo; i++) {
    if (arreglo[i] !== iguales) {
      si = false;
    }
  }
  return si;
}

function mesesDelAño(array) {
  // Dado un array que contiene algunos meses del año desordenados,
  // recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  // Si alguno de los meses no está, devolver:
  // "No se encontraron los meses pedidos"
  // ***********************************************************************
  //Ayuda de Facundo Ramírez
  //Hola Jose. Esa función recibe como parámetro un arreglo
  //con los meses del año (es decir, es un arreglo de strings).
  //Entonces tenés que fijarte en todas las posiciones de ese arreglo
  //si se encuentra "Enero", "Marzo" y "Noviembre".
  //En el caso de encontrarte con alguno de esos
  //debes colocarlo en otro arreglo que debes
  //crearlo vos dentro de esa función me explico?.
  //Si al finalizar esa tarea tu nuevo arreglo contiene
  //esos 3 strings (esos 3 meses) debes retornar ese arreglo nuevo creado.
  //Sino (en el caso de no encontrar ningún mes
  //o hayas encontrado 1 o 2 PERO no los 3),
  //debes retornar un string que diga "No se encontraron los meses pedidos".
  //Cualquier cosa me escribís y te ayudo.
  //Saludos!
  // ***********************************************************************
  //
  // Tu código:
  let longitud = array.length,
    meses = ["Enero", "Marzo", "Noviembre"],
    nuevoArray = [],
    msg = "No se encontraron los meses pedidos";

  for (let a = 0; a < longitud; a++) {
    for (let m = 0; m < 3; m++) {
      if (array[a] === meses[m]) {
        nuevoArray.push(array[a]);
      }
    }
  }
  if (nuevoArray.length === 3) {
    return nuevoArray;
  } else {
    return msg;
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200.
  //Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100).
  //Finalmente devolver el nuevo array.
  // Tu código:
  nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta
  //un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array.
  //Si en algún momento el valor de la suma y la cantidad de iteraciones
  //coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  //Tu código:
  let array = [],
    suma = 0,
    msg = null;
  for (let i = 1; i <= 10; i++) {
    numero += 2;
    suma += numero;
    if (suma === i) {
      msg = "Se interrumpió la ejecución";

      break;
    }

    array.push(numero);
  }
  return msg ? msg : array;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido
  //hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5,
  //no se suma en ese caso y se continua con la siguiente iteración.
  //Pista: usá el statement 'continue'
  //Tu código:
  let array = [];
  for (let i = 0; i < 10; i++) {
    if (i === 4) {
      continue;
    }
    numero += 2;
    array.push(numero);
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
