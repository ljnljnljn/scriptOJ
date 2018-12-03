class VNode {
    constructor(tagName, props = {}, children = []) {
        this.tagName = tagName
        this.props = {...props}
        this.children = [...children]
    }
    render() {
        const dom = document.createElement(this.tagName)
        if(this.props) {
            const keys = Object.keys(this.props)
            keys.forEach(key => {
                dom.setAttribute(key, this.props[key])
            })
        }
        if(this.children) {
            this.children.forEach(child => {
                dom.appendChild(child instanceof VNode ? child.render() : document.createTextNode(child))
            })
        }
        return dom
    }
}
const h = (tagName, props, children) => {
    return new VNode(tagName, props, children)
}