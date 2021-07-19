// 해설

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((a) => Number(a));
// 1. 7 3을 공백 기준으로 잘라서 map으로 숫자로 변환해 배열로 넣어준다.

let answer = [];
let arr = [];
const K = input[1] - 1; // 2. k는 2이다.

for (let i = 0; i < input[0]; i++) {
  arr[i] = i + 1;
}
// 3. arr 배열은 [1,2,3,4,5,6,7] 이 된다.

for (let i = 0; i < input[0]; i++) {
  // 4. 그 다음 7번 돌리는 for문을 만들어서 3번째 원소를 제거하는 removed 변수를 만든다.
  removed = arr.splice(K, 1);
  answer.push(removed[0]);
  // 5. answer 배열에 뿌시한다.
  K = (K + input[1] - 1) % arr.length;
  // 6. 뿌시하면 k는 2씩 더해지는데(숫자 하나가 없으니) 더할 때마다 전체 개수로 나눈 나머지 값을 반환한다. 그래야 값이 계속 돌 테니까!
}

console.log("<" + answer.join(", ") + ">");
