var bfs = (start, end, midlist) => {
    // 终点如果不在地点数组里就直接返回-1
    // if (!midlist.includes(end)) return -1
    let dires = new Set(midlist) //地点集
    const len = dires.size  //注意每个都要遍历到，固定不变
    let path = new Map() //记录到达每个地点的距离,[地点,起点到该地点距离]
    path.set(start, 0) //初始化起点
    // 遍历每一个地点集
    for (let i = 0; i < len; i++) {
        for (let item of path) {
            // 通过判断当前走了几步，来确定下一步怎么走
            if (item[1] == i) {
                // 获取当前地点位置
                let cur = item[0]
                // 找走一步就能到的地点，循环同时走
                for (let dir of dires) {
                    let count = 0
                    for (let i = 0; i < 8; i++) {
                        (dir[i] !== cur[i]) && count++
                    }
                    // 走一步能到地点就记录
                    if (count == 1) {
                        if (dir === end) return path.get(cur) + 1
                        path.set(dir, path.get(cur) + 1)
                        // 来过就删除，以后不用来了
                        dires.delete(dir)
                    }
                }
            }
        }
    }
    // 只要没有走或者没有走到终点就返回-1
    return -1
}