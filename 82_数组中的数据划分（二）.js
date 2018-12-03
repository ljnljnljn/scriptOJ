const partition3way1 = (arr) => {
    if(arr.length <= 0) return 
    let pivot = arr[0]
    let pivotArr = [arr[0]]
    let left = []
    let right = []
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > pivot) {
            right.push(arr[i])
        }else if(arr[i] < pivot) {
            left.push(arr[i])
        }else {
            pivotArr.push(arr[i])
        }
    }
    return left.concat(pivotArr, right)
}

console.log(partition3way([3, 1, 3, 6, 2, 3, 4, 5]))


const partition3way = (arr) => {
    let p = 0
    let index = arr[0]
    let len = arr.length
    for(let i = 0; i < len; i++) {
        if(arr[i] < index) {
            arr[p] = arr[i]
            arr[i] = index
            p++
        }else if(arr[i] > index){
            for(var j = i + 1; j < len; j++) {
                if(arr[j] <= index) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]
                    i--
                    break
                }
            }
            if(j === len) return
        }
    }
}