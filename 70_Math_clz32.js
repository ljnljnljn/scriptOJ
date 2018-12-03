// ES6 新增了 Math.clz32 方法，可以让我们获取到一个整数的无符号 32 位的二进制形式有多少位前置的 0
// 请你完成 clz32 来达到和 Math.clz32 的同样的功能。如果输入的是能够转换成数字的，先转换成数字再进行计算：

const clz32 = (num) => {
    let test = num >>> 0
    return test ? 32 - test.toString(2).length : 32
}


console.log(clz32('sdv'))

console.log(~~((4 - 1) / 2))
