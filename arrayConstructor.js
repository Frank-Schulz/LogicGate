let foo = [];

function construct(foo) {
    for(el = 0; el < foo.length; ++el) {
        op = foo[el];
        // console.log(op);
        val1 = el - 2;
        val2 = el - 1;
        console.log(val1,val2,op,el);
        switch(op) {
            case 'AND':
            case 'OR':
                foo.splice(val1, 3, [foo[val1],foo[val2], op]);
                console.log(foo);
                construct(foo);
                break;
            case 'NOT':
                foo.splice(val2, 2, [foo[val2], op]);
                console.log(foo);
                construct(foo);
                break;
        }
    };
    console.log(foo);
    return foo
}

foo = ['A','NOT','B','NOT','AND','C','OR']

construct(foo)
console.log(foo);
console.log(foo[0])

let foobar;
console.log(foobar)
