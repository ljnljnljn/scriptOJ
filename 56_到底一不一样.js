const is = (x, y) => {
    if(isNaN(x) && isNaN(y)) return true
    if(x === 0 && y === 0) {
        return 0 / x === 0 / y
    }
    return x === y
}

console.log(0 / -0 === 0 /+0 )
console.log(isNaN(undefined))