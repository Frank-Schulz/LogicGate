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

function truthTable(...args) {
	columns = arguments.length
    rows = Math.pow(2, columns)
    console.log(columns, rows)

    // ------------------------------------------

    for (i = columns; i > 0; --i) {
        console.log(i)
        console.log(column = columnLetter[columnNum])
        column = [];
        ++columnNum;
    }

    // -----------------------------------------------------

	for (i = columns; i > 0; --i) {
        console.log(i)
        console.log(column = columnLetter[columnNum])
        column = [];

        for (i = rows; i > 0; --i) {
            console.log(i);
            (i > (rows / 2)) ? column.push(0) : column.push(1);
        }

        console.log(columnLetter[columnNum], column)
        ++columnNum;
    }
    // return columnLetter
    
}


let columnLetter = ['A', 'B', 'C', 'D', 'C', 'E', 'F']
let columnNum = 0;

let columns = 0;
let rows = 0;

console.log(truthTable(true, true, true))