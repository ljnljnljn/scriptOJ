// 黄小明是老司机了，他每天任务就是送一群人去上班。但是每天送的人数不一样，这些人上车的时间也不一样。小明总是要等到人齐才能开车。

// 完成函数 driveCustomers，它接受不定数量的参数，这是参数都是函数，每个函数代表一个人。
// 这些函数都接受一个回调函数作为参数，当回调函数被调用的时候说明这个人已经上车了，回调函数会被传入人名
/* drive 函数已经可以直接使用 */



// 这道题每个人相当于一个异步任务，等所有的异步任务都完成了，才发车，这是一个异步流程控制
const driveCustomers = (...fns) => {
    let custom = []
    fns.forEach((fn) => {
        fn((name) => {
            custom.push(name)
            if(custom.length === fns.length) {
                drive(custom)
            }
        })
    })
}

// 可以使用promise.all
const driveCustomersPromise = async(...fns) => {
    let custom = []
    let promises = fns.forEach((fn) => {
        return new Promise((resolve, reject) => {
            fn((name) => {
                custom.push(name)
                resolve()
            })
        })
    })
    await Promise.all(promises)
    drive(custom)
}