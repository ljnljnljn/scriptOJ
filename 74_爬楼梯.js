// 有一个楼梯，你一次只能往上走一阶或者两阶。请编写函数 climbStairs，
// 它接受一个整数 n 作为参数，表示这个楼梯有多少阶。请你返回一个整数，表示这个楼梯一共有多少种走法

const climbStairs = (n) => {
    if(n === 0) return 0
    if(n === 1) return 1
    let arr = [1, 1]
    for(let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}
console.log(climbStairs(3))