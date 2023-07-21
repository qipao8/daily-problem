const arr = [1, 9, 5, 7, 4, 8, 6, 3, 2, 0, 1, 4, 7, 8, 5, 2, 9, 6, 3]
//选择出最大或最小的元素，进行替换排序
let selection_sort = (arr) => {
    const len = arr.length
    for (var i = 0; i < len - 1; i++) {
        var min = i
        for (var j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr
}

console.log(selection_sort(arr))