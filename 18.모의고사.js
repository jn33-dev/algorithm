// https://school.programmers.co.kr/learn/courses/30/lessons/42840

/**
[pseudo code]
1. answers를 string으로 변환
2. 각 수포자의 점수 찍는 방식을 중첩 어레이로 받아오고,
2. 입력받은 정답의 길이와 비교해서 패턴을 repeat으로 늘려줌
3. 수포자별 정답을 비교하는 재귀 함수생성, parameter 값으로 pattern 배열의 인덱스를 받아 올 것 
    - for loop로 학생별 맞힌 개수를 scores 변수에 담아줄 것
    - loop를 탈출하면 parameter 값을 올려줌
    - parameter 값이 2보다 작거나 같으면 재귀(num) 호출, 아니면 scores 배열을 반환
3. 세 명이 모두 동점이면, answer = [1,2,3]을 반환
4. 아닌 경우에는
    score 배열에서 max 값을 찾아 forEach() 함수로 max 값과 일치하는 요소의 index+1을 answer 배열에 push
5. return answer
    
 */

function solution(answers) {
  answers = answers.join("");
  patterns = ["12345", "21232425", "3311224455"];
  let scores = [0, 0, 0];
  let answer = [];

  // 수포자의 정답 패턴을 문제 길이에 맞춰 늘려주기
  for (let i = 0; i < 3; i++) {
    let num = answers.length / patterns[i].length;
    if (num >= 0) {
      patterns[i] = patterns[i].repeat(num === 1 ? 1 : Math.floor(num) + 1);
    }
  }

  // 채점 함수
  function checkAns(num) {
    for (let i = 0; i < answers.length; i++) {
      answers[i] === patterns[num][i] ? scores[num]++ : num;
    }
    num++;
    return num <= 2 ? checkAns(num) : scores;
  }
  checkAns(0);

  // 채점 값을 배열의 최고값과 비교해 answer array에 정답자 push
  scores.forEach((e, i) =>
    e === Math.max(...scores) ? answer.push(i + 1) : answer
  );
  return answer;
}

console.log(solution[(1, 2, 3, 4, 5)]);
console.log(solution[(1, 3, 2, 4, 2)]);
