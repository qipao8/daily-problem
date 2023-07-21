let edges = [[3, 4, 4], [2, 5, 6], [4, 7, 10], [9, 6, 5], [7, 4, 4], [6, 2, 10], [6, 8, 6], [7, 9, 4], [1, 5, 4], [1, 0, 4], [9, 7, 3], [7, 0, 5], [6, 5, 8], [1, 7, 6], [4, 0, 9], [5, 9, 1], [8, 7, 3], [1, 2, 6], [4, 1, 5], [5, 2, 4], [1, 9, 1], [7, 8, 10], [0, 4, 2], [7, 2, 8]]
let start = 6, end = 0, k = 1
let n = 3//节点个数，是否有用？


//求两节点中的最短路径（中间节点不超过k个）
//先找到起点节点，再找到起点节点的下一节点，注意这里的下一节点可能有多个！！！
//如果找到就将路径值相加，判断找到的节点是否为终点节点，是则将路径值放入数组保存，不是则继续找，直到超过k个节点也没找到就返回-1。

//图edges中的每一个元素就是一条边，即路径。

let arr = []//用于保存起点节点
edges.map((v, i) => {
    if (v[0] == start) {
        arr.push(v)
        edges.splice(i, 1)
    }
})
// console.log(arr, edges)
let road = []//用于保存路径
k++
while (k--) {
    for (let j = 0; j < arr.length; j++) {//遍历起点节点
        //判断是否到达
        if (arr[j][1] == end) {
            road.push(arr[j])
            arr.splice(j, 1)
            break
        } else {
            //找下一个节点
            
            for (let i = 0; i < edges.length; i++) {
                if (arr[j][1] == edges[i][0]) {
                    arr[j][1] = edges[i][1]
                    arr[j][2] += edges[i][2]
                    arr.push([arr[j][0],arr[j][1],arr[j][2]])
                    edges.splice(i,1)
                }
            }
            
        }
    }
    console.log(arr,edges)
}

let res = []
road.forEach(v => {
    res.push(v[2])
})

console.log(road)