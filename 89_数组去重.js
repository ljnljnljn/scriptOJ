// 编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组
const unique = (arr) => {
    return [...new Set(arr)]
}

const oldUnique = (arr) => {
    let temp = []
    let hash = {}
    for(let i = 0; i < arr.length; i++) {
        if(!hash.hasOwnProperty(arr[i])) {
            temp.push(arr[i])
            hash[arr[i]] = true
        }
    }
    return temp
}