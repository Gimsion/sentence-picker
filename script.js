const sentences = [
  "문장은 사람을 살린다.",
  "기록은 기억보다 오래 남는다.",
  "쓰는 사람은 쉽게 무너지지 않는다.",
  "오늘의 문장이 내일의 나를 만든다."
];

function pickSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  document.getElementById("result").innerText = sentences[randomIndex];
}

