/*
// And Or Not Gate function
function OrAndNotGate(a, b, c) {
    if (a == true || b == true) {
        if (c != true) {
            return true
        } else return false
    } else return false
}

console.log(OrAndNotGate(true, true, false))


// And Or Not Gate function refactored
function OrAndNotGate(a, b, c) {
    if (typeof a === 'boolean' && typeof b === 'boolean' && typeof c === 'boolean') {
        return ((a || b) && !c) ? true : false;
    } else return "Not boolean"
}

console.log(OrAndNotGate(true, true, false))


// And Or Gate function
function AndOrGate(a, b, c) {
    if (typeof a === 'boolean' && typeof b === 'boolean' && typeof c === 'boolean') {
        return ((a && b) || c) ? true : false;
    } else return "Input not boolean"
}

console.log(AndOrGate(true, false, true))


// XOR Gate function
function XORGate(a, b) {
    if (typeof a === 'boolean' && typeof b === 'boolean') {
        return (!(a && b) && (a || b)) ? true : false;
        /*
        y = !(a && b) ? true : false;
        z = (a || b) ? true : false;
        return (y && z) ? true : false;
        *
   } else return 'input not boolean'
}

let y = undefined;
let z = undefined;

console.log(XORGate(false, false))
console.log(XORGate(false, true))
console.log(XORGate(true, false))
console.log(XORGate(true, true))
*/

/*
A= [0,0,0,0,1,1,1,1]
B= [0,0,1,1,0,0,1,1]
C= [0,1,0,1,0,1,0,1]
*/

