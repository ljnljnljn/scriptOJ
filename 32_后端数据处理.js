const parseData = (data) => {
    let arr = []
    data.rows.map((row, index) => {
        let obj = {}
        row.map((item, index) => {
            obj[data.metaData[index].name] = item
        })
        arr.push(obj)
    })
    return arr
}