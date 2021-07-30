/*Función que recibe un arreglo y un número entero size. 
Divide el arreglo en múltiples arreglos del tamaño 
determinado por size. */

function chunk(array, size) {

    let totalElementos = array.length;
    //let arrayDeArrays = [];
    let arrayTemporal = [];
    let indice;
    let contador = 0;

    indice = array.length%size !== 0 ? Math.trunc(array.length/size)+1 : array.length/size;
    console.log("Indice: "+indice);
    console.log("Size: "+size);

    let arrayDeArrays = new Array(indice);

    for(let i = 0; i<indice; i++){
        arrayDeArrays[i] = new Array(size);

        for(let j = 0; j<size; j++){
            if(contador<totalElementos){
                arrayDeArrays[i][j] = array[contador];
                contador++;
            }
            else{
                arrayDeArrays[i][j] = '';
            }            
        }
    }

    return arrayDeArrays;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('Test 1:', chunk(data, 3));
