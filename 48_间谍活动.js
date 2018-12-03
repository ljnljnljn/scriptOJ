const spy = function(fn) {
    let calls = []
    let f = function() {
        let obj = {
            args: [...arguments],
            result: fn.apply(this, arguments)
        } 
        calls.push(obj)
        return obj.result
    }
    f.calls = calls
    return f
}

let add = (a, b) => a + b
let spyAdd = spy(add)
spyAdd(1, 2)


function outer() {
    inner()
}

function inner() {
    console.log(inner.caller.name)
    console.log(arguments.callee.caller)
}
outer()