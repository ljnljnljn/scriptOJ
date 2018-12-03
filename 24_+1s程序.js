// 完成一个生成计数器的函数 plusFor，调用它会返回一个计数器。
// 计数器本身也是一个函数，每次调用会返回一个字符串

// 本题考察的是关于闭包的应用
const plusFor = function(name) {
    let count = 0
    return function() {
        count++
        return `为${name}+${count}s`
    }
}
