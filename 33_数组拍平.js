const flatten = (arr) => {
    return arr.reduce((flat, toFlat) => {
        return flat.concat(Array.isArray(toFlat) ? flatten(toFlat) : toFlat)
    }, [])
}
console.log(flatten([1,2,3,4]))