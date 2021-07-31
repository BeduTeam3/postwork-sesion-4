 /* Postwork S04
 David Rivera Orozco*/

//Deep Equal

/* Escribir una función llamada deepEqual que reciba dos argumentos y retorne true 
si son el mismo valor o si son objetos con las mismas propiedades, 
en este último caso los valores de las propiedades deben ser comparados con una
llamada recursiva de deepEqual. */

function deepEqual(a, b) {
    if (typeof a =="object" || typeof b=="object"){                              
        if (Object.keys(a).length !== Object.keys(b).length) return false;          //compara longitudes
    
        for (let i=0; i<Object.keys(a).length; i++) {
            (deepEqual(Object.keys(a)[i], Object.keys(b)[i])) ? true: false;       //llamada recursiva; compara keys
          }

          for (let i=0; i<Object.keys(a).length; i++) {
            (deepEqual(Object.values(a)[i], Object.values(b)[i])) ? true: false;   //llamada recursiva; compara values
          } 
    
    }
    return (typeof a === typeof b) ? true : false
}
   
const john = {
firstName: 'John',
lastName: 'Doe'
}
   
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
   

//Chunk

/* Escribir una función chunk que recibe un arreglo y un número entero size. 
La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size. */

function chunk(array, size) {
    const newArray = [];
    let vueltas = Math.round(array.length/size);  //para saber cuantas vueltas dará
    let inicio=0, fin=size;
    for (let i = 0; i < vueltas; i++) {
        newArray.push(array.slice(inicio,fin))
        inicio+=size;
        fin+=size;
    }
    return newArray;
};

  
const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 4:', chunk(data, 4))
console.log('Test 5:', chunk(data, 5))

//Frequency

/* Escribir una función frequency que recibe un string como argumento. 
Esta función debe contar la frecuencia o el número de veces que se repite cada carácter.

El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, 
y los valores sean la frecuencia. Los resultados deben ordenarse de manera ascendente por
los caracteres y no la frecuencia. */

 function frequency(string) {
    let objeto = {};

    for (const element of string) {
        //console.log(objeto[element])  //asi podemos ver que sera de tipo undefined y le asignaremos primero y solo una vez un valor de 0
        if (objeto[element]===undefined){
            objeto[element] =0; 
        }
        objeto[element] +=1; 
    }
    let llaves=Object.keys(objeto).sort();
    let newObjfreq=Object.create(objeto);

    for (const i of llaves) {
        newObjfreq[i]=objeto[i];
    }

    return newObjfreq
}

console.log('Test 1:', frequency('cccbbbaaa'))
   // {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
   // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
   // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
