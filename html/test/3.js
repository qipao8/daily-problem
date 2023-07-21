function minimumSwaps(arr) {
  var counter = 0;
  for (var i = arr.length; i > 0; i--) {
    var minval = Math.min(...arr);
    console.log("before", arr);
    var minIndex = arr.indexOf(minval);
    if (minval !== arr[0]) {
      var temp = arr[0];
      arr[0] = arr[minIndex];
      arr[minIndex] = temp;
      console.log("after", arr);
      arr.splice(0, 1);
      counter++;
    } else {
      arr.splice(0, 1);
      console.log("in else case");
    }
  }
  return counter;
}
