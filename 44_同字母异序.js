// 同字母异序指的是两个字符串字母种类和字母的数量相同，但是顺序可能不同。
// 完成 isAnagram，接受两个字符串作为参数，返回true 或者 false 表示这两个字符串是否同字母异序
const isAnagram = (str1, str2) => {
    let str1Arr = str1.split('').sort()
    let str2Arr = str2.split('').sort()
    if(str1Arr.length !== str2Arr.length) return false
    return str1Arr.every((v, index) => {
        return v === str2Arr[index]
    })
}