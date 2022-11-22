// https://school.programmers.co.kr/learn/courses/30/lessons/81301

/**
[pseudo code]
1. {num : 숫자, str: "number"} obj 리스트 생성
2. obj 리스트를 돌면서 s가 obj[i].str을 가지고 있으면, replaceAll을 사용해서 바꿔주기
3. parseInt(s)
 */

function solution(s) {
  const obj = [
    { num: 0, str: "zero" },
    { num: 1, str: "one" },
    { num: 2, str: "two" },
    { num: 3, str: "three" },
    { num: 4, str: "four" },
    { num: 5, str: "five" },
    { num: 6, str: "six" },
    { num: 7, str: "seven" },
    { num: 8, str: "eight" },
    { num: 9, str: "nine" },
  ];

  for (let i = 0; i < obj.length; i++) {
    if (s.includes(obj[i].str)) {
      s = s.replaceAll(obj[i].str, obj[i].num);
    }
  }
  return parseInt(s);
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
console.log(solution("12345678901234567890123456789012345678901234567890"));

// str 배열만 사용해서 푼 인상적인 답안
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
