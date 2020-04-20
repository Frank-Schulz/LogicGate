let columns = 0;

function truthTable(str, add) {
    for (s = 0; s < str; ++s) {
        columns = 5;
        console.log(columns)
    }
    columns = add;
    console.log(columns);
}

function streams(columns) {
    // console.log(columns);
    let stream = 0;
    let add = 0;
    // console.log(columns);
    add = columns%5;
    // console.log(add);
    if (columns%5 === 0) {
        stream = columns/5;
    } else {
        stream = (columns - add)/5;
    }
    console.log(stream, add);
    // console.log(5*stream+add)

    truthTable(stream, add)

    return (`${stream} set/s of 5, plus ${add}`)
}

// console.log(streams(3));
// console.log(streams(5));
// console.log(streams(7));
// console.log(streams(15));
console.log(streams(18));
// console.log(streams(20));
// console.log(streams(23));
// console.log(streams(25));