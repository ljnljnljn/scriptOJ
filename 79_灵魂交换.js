const exchange = (a, b) => {
    let aObj = Object.getPrototypeOf(a)
    let bObj = Object.getPrototypeOf(b)
    Object.setPrototypeOf(a, bObj)
    Object.setPrototypeOf(b, aObj)
}