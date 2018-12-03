// 在前端的 MVVM 框架当中，我们经常需要监听数据的变化，而数组是需要监听的重要对象。
// 请你完成 ObserverableArray，它的实例和普通的数组实例功能相同，但是当调用这些方法的时候，除了执行相同的操作，
// 还会把方法名打印出来

function ObserverableArray() {
    return new Proxy([], {
        get: function(target, propKey) {
            const propName = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
            propName.indexOf(propKey) > -1 && console.log(propKey)
            return target[propKey]
        }
    })
}

const arr = new ObserverableArray()
arr.push(1)
console.log(arr)