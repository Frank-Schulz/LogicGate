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

let tableCheck = [];
for (i = 0; i < tableColumns; ++i) {
    let columnLetter = (String.fromCharCode(65 + i));
    console.log(columnLetter);

    tableCheck[columnLetter] = array.shift(i);
};
console.log(tableCheck["A"])
console.log(tableCheck["B"])
console.log(tableCheck["C"])

let and;
let or;
let not;

let result =[];

function AND(a, b) {
    result = [];
    console.log(a,b);
    for (bit = 0; bit < columns; ++bit) {
        and = (a[bit] === 1 && b[bit] === 1) ? 1 : 0;
        result.push(and);
    }
    console.log(result);
    return result
}

function OR(a, b) {
    result = [];
    console.log(a,b);
    for (bit = 0; bit < columns; ++bit) {
        or = (a[bit] === 1 || b[bit] === 1) ? 1 : 0;
        result.push(or);
    };
    console.log(result);
    
    return result
}

function NOT(a) {
    result = [];
    console.log(a);
    for (bit = 0; bit < columns; ++bit) {
        not = (a[bit] === 0) ? 1 : 0;
        result.push(not);
    }
    console.log(result);
    return result
}

let x = [];
let y = [];
let z = [];

// for (ii = 0; ii < columns; ++ii) {
//     console.log(tableCheck["A"][ii])
//     result = AND(tableCheck["A"][ii],tableCheck["B"][ii])
//     x.push(result);
// }
// console.log(x)


// result = AND(tableCheck["A"][7],tableCheck["B"][7])
// console.log(result)

// result = OR(0,1)
// console.log(result)

// result = NOT(1)
// console.log(result)
let input;
let gate = [];

let value1;
let value2;
let operator;

let output;
let gateOutputs;

function logicGate(gate) {

    console.log(gate);
    let outputs = [];
    
    gate.forEach(element => {
        if (Array.isArray(element)) {
            
            operator = element.pop();
            switch(operator) {
                case 'AND':
                case 'OR':
                case 'NOT':
                    break;
                default:
                    element.push(operator)
                    return element
            }

            console.log(operator);
            console.log(element);

            value1 = (element[0]) ? element[0] : undefined;
            value2 = (element[1]) ? element[1] : undefined;

            console.log(value1, value2);

            switch(operator) {
                case 'AND':
                    (value1 && value2) ? output = AND(value1, value2) : error('Input data error! Second value for "AND" not found');
                    console.log(output)
                    console.log(element)
                    index = gate.indexOf(element);
                    console.log(index);
                    if (index !== -1) {
                        console.log(output);
                        gate[index] = output;
                    };
                    console.log(gate);
                    break;
                case 'OR':
                    (value1 && value2) ? output = OR(value1, value2) : error('Input data error! Second value for "OR" not found');
                    console.log(output)
                    console.log(element)
                    index = gate.indexOf(element);
                    console.log(index);
                    if (index !== -1) {
                        console.log(output);
                        gate[index] = output;
                    };
                    console.log(gate);

                    break;
                case 'NOT':
                    (value1) ? output = NOT(value1) : error('Input data error! Value for "NOT" not found');
                    console.log(output)
                    console.log(element)
                    index = gate.indexOf(element);
                    console.log(index);
                    if (index !== -1) {
                        console.log(output);
                        gate[index] = output;
                    };
                    console.log(gate);
                    break;
            }
            console.log(output);
            outputs.push(output)
            console.log(outputs)
        } else {
            console.log(element);
            
            gate = [gate];

            console.log(gate)
            logicGate(gate);
        }
    });
    console.log(gate)
    gateOutputs = gate.flat()
    console.log(gateOutputs)
    
    return gateOutputs
}

let index;
function inputArray(arr) {
    arr.forEach(ele => {
        if (Array.isArray(ele)) {

            inputArray(ele);
            // console.log(ele);
        } else {
            
            if (ele.length == 1) {
                // console.log(ele)
                index = arr.indexOf(ele);
                if (index !== -1) {
                    // console.log(tableCheck[ele]);
                    arr[index] = tableCheck[ele];
                };
            };
            
        };
    return arr;
    });
};

// let tTable = truthTable.truthTable(3);
// input = [['A','B','OR'],['C','NOT'],'AND'];
input = [['A', 'NOT'],'B','OR'];
// input = ['A', 'NOT'];

inputArray(input);
console.log(input);

gateOutputs = logicGate(input);
console.log(gateOutputs)