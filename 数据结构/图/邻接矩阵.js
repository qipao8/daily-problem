//用节点之间是否相连来表示
// arr[start,end]==1||0

let arr=[
    [0,1,1,1,0,0,0,0,0],
    [1,0,0,0,1,1,0,0,0],
    [1,0,0,1,0,0,1,0,0],
    [1,0,1,0,0,0,1,1,0],
    [0,1,0,0,0,0,0,0,1],
    [0,1,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0],
]
//不是强连通的图（稀疏图）如果用邻接矩阵来表示，则矩阵中将会有很多0，这意味着我们浪费了计算机存储空间来表示根本不存在的边。