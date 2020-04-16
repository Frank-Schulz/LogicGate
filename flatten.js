
// Variable initialiaztion
let arrr = [1, 3, 5, 6, [['Asti', [10]], 7, 8], ['Ali', 'Frank'], 5, 6, [8, 5]];
let arrrFlat = [];

// array.flat example / promotes sub-arrays by one level (adds the values of the first level of sub-arrays to the main array)
let newArrr = arrr.flat(/* how much to flatten eg: 3    default is: 1*/);
console.log(newArrr)
// array.flat example 2
newArrr = arrr.flat(2);
console.log(newArrr)

// Start of array flattening function
function flatten(array) {
    // Search through array / if nested array is found
    array.forEach(element => {
        if (Array.isArray(element)) {
            // call this function and pass the nested array
            flatten(element);
        } else {
            // else if values are found / push to new array (arrrFlat)
            arrrFlat.push(element);
        }
    });
    // return new array (arrrFlat) to function caller
    return arrrFlat
}
// Call flatten function / pass the "arrr" array / log the result
flatten(arrr);
console.log(arrrFlat);

// -----------------------------------------------------------------------

// variable reset
arrrFlat = [];
// Start of array flattening function / 2 levels
function flatten(array) {
    // Search through array / if nested array is found
    array.forEach(element => {
        if (Array.isArray(element)) {
            // Search through nested array / if nested array is found
            element.forEach(el => {
                if (Array.isArray(el)) {
                    // push values of nested array to new array (arrrFlat)
                    el.forEach(ele => {
                        arrrFlat.push(ele)
                    })
                    // else if values are found / push to new array (arrrFlat)
                } else {
                    arrrFlat.push(el)
                }
            })
        } else {
            arrrFlat.push(element);
        }
    });
    // return new array (arrrFlat) to function caller
    return arrrFlat
}
// Call flatten function / pass the "arrr" array / log the result
flatten(arrr);
console.log(arrrFlat);

// -----------------------------------------------------------------------

// variable reset
arrrFlat = [];
// Start of array flattening function / 2 levels
function flatten(array) {
    // Search through array / if nested array is found
    array.forEach(element => {(Array.isArray(element)) ? (
        // Search through nested array / if nested array is found
        element.forEach(el => {(Array.isArray(el)) ? (
            // push values of nested array to new array (arrrFlat)
            el.forEach(ele => {arrrFlat.push(ele)}))
            // else if values are found / push to new array (arrrFlat)
            : (arrrFlat.push(el)); }))
        : (arrrFlat.push(element))});
        // return new array (arrrFlat) to function caller
    return arrrFlat
}
// Call flatten function / pass the "arrr" array / log the result
flatten(arrr);
console.log(arrrFlat);
