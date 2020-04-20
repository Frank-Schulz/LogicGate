

let table = [];
let level = 0;

function truthTable(...args) {

    columns = (arguments.length - 1);
    console.log(columns);

    rows = Math.pow(2, columns);
    console.log(rows);

    function line(num) {
        if (num <= 0) {
            return [0, 1]
        } else {
            return [line(num-1), line(num-1)]
        }
    }

    let sets = line(columns)
    console.log(sets);

    function foo(foobar) {
       (Array.isArray(foobar[0])) ? (
           table.push(0), level = 0, foo(foobar[0])) : 
           table.push(foobar[0]), (level !== undefined) ? (table.push(level)) : 'fail';
           
        level = undefined;
       (Array.isArray(foobar[1])) ? (
           table.push(1), level = 1, foo(foobar[1])) : 
           table.push(foobar[1]), (level !== undefined) ? (table.push(level)) : 'fail';
        level = undefined;
        return table
    }

    table = foo(sets);
}

truthTable(1,1);
console.log(table)