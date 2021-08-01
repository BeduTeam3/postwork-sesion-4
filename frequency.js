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
