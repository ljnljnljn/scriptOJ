// 返回函数就相当于闭包，按照正常清理timer，使用定时函数

const debounce = (fn, duration) => {
    let timer = null
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, duration)
    }
}