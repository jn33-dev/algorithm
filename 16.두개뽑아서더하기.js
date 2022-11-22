/**
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
입출력 예
numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
 */

/**
[pseudo code]
1. pointer=0
2. 배열을 돌면서 (i=pointer+1 부터) 더한 값을 answer 배열에 push
3. 이때, 더한 값이 answer 배열에 있는지 확인 한 후 없으면 push
4. sort해줌
 */

function solution(numbers) {
  const answer = [];
  function sum(pointer) {
    for (let i = pointer + 1; i < numbers.length; i++) {
      const sum = numbers[pointer] + numbers[i];
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
    console.log(pointer, answer);
    pointer++;
    return pointer == numbers.length - 1
      ? answer.sort((a, b) => a - b)
      : sum(pointer);
  }
  sum(0);
  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));

// Set 사용
function solution(numbers) {
  const temp = [];
  let answer = [];
  function sum(pointer) {
    for (let i = pointer + 1; i < numbers.length; i++) {
      temp.push(numbers[pointer] + numbers[i]);
    }
    pointer++;
    return pointer == numbers.length - 1
      ? (answer = [...new Set(temp)].sort((a, b) => a - b))
      : sum(pointer);
  }
  sum(0);
  return answer;
}
