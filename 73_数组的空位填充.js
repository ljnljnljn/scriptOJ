// 空位并不等于 undefined 或者 null。一个位置上如果是 undefined 那么它依然有值，例如 [, , undefined]，0 和 1 都是空位，而 2 不是空位。

// 请你完成一个函数 fillEmpty，它接受一个数组作为参数，可以把数组里面的所有空位都设置为 'Hello'

const fillEmpty = (arr) => {
    let len = arr.length
    for(let i = 0; i < len; i++) {
        if(!(i in arr)) {
            arr[i] = 'Hello'
        }
    }
}