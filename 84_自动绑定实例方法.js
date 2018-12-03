// 请你完成一个方法 autoBind，它可以接受一个类作为参数，并且返回一个类。
// 返回的类的实例和原来的类的实例功能上并无差别，
// 只是新的类的实例所有方法都会自动 bind 到实例上

const autoBind = (ToBindClass) => new Proxy(ToBindClass, {
    construct: function(F, args) {
        let instance = new F(...args)
        return new Proxy(instance, {
            get: function(target, name) {
                if(typeof target[name] === 'function') {
                    return target[name].bind(target)
                }
                return target[name]
            }
        })
    }
})

var p = new Proxy(function () {}, {
    construct: function(target, args) {
      return { value: args[0] * 10 };
    }
  });

let a = new p(1)
console.log(a.value, a)