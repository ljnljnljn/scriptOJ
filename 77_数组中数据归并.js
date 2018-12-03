// 有一个数组，这个数组从两个地方开始升序，一个是开始，一个是中间
// 请你完成 merge 函数，可以把类似上面的数组变成一个完全升序的数组（直接修改原来的数组）。
// 你不能用 sort 方法，并且只能使用一次循环。

const merge = (arr) => {
    arr.forEach((a,i)=>{
      let min = Math.min.apply(null,arr.slice(i))
      let index = arr.indexOf(min,i)
      arr.splice(index,1)
      arr.splice(i,0,min)
    })
}