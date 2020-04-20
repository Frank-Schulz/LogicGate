// Start of truthTable function / generates a truth table based on input
// Variable initialization
let arr = [];
let table = '';
let columnNum = 0;
let columns = 0;
let rows = 0;

let cap = 14;

// Function to generate the 0's and 1's on each column
function truthColumn() {

    let columnCount = columnNum + 1
    // length of the set
    let set = Math.pow(2, columnCount)
    // number of sets
    let numSets = (rows / set);
    // generate the 0's and 1's for each set of sets per column
    for (rep = numSets; rep > 0; --rep) {
        for (i = set; i > 0; --i) {
            (i > (set / 2)) ? 
                column.push(0): 
                column.push(1);
        };
    }
    // return an array of the column
    return column;
}


function truthTable(columns) {
    // variable initialization / how many rows and columns
    rows = Math.pow(2, columns)
    console.log(columns, rows)

    let otherChar = ((columns - 1) * (rows + 1))
    // console.log(otherChar)

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    // Unwanted value check
    if(columns > cap && columns < 25) {
        return `Really? You realise that ${numberWithCommas(columns)} columns means you're now trying to calculate ${numberWithCommas(rows)} rows?
        That comes to a total of ${numberWithCommas(columns * rows)} characters! NOT including the column letters and spacing! Which is another ${numberWithCommas(otherChar)} characters!
        This program could do more but I have capped it at ${cap} columns to avoid memory issues and data truncation.`

    } else if (columns >= 25) {
        return `I don't think you realize that you just asked my poor program to calculate over ${numberWithCommas(Math.floor(rows/(1024 * 1000)))} GB of data`
    } else if (columns < 1) {
        return `huh... would you look that.
        It would seem that this program is not a fan of negativity...
        The minimum possible value is 1`
    }
    // function to generate the individual columns
	for (ii = 0; ii < columns; ++ii) {
        // console.log(ii)
        
        let columnLetter = (String.fromCharCode(65 + ii))
        table += `${columnLetter} `;
        // console.log(table)
        column = [];

        arr.push(truthColumn())
        ++columnNum;
    }
    table += '\n'
    arr.reverse();
    
    // console.log(arr)
    
    for (q = 0; q < rows; ++q) {
        for (z = 0; z < arr.length; ++z) {
            table += `${(arr[z][q])} `
            // console.log(table)
        }
        table += '\n';
    }
    // console.log(table)

    return table
    
};

let tTable = truthTable(-3);
console.log(tTable)