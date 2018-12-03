// 请你完成 highlight 函数，可以把模版字符串中的插入内容替换掉，并且插入文档以后显示红色。例如：
const yourName = 'ScriptOJ'
const myName = 'Jerry'
document.body.innerHTML = highlight`Hello, ${yourName}. I am ${myName}.`


const highlight =(str, ...values) => {
    let res = ''
    for(let i = 0; i < values.length; i++) {
        res += str[i] + `<span class="red">${values[i]}</span>`
    }
    res += str[values.length]
    return res
}