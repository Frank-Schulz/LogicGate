'use strict';
/*
// truth table call
const truthTable = require('./truthTable.js');
// console.log(tTable);

// truth table import
let array = truthTable.array();
console.log(array);

// column number import
let columns = truthTable.columns;
console.log(columns);
*/

function error(message) {
    try {
        throw new Error(message)
    } catch (e) {
        console.error(e.name + ': ' + e.message)
    };
}



let array = [[0, 0, 0, 0,1, 1, 1, 1],[0, 0, 1, 1,0, 0, 1, 1],[0, 1, 0, 1,0, 1, 0, 1]]
let tableColumns = array.length;
let columns

columns = array[1].length;
console.log(columns)

let arrayId = [];
for (let i = 0; i < tableColumns; ++i) {
    let columnLetter = (String.fromCharCode(65 + i));
    console.log(columnLetter);

    arrayId[columnLetter] = array.shift(i);
};
console.log(arrayId["A"])
console.log(arrayId["B"])
console.log(arrayId["C"])

let and;
let or;
let not;

let result =[];

function AND(a, b) {
    result = [];
    console.log(a,b);
    for (let bit = 0; bit < columns; ++bit) {
        and = (a[bit] === 1 && b[bit] === 1) ? 1 : 0;
        result.push(and);
    }
    console.log(result);
    return result
}

function OR(a, b) {
    result = [];
    console.log(a,b);
    for (let bit = 0; bit < columns; ++bit) {
        or = (a[bit] === 1 || b[bit] === 1) ? 1 : 0;
        result.push(or);
    };
    console.log(result);
    return result
}

function NOT(a) {
    result = [];
    console.log(a);
    for (let bit = 0; bit < columns; ++bit) {
        not = (a[bit] === 0) ? 1 : 0;
        result.push(not);
    }
    console.log(result);
    return result
}

let x = [];
let y = [];
let z = [];

let input;
let gate = [];
let element;

let operator;
let value1;
let value2;

let sub1;
let sub2;

let arry1;
let arry2;

let newArr = [];
let output;
let gateOutputs;

function logicArray(gate) {
    console.log(gate);

    operator = gate.pop();
    console.log(operator);
    switch(operator) {
        case 'AND':
        case 'OR':
        case 'NOT':
            break;
        default:
            gate.push(operator);
            console.log(gate);
            return;
    };
    
    function arrCheck(subPart) {
        if(Array.isArray(subPart)) {
            console.log(subPart)
            logicArray(subPart);
        } else {
            console.log(subPart);
            output = arrayId[subPart];
            console.log(output);
            console.log(gate);
            switch(subPart) {
                case sub1:
                    gate[value1] = output;
                    break;
                case sub2:
                    gate[value2] = output;
            }
            console.log(gate);
        }
        return(output);
    }
    
    function getVal(subNum) {
        switch(subNum) {
            case 1:
                value1 = gate.length-1;
                sub1 = gate[value1];

                arry1 = arrCheck(sub1);
                break;
            case 2:    
                value1 = gate.length -2;
                value2 = gate.length -1;

                sub1 = gate[value1];
                sub2 = gate[value2];
                console.log(sub1, sub2);
                break;
        }
        console.log(sub1,sub2);
        return;
    }

    switch(operator) {
        case 'AND':
            getVal(2);
            console.log(value1, value2);
            console.log(sub1, sub2)

            arry1 = logicArray(sub1);
            arry2 = arrCheck(sub2);
            console.log(arry1, arry2);

            // trying to update value
            arry1 = arry1;
            console.log(arry1, arry2);

            console.log(AND(arry1, arry2))
            console.log(result);
            break;
        case 'OR':
            getVal(2);
            console.log(value1, value2);
            console.log(sub1, sub2)

            arry1 = arrCheck(sub1);
            arry2 = arrCheck(sub2);
            console.log(arry1, arry2);

            console.log(OR(arry1, arry2))
            console.log(result);
            break;
        case 'NOT':
            getVal(1);
            console.log(value1);
            console.log(sub1)

            arry1 = arrCheck(sub1);
            console.log(arry1);

            console.log(NOT(arry1))
            console.log(result);
            arry1 = result;
            break;
        default:
            // gate.push(operator);
            // console.log(gate);
            // logicArray()
    }
    console.log(newArr);
    console.log(gate);
    return gate
}

let index;
let arr = [];
// Convert column ID's to respective array
function inputArray(inputArr) {
    console.log(inputArr);
    inputArr.forEach(ele => {
        if (Array.isArray(ele)) {

            inputArray(ele);
            console.log(ele);
        } else {
            
            if (ele.length == 1) {
                console.log(ele)
                index = inputArr.indexOf(ele);
                console.log(index);
                if (index !== -1) {
                    console.log(input[index]);
                    console.log(arrayId[ele]);
                    inputArr[index] = arrayId[ele];
                };
            };
        };
    });
    return inputArr;
};

// input = [['A',['B','NOT'],'AND'],[['A','NOT'],'B','AND'],'OR'];
// input = [['A','B','AND'],'C','OR'];
input = [[['A','NOT'],'B','AND'],'C','OR'];

// input = inputArray(input);
console.log(input);
// console.log(input[0][1][0]);

// input = input.flat(Infinity)
console.log(input);
// console.log(inputArray(input));
console.log(input.entries());


console.log(input);

gateOutputs = logicArray(input);
console.log(gateOutputs)