let array = [];

function construct(array) {
    for(el = 0; el < array.length; ++el) {
        op = array[el];
        // console.log(op);
        val1 = el - 2;
        val2 = el - 1;
        // console.log(val1,val2,op,el);
        switch(op) {
            case 'AND':
            case 'OR':
                array.splice(val1, 3, [array[val1],array[val2], op]);
                // console.log(array);
                construct(array);
                break;
            case 'NOT':
                array.splice(val2, 2, [array[val2], op]);
                // console.log(array);
                construct(array);
                break;
        }
    };
    // console.log(array);
    return array
}

array1 = ['A','B','OR','C','AND'];
array2 = ['A','B','NOT','AND','A','NOT','B','AND','OR'];
array3 = ['A','NOT','B','NOT','AND','C','OR'];
array4 = ['A','NOT','B','NOT','AND','C','OR'];

array =  construct(array1);
console.log(array);
array =  construct(array2);
console.log(array);
array =  construct(array3);
console.log(array);
array =  construct(array4);
console.log(array);



console.log(array[0]);

console.log(array);
console.log([array]);