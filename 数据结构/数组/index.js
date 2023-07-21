// 求一个数组所有的至少有三个元素的子数组
// let nums=[1,2,3,4]
// let f=(nums)=>{
//     let n=3
//     nums.forEach((i,v)=>{

//     })
// }
/**
 * 求：组合C(m, n)，m为上标，n为下标。m选n的所有项
 * m {必传} 原始数据
 * n {必传} 当前项还需元素的个数
 * currentIndex 当前索引
 * choseArr 当前项的部分元素集合（不是完整项，是生成完整项的一个中间状态）
 * result 所有项的结果结合
 */
 function cmn(m, n, currentIndex = 0, choseArr = [], result = []) {
	let mLen = m.length
		// 可选数量小于项所需元素的个数，则递归终止
	if (currentIndex + n > mLen) {
		return
	}
	for (let i = currentIndex; i < mLen; i++) {
		// n === 1的时候，说明choseArr在添加一个元素，就能生成一个新的完整项了。
		// debugger
		if (n === 1) {
			// 再增加一个元素就能生成一个完整项，再加入到结果集合中
			result.push([...choseArr, m[i]])
			// 继续下一个元素生成一个新的完整项
			i + 1 < mLen && cmn(m, n, i + 1, choseArr, result)
			break
		}
		// 执行到这，说明n > 2，choseArr还需要两个以上的元素，才能生成一个新的完整项。则递归，往choseArr添加元素
		cmn(m, n - 1, i + 1, [...choseArr, m[i]], result)
	}
	return result
}

// test 测试用例
var arr1 = [2,4,6,8,10]
console.log('arr1111', cmn(arr1, 3))


