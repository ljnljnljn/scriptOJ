// 完成一个 flikerProps 方法，接受一个对象作为参数。可以把该对象的不可遍历属性变成可遍历属性；把可遍历属性变成不可遍历属性。

const flikerProps = (obj) => {
    Object.getOwnPropertyNames(obj).forEach(item => {
        Object.defineProperty(obj, item, {
            enumerable: !Object.getOwnPropertyDescriptor(obj, item).enumerable,
            configurable: true
        })
    });
}

const obj = {}
const config1 = { enumerable: false, configurable: true }
const config2 = { enumerable: true, configurable: true }

Object.defineProperties(obj, {
  green: config1,
  red: config2,
  blue: config1,
  yellow: config2
})
console.log(Object.getOwnPropertyDescriptor(obj, 'green'))
console.log(obj.hasOwnProperty('green'))