// https://school.programmers.co.kr/learn/courses/30/lessons/12926

/**
[pseudo code]
1. a~z를 list로 만들기
    list 만들 때, 2배로 만들기
2. 입력받은 s의 각 자리수를 돌면서 ref.indexOf(s[i])를 찾아 n만큼 더한 index 값을 넣어 s를 replace
*/

function solution(s, n) {
  let answer = "";
  ref = "a b c d e f g h i j k l m n o p q r s t u v w x y z "
    .repeat(2)
    .trim()
    .split(" ");

  for (let i = 0; i < s.length; i++) {
    if (ref.includes(s[i])) {
      answer += ref[ref.indexOf(s[i]) + n];
    } else if (ref.includes(s[i].toLowerCase())) {
      const w = s[i].toLowerCase();
      answer += ref[ref.indexOf(w) + n].toUpperCase();
    } else if (s[i] == " ") {
      answer += " ";
    }
  }
  return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
