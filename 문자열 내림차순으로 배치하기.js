function solution(s) {
let ss = [];
let sss = '';
for (let i = 0; i < s.length; i++ ){
    ss.push(s[i]);
}
ss.reverse();
for (let ii = 0; ii < ss.length; ii++){
    sss = sss + String(ss[ii]);
}
return sss;
}