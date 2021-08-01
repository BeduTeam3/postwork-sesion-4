function deepEqual(a, b) {
    if (typeof (a) === "object" && typeof (b) === "object") {
        var aVar = Object.keys(a).sort();
        var bVar = Object.keys(b).sort();
        if (!deepEqual(aVar.length, bVar.length)) {
            return false;
        }
        for (let i = 0; i < aVar.length; i++) {
            if (!deepEqual(aVar[i], bVar[i])) {
                return false;
            }
            if (!deepEqual(a[aVar[i]], b[aVar[i]])) {
                return false;
            }
        }
        return true;
    } else if (a === b) {
        return true
    } else {
        return false
    }
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
