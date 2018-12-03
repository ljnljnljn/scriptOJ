// 你是一个盗窃专家，某一天晚上你要去盗窃某一条街道的一排房子。
// 这些房子都有相连的防盗系统，如果你把相邻的两家都偷了那么就会触发报警器。
// 用一个数组来表示这些房子的金钱数量，请你完成 rob 函数，
// 计算出在不触发报警器的情况下最多能偷多少钱。
const rob = (nums) => {
    let stole = []
    stole[0] = nums[0]
    stole[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++) {
        stole[i] = Math.max(stole[i - 2] + nums[i], stole[i - 1])
    }
    return stole[nums.length - 1] 
  }
  
  console.log(rob([1, 2, 3]))