const num = -112333333;
console.log(num.toLocaleString('en',{ style: 'currency', currency: 'USD' }))

function commafy (num) {
    let arr = num.toString().split('.')
    let integer = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    if(arr[1]) {
        return integer + '.' + arr[1]
    }else {
        return integer
    }
}
console.log(commafy(-10000.33))