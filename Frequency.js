/*Escribir una función frequency que recibe 
un string como argumento. Esta función debe 
contar la frecuencia o el número de veces 
que se repite cada carácter. */

function frequency(string) {

    let caracter = '';
    let cantidadCaracteres = string.length;
    let objetoPropiedades = {};

    for (let i = 0; i < cantidadCaracteres; i++) {//Recorremos el string
        caracter = string[i];//Guardamos el caracter actual
        //Si no existe la propiedad (caracter) se agrega al objeto; Si ya existiera se le suma 1 a su valor
        objetoPropiedades[caracter] === undefined ? objetoPropiedades[caracter] = 1 : objetoPropiedades[caracter] += 1;
    }

    //Ordenamos el objeto alfabeticamente
    const ordenAlfabetico = Object.fromEntries(
        Object.entries(objetoPropiedades).sort()
    );

    return ordenAlfabetico;
}

console.log('Test 1:', frequency('cccbbbaaa'))// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
console.log('Test 4:', frequency('hiraam'))// {a: 3, b: 3, c: 3}