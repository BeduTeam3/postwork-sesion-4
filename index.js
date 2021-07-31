/*------------------------------ #1 ------------------------------*/
 function deepEqual(a, b) {

    if(typeof a === 'object' && typeof b === "object"){
        let aKey = Object.keys(a).sort();
        let bKey = Object.keys(b).sort();
        if(!deepEqual(aKey.length, bKey.length)){
            return false;
        }
        for(let i=0; i < aKey.length; i++){
            if(!deepEqual(aKey[i], bKey[i])){
                return false;
            }
            if(!deepEqual(a[aKey[i]], b[bKey[i]])){
                return false;
            }
        }
        return true;
    }else{
        return a===b;
    }
   }
   
   const john = {
    firstName: 'John',
    lastName: 'Doe'
   }
   const johnn = {
    lastName: 'Doe',
    firstName: 'John'
   }
   
   console.log("---------- #1 deepEqual ----------");
   console.log('Test 1:', deepEqual(1, 1)) // true
   console.log('Test 2:', deepEqual(1, '1')) // false
   console.log('Test 3:', deepEqual(john, john)) // true
   console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
   console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
   

/*------------------------------ #2 ------------------------------*/   
 function chunk(array, size) {
     let nuevoArreglo = []

     for (let i = 0; i < array.length; i+=size) {
         let parteArreglo = array.slice(i, i+size);
        nuevoArreglo.push(parteArreglo);
     }

     return nuevoArreglo;

  };
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log("---------- #2 chunk ----------");
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]


/*------------------------------ #3 ------------------------------*/
 function frequency(string) {
    let letra = "";
    let objeto = {};

    for (let i = 0; i < string.length; i++) {
        letra = string[i];
        if(objeto[letra] === undefined){
            objeto[letra] = 1;
        }else{
            objeto[letra] += 1;
        }
    }

    return Object.entries(objeto).sort()

}

    console.log("---------- #1 frecuency ----------");
    console.log('Test 1:', frequency('cccbbbaaa')) // {a: 3, b: 3, c: 3}
    console.log('Test 2:', frequency('www.bedu.org')) // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
    console.log('Test 3:', frequency('john.doe@domain.com')) // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
   