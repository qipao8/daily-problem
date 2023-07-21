/*
240. 搜索二维矩阵 II
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

例1：
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true

例2:
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 自己写的二分查找
var searchMatrix = function (matrix, target) {
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][0]==target) return true
        if(matrix[i][0]<target){
            if(indexof(matrix[i],target)!=-1) return true
        }
    }
    return false
};

var indexof = (arr, target) => {
    let l = 0, r = arr.length
    while (l < r) {
        let d = (l + r) >> 1
        if (arr[d] == target) return d
        if (arr[d] < target) l = d + 1
        else r = d
    }
    return -1
}

// 常数时间复杂度解法
// 通过观察数组，可以选取右上角和左下角元素为起点，开始对比查找。类似树结构
var searchMatrix = function (matrix, target) {
    let col = matrix[0].length - 1, row = 0
    while (1) {
        if (matrix[row][col] == target) return true
        else if (matrix[row][col] < target) row++
        else col--
        if(col==-1||row==matrix.length) return false
    }
};
