'use strict';
    function importTable(columnNum) {
    // truth table import
    const truthTable = require('./truthTable.js');
    // Generate truth table with given number of columns and import
    let array = truthTable.array(3);
    console.log(array);

    // Placeholder for array import for testing
    // let array = [[0, 0, 0, 0, 1, 1, 1, 1],[0, 0, 1, 1, 0, 0, 1, 1],[0, 1, 0, 1, 0, 1, 0, 1]]

    let tableColumns = array.length;
    let rows = array[0].length;
    // console.log(rows)

    let arrayId = [];
    for (let i = 0; i < tableColumns; ++i) {
        let columnLetter = (String.fromCharCode(65 + i));
        // console.log(columnLetter);

        arrayId[columnLetter] = array.shift(i);
    };
    // console.log(arrayId["A"])
    // console.log(arrayId["B"])
    // console.log(arrayId["C"])
}
let result =[];

function AND(a, b) {
    result = [];
    // console.log(a,b);
    for (let bit = 0; bit < rows; ++bit) {
        let and = (a[bit] === 1 && b[bit] === 1) ? 1 : 0;
        result.push(and);
    }
    // console.log(result);
    return result
}

function OR(a, b) {
    result = [];
    // console.log(a,b);
    for (let bit = 0; bit < rows; ++bit) {
        let or = (a[bit] === 1 || b[bit] === 1) ? 1 : 0;
        result.push(or);
    };
    // console.log(result);
    return result
}

function NOT(a) {
    result = [];
    // console.log(a);
    for (let bit = 0; bit < rows; ++bit) {
        let not = (a[bit] === 0) ? 1 : 0;
        result.push(not);
    }
    // console.log(result);
    return result
}

let x = [];
let y = [];
let z = [];

let input;

function logicArray(gate) {
    let operator;
    let value1;
    let value2;
    // console.log(gate);
    if(Array.isArray(gate)) {
        operator = gate.pop();
        // console.log(operator);
        switch(operator) {
            case 'AND':
                value1 = logicArray(gate.shift());
                value2 = logicArray(gate.shift());
                // console.log(value1, value2);
                result = AND(value1, value2);
                // console.log(value1, result);
                break;
            case 'OR':
                value1 = logicArray(gate.shift());
                value2 = logicArray(gate.shift());
                // console.log(value1, value2);
                result = OR(value1, value2);
                // console.log(value1, result);
                break;
            case 'NOT':
                value1 = logicArray(gate.shift());
                result = NOT(value1);
                // console.log(value1, result);
                break;
            default:
                value1 = logicArray(operator);
                // console.log(value1);
                return value1;
        };
    } else {
        // console.log(gate);
        result = arrayId[gate];
    }
    // console.log(result);
    return result;
}

importTable(3);

/*
Use 'A', 'B', 'C' etc and 'NOT', 'OR', 'AND' to use gate logic on the logic table
*/

// Examples:
input = [['A',['B','NOT'],'AND'],[['A','NOT'],'B','AND'],'OR']; // expected outcome: [0, 0, 1, 1, 1, 1, 0, 0]
// input = [['A','B','AND'],'C','OR']; // expected outcome: [ 0, 1, 0, 1, 0, 1, 1, 1 ]
// input = [[['A','NOT'],'B','AND'],'C','OR']; // expected outcome: [ 0, 1, 1, 1, 0, 1, 0, 1 ]

// input = ['A'];

console.log(input);

let gateOutputs = logicArray(input);
console.log(gateOutputs)