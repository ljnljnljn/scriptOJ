const parseQueryString = function(url) {
    const hash = url.match(/#.*/) || []
    const noHashUrl = url.replace(hash[0], '')
    let query = noHashUrl.match(/\?.*/g) || []
    if (query.length > 0) {
        query = query.reduce((accumulate, item) => {
            return accumulate.concat(item.replace('?', '').split('&'))
        }, [])
        return query.reduce((res, param, index) =>{
            let data = param.split('=')
            let key = data.shift()
            let value = data[0] === undefined ? null : data.join('=')
            res[key] = value
            return res
        }, {})
    }else {
        return {}
    }

}
console.log(parseQueryString(' https://scriptoj.comproblems/?offset=10&limit=100&tag=all?name=lucy'))