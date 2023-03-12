function solution(answers) {
  const supoja1 = [1, 2, 3, 4, 5];
  const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supoja1[i % supoja1.length]) scores[0]++;
    if (answers[i] === supoja2[i % supoja2.length]) scores[1]++;
    if (answers[i] === supoja3[i % supoja3.length]) scores[2]++;
  }

  const maxScore = Math.max(...scores);
  const topScorers = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) topScorers.push(i + 1);
  }

  return topScorers.sort();
}





