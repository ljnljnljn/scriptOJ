// 简单来说，shallowEqual 接受两个参数，如果这两个参数的值相同、
// 或者这两个参数都是对象并且对象的第一层数据相同，那么就返回 true；否则就返回 false
const shallowEqual = (x, y) => {
    if(typeof x !== typeof y) return false
    if(typeof x !== 'object') return Object.is(x, y)
    else {
        if(x === null && y === null) return x === y
        let key1 = Object.keys(x), key2 = Object.keys(y)
        if(key1.length !== key2.length) return false
        return key1.every((key) => {
            return Object.is(x[key], y[key])
        })
    }
}