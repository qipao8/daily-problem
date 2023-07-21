var findLadders = function (beginWord, endWord, wordList) {
  let dires = new Set(wordList);
  if (!dires.has(endWord)) return [];
  const dirlen = beginWord.length;
  const levelMap = new Map([[beginWord, 0]]),
    visited = new Set([beginWord]);
  // BFS:找出每个层能到达的位置
  const nodeTodirs = new Map();
  dires.add(beginWord);
  let path = [beginWord],
    isHasPath = false,
    level = 0,
    maxLevel = 0;
  while (path.length) {
    const levelSize = path.length;
    level++;
    for (let i = 0; i < levelSize; i++) {
      const curSelect = path.pop();
      nodeTodirs.set(curSelect, new Set());
      for (let i = 0; i < dirlen; i++) {
        for (let c = 97; c <= 122; c++) {
          const newSelect =
            curSelect.slice(0, i) +
            String.fromCharCode(c) +
            curSelect.slice(i + 1);
          if (!dires.has(newSelect)) continue;
          nodeTodirs.get(curSelect).add(newSelect);
          if (visited.has(newSelect)) continue;
          levelMap.set(newSelect, level);
          path.push(newSelect);
          visited.add(newSelect);
          if (newSelect === endWord) isHasPath = true;
        }
      }
    }
    if (path.length === 0) maxLevel = level;
  }
  if (!isHasPath) return [];

  // 从终点和起点同时开始出发，起点push,终点unshift
  // const sPath = [beginWord],
  //   ePath = [endWord],
  //   start = beginWord,
  //   end = endWord;
  // const ans = [];
  // level = 0;
  // const dfs = (start, end, sPath, ePath) => {
  //   let flag = nodeTodirs.get(start).length <= nodeTodirs.get(end).length;
  //   const nextPath = flag
  //     ? [...nodeTodirs.get(start)].filter(
  //         (v) => levelMap.get(v) === levelMap.get(start) + 1
  //       )
  //     : [...nodeTodirs.get(end)].filter(
  //         (v) => levelMap.get(v) === levelMap.get(end) - 1
  //       );
  //   for (let nextDir of nextPath) {
  //     if (
  //       (flag && ePath.includes(nextDir)) ||
  //       (!flag && sPath.includes(nextDir))
  //     ) {
  //       ans.push([...sPath, ...ePath]);
  //       return;
  //     } else {
  //       if (flag) {
  //         if (!sPath.includes(nextDir)) {
  //           sPath.push(nextDir);
  //           dfs(nextDir, end, sPath, ePath);
  //           sPath.pop();
  //         }
  //       } else {
  //         if (!ePath.includes(nextDir)) {
  //           ePath.unshift(nextDir);
  //           dfs(nextDir, end, sPath, ePath);
  //           ePath.shift();
  //         }
  //       }
  //     }
  //   }
  // };
  // dfs(start, end, sPath, ePath);
  // return ans;
  const res = [];
  const dfs = (path, beginWord, word) => {
    if (word == beginWord) {          // 当前遍历的word，和起始词相同
      res.push([beginWord, ...path]); // 将当前路径推入res数组，加上起始词
      return;                        
    }
    path.unshift(word);        // 将当前单词加入到path数组的开头
    if (nodeTodirs.get(word)) {   // 当前单词有对应的“父单词”们
      for (const parent of nodeTodirs.get(word)) { // 遍历“父单词”们
        if (levelMap.get(parent) + 1 == levelMap.get(word)) { // 满足要求的
          dfs(path, beginWord, parent);                       // 递归dfs
        }
      }
    }
    path.shift(); // 回溯，撤销选择，将path数组开头的单词弹出
  }
  dfs([], beginWord, endWord); // dfs的入口
  return res
};

console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
