//回溯法：不断回头的暴力遍历
// 路径，结束条件，决策
var permute = function(nums) {
    let res=[]
    let dfs=(path)=>{
        // 结束条件：当路走完就返回这一次路线
        if(path.length==nums.length){
            res.push([...path])
            return 
        }
        for(let i=0;i<nums.length;i++){
            // 循环做决策：当这个地方来过就跳过
            if(path.indexOf(nums[i])!==-1){
                continue
            }
            // 没有来过，就记录
            path.push(nums[i])
            // 将剩下的路走完
            dfs(path)
            // 重新选起点
            path.pop()
        }
    }
    dfs([])
    return res
};

console.log(permute([1,2,3,4]))