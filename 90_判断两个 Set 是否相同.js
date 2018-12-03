// 完成 isSameSet 函数，它接受了两个 Set 对象作为参数，
// 请你返回 true/false 来表明这两个 set 的内容是否完全一致，例如：const a = {}
// const b = 1
// const c = 'ScriptOJ'

// const set1 = new Set([a, b, c])
// const set2 = new Set([a, c, b])

// isSameSet(set1, set2) // => true


const isSameSet = (s1, s2) => {
    if(s1.size !== s2.size) return false
    return [...s1].every((item) => {
        return s2.has(item)
    })
}