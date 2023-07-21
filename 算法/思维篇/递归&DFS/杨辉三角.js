// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。rowIdex在[0,33]以内。

// 递归法
// var getRow = function(rowIndex) {
//     if(rowIndex==0) return [1]
//     if(rowIndex==1) return [1,1]
//     if(rowIndex>=2){
//         let arr=getRow(rowIndex-1),newarr=new Array(rowIndex+1)
//         newarr[0]=1,newarr[rowIndex]=1
//         for(let i=0;i<rowIndex-1;i++){
//             newarr[i+1]=arr[i]+arr[i+1]
//         }
//         return newarr
//     }
// };

// (a+b)^n展开式的系数就是杨辉三角第n行的每一项
// 此外，第n行的第m个数，就是C(n,m)组合数
// 数学结论法
var getRow = function(rowIndex) {
    const row = new Array(rowIndex + 1)
    row[0] = 1;
    for (let i = 1; i <= rowIndex; ++i) {
        // C(n,m)=C(n,m-1)*(n-(m-1))/m
        row[i] = row[i - 1] * (rowIndex - i + 1) / i;
    }
    return row;
};