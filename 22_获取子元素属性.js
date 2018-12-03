const getChildAttributes = function(el, attrName) {
    let lists = []
    for(let item of el.children) {
        lists.push(item.getAttribute(attrName))
    }
    return lists
}