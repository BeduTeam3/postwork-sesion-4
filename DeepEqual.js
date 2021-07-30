function deepEqual(a, b) {

    //Se comparan los dos parámetros, cuando es el mismo objeto (mismo nombre)
    //automáticamente lo pone en true, cualquier otro objeto con las
    //mismas propiedades pero diferente nombre lo pone en false
    let comparar = a === b ? true : false;

    //Si los dos son objetos pero no son idénticos(diferente nombre)    
    if (typeof (a) === 'object' && typeof b === 'object' && a !== b) {
        //Al entrar al IF la variable "comparar" viene en falso

        //Si ambos objetos NO tienen la misma cantidad de propiedades
        if (Object.keys(a).length !== Object.keys(b).length){
            return comparar;//Regresa un falso
        } 
        else {//Si ambos objetos tienen la misma cantidad de propiedades se comparan
            let contador = 0;

            for (const property in a) {//Iteramos primer objeto
                comparar = (property === Object.keys(b)[contador] && a[property] === b[Object.keys(b)[contador]]) ? true : false;

                if(!comparar){
                    return comparar;
                }

                contador++;             
            }

            return comparar;//"Dos objetos a comparar";
        }
    } else {
        return comparar;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Doe',
    tel: 1
}

const jane = {
    firstName: 'John',
    lastName: 'Doe',
    tel: 1
}

console.log('Test 1:', deepEqual(1, 1));
console.log('Test 2:', deepEqual(1, '1'));
console.log('Test 3:', deepEqual(john, john));
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe', tel: 1 }));
console.log('Test 5:', deepEqual(john, { firstName: 'John' }));
console.log('Test 6:', deepEqual(jane, { firstName: 'John', lastName: 'Doe'}));
console.log('Test 7:', deepEqual(jane, john));