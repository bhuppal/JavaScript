function printName() {
    return 'Bhuppal Kumar'
}

function findName() {
    return printName()
}

function sayMyName() {
    return findName()
}

let r = sayMyName()
console.log(r)