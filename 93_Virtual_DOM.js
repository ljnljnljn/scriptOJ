// 请你完成 h 函数和 VNode 的实现。

class VNode {
    /* TODO */
    constructor(tagName, props = {}, children = []) {
        this.tagName = tagName
        this.props = {...props}
        this.children = [...children]
    }
}
  
const h = (tag, props, children) => {
    let node = new VNode(tag, props)
    if(children.tagName) {
        for(let {tagName, props = {}, children = []} of children) {
            let childNode = h(tagName, props, children)
            node.push(childNode)
        }
    }else if(children.length) {
        for(let i of children) {
            node.children.push(i)
        }
    }
    return node
}
  