// 完成一个类 Box，实例化的时候给它传入一个数组。
// Box 的实例支持 for...of 操作，可以把初始化的时候传给 Box 的数组内容遍历出来：

class Box {
    /* TODO */
    constructor(arr) {
        return [...arr]
    }
}

const box = new Box(['book', 'money', 'toy'])
for(let i of box) {
    console.log(i)
}
let arr = ['book', 'money', 'toy']
let set = new Set([...arr])

console.log(set)
console.log(box)