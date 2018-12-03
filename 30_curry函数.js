// 函数式编程当中有一个非常重要的概念就是 函数柯里化。
// 一个接受 任意多个参数 的函数，如果执行的时候传入的参数不足，那么它会返回新的函数，
// 新的函数会接受剩余的参数，直到所有参数都传入才执行操作。这种技术就叫柯里化。
// 请你完成 curry 函数，它可以把任意的函数进行柯里化，

var curry = function(f) {
    var arr = arguments[1] ? arguments[1] : []
    // 获取当前函数参数
    return function f1() {
        var args = Array.prototype.slice.call(arguments)
        return (function f2(arg) {
          return arg.length === f.length ? f.apply(null, arg) : curry(f, arg);
        })(arr.concat(args))
    }
}

function add(a, b) {
    // return a + b
}
curry(add, 1)