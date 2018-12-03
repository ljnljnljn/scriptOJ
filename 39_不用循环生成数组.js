const arrWithoutLoop = (n) => {
  return [...new Array(n)].map((item, index) => {
    return index
  })
}