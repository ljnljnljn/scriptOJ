// 在函数式编程当中有一个很重要的概念就是函数组合，
// 实际上就是把处理数据的函数像管道一样连接起来，然后让数据穿过管道得到最终的结果
// 简而言之：compose 可以把类似于 f(g(h(x))) 这种写法简化成 compose(f, g, h)(x)。请你完成 compose 函数的编写。
// 额外挑战：你能通过 1~2 行代码实现 compose 吗。
const compose = (...fns) => {
    /* TODO */
    return function(x) {
      return fns.reduceRight((val, fn) => {
        return fn(val)
      }, x)
    }
}