function chunk(array, size) {

    let totalElementos = array.length;
    let indice = 0;
    let contador = 0;

    indice = array.length % size !== 0 ? Math.trunc(array.length / size) + 1 : array.length / size;

    let arrayDeArrays = new Array(indice);

    for (let i = 0; i < indice; i++) {

        i + 1 === indice && array.length % size !== 0 ? arrayDeArrays[i] = new Array(array.length % size) : arrayDeArrays[i] = new Array(size);

        for (let j = 0; j < size; j++) {
            if (contador < totalElementos) {
                arrayDeArrays[i][j] = array[contador];
                contador++;
            };
        }
    }

    return arrayDeArrays;
}

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
