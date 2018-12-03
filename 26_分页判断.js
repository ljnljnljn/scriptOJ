// 完成分页函数 getPages，接收两个参数：
// getPages(total, itemsPerPage) 会返回一个数字告诉我们需要有多少页数据。
// 例如，总共 101 条数据，每页有 10 条，就需要 11 页，那么就返回 11。

const getPages = (total, itemsPerPage) => {
    if(itemsPerPage === 0) return 0
    return Math.ceil(total / itemsPerPage)
}