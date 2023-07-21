var maxPalindromes = function (s, k) {
  let res = 0;
  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      f[i][j] = s[i] === s[j] && f[i + 1][j - 1];
    }
  }
  let len = 0;
  for (let i = 0; i < n; ) {
    inner: for (let j = i + k - 1; j < n; j++) {
      if (f[i][j]) {
        res++;
        len = j - i + 1;
        break inner;
      }
    }
    i += len || 1;
    len = 0;
  }
  return res;
};
console.log(maxPalindromes("abaccdbbd", 3));
