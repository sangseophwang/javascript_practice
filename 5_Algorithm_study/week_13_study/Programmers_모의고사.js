function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let result = [0, 0, 0];
  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) result[0]++;
    if (answers[i] === second[i % 8]) result[1]++;
    if (answers[i] === third[i % 10]) result[2]++;
  }
  const maxValue = Math.max(...result);
  let index = 0;
  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer[index] = i + 1;
      index++;
    }
  }
  return answer;
}
