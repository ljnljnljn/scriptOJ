// 做一个小型的 MVVM 库，可以做到数据和视图之间的自动同步。

// 你需要做的就是完成一个函数 bindViewToData，
// 它接受一个 DOM 节点和一个对象 data 作为参数。
// bindViewToData 会分析这个 DOM 节点下的所有文本节点，
// 并且分析其中被 {{ 和 }} 包裹起来的表达式，然后把其中的内容替换成在 data 上下文执行该表达式的结果
const observer = (data) => {
    if(!data || typeof data !== 'object') {
        return
    }
    for(key in data) {
        defineReactive(data, key, data[key]);
    }
}

//利用Object.defineProperty监听数据变化
//一个defineReactive对应对象一个属性
const defineReactive = (data, key, value) => {
    let dep = new Dep()
    Object.defineProperty(data, key, {
        get: function() {
            if(target) {
                dep.addNode(target)
            }
            return value
        },
        set: function(newVal) {
            value = newVal
            dep.notify();
        }
    })
}

//Dep是对象属性对节点的管理器
function Dep() {
    this.nodes = []
}

Dep.prototype = {
    addNode: function(node) {
        this.nodes.push(node)
    },
    notify: function() {
        setTimeout(() => {
            this.nodes.map((node) => {
                node.update()
            })
        })
    }
}

//观察者
function Watcher(data, node) {
    //target的作用是只在new Watcher的时候建立关系
    //不然每次get都将节点压入dep
    target = this;
    //保存节点
    this.node = node;
    this.data = data;
    //保存text节点的值
    this.nodeValue = node.nodeValue;
    //将对象的每一个属性都访问一遍，建立对象属性跟节点的关系
    for(let key in data) {
        data[key]
    }
    target = null;
}

Watcher.prototype = {
    // 模版解析
    execute: function(exp) {
        return new Function(...Object.keys(this.data), `return ${exp}`)(...Object.values(this.data))
    },
    update: function() {
        const newValue = this.nodeValue.replace(/{{(.*?)}}/g, (exp) => {
            exp = exp.replace(/{{|}}/g, '')
            return this.execute(exp)
        })
        this.node.nodeValue = newValue
    }
}

const watchTextNode = (el, data) => {
    [...el.childNode].map((child) => {
        if(!child instanceof Text) {
            watchTextNode(child, data)
        }else {
            new Watcher(data,child)
        }
    })
}


// 将观察者事例Watcher赋值给全局的Dep.target,然后render，只有被Dep.target标记的才会进行依赖收集
// 有Dep.target的对象会将Watcher的实例push到nodes中，
// 在对象被修改调用setter方法时候dep会调用Watcher中的update方法进行渲染

const bindViewToData = (root, data) => {
    //监听数据
    observe(data);
    //数据变化则更新对应的节点
    watchTextNode(root, data);
    //先触发数据变化，更新view
    for(let key in data) {
      data[key] = data[key]
      return
    }
}