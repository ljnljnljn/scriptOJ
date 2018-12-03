// 请实现函数 invertTree，它接受一个表示二叉树的数组，返回表示这个反转二叉树的数组。
const invertTree = (tree) => {
    /* TODO */
    if(tree.length <= 0) return []
    let reverseTree = []
    let index = 0
    let p = 0
    let len = 0
    while(len < tree.length) {
        p = len
        len += Math.pow(2, index)
        reverseTree.push(...(tree.slice(p, len).reverse()))
        index++
    }
    return reverseTree
}