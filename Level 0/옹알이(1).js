function solution(babbling) {
  let answer = 0;
  const ALLOWED_WORDS = ['aya', 'ye', 'woo', 'ma'];

  function buildAllCombos(words) {
    const res = [];
    const n = words.length;
    const used = Array(n).fill(false);

    function dfs(prefix) {
      if (prefix.length > 0) res.push(prefix);

      for (let i = 0; i < n; i++) {
        if (used[i]) continue;
        used[i] = true;
        dfs(prefix + words[i]);
        used[i] = false;
      }
    }

    dfs('');
    return res;
  }

  const combos = buildAllCombos(ALLOWED_WORDS);

  babbling.forEach(word => {
    if (combos.includes(word)) answer++;
  });

  return answer;
}
