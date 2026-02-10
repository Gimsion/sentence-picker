alert("마음에 드는 문장을 만나길 🍵");

const sentences = [
  "상대방이 “나와 다른 마음일 수도 있다는 것을 잊지 않”는 그의 문장을 잊지 않고 싶다. 그 가능성을 겸허히 받아들이는 사람만이 다음 문제도 성숙하게 해결할 수 있을 것이다.(<부지런한 사랑> 中, 68p)",
  "우리는 남에게 관심을 가지면서 어휘를 늘려가는 존재들이다. (<부지런한 사랑> 中, 77p)",
  "남다른 호기심이 가득한 사람들은 땅에서 발을 뗀 채로 세계를 유영하듯 살곤 하잖아. (<부지런한 사랑> 中, 84p)",
  "오늘의 문장이 내일의 나를 만든다."
];

function pickSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  document.getElementById("result").innerText = sentences[randomIndex];
}

function pickSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const result = document.getElementById("result");

  result.classList.remove("fade"); // 초기화
  void result.offsetWidth;         // 애니메이션 리셋 트릭
  result.innerText = sentences[randomIndex];
  result.classList.add("fade");
}


