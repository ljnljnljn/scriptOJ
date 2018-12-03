const partition = (arr) => {
    let pivot = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= pivot) {
            let j = i
            while(arr[j - 1] && arr[j - 1] >= pivot) {
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                j--
            }
        }
    }
}