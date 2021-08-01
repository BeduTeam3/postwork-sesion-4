function chunk(array, size) {
    let newArray = []
    for (let i = 0; i < array.length; i+=size) {
        let sizeArray = array.slice(i, i+size);
       newArray.push(sizeArray);
    }
    return newArray;
};

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
