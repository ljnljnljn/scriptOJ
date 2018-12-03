const getPageTags = function() {
    let tags = document.getElementsByTagName('*')
    let set = new Set([...tags].map(tag => tag.tagName))
    return [...set]
}