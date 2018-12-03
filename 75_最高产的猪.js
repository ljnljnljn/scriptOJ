// 请你完成一个函数 findMostProductivePigChildrenCount 
// 它接受一个 DOM 节点作为参数，返回一个数组。存放同代猪最高产的猪的孩子的数量。
const findMostProductivePigChildrenCount = (dom) => {
    let res = []
    bfs([dom], res)
    function bfs(piges, res) {
        let most = 0
        let childPiges = []
        for(let pige of piges) {
            if(pige.childElementCount) {
                childPiges.push(...piges.children)
                if(pige.childElementCount > most) {
                    most = pige.childElementCount
                }
            }
        } 
        res.push(most)
        if(childPiges.length) {
            bfs(childPiges, res)
        }
    }
    return res
}