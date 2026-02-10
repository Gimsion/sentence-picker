alert("마음에 드는 문장을 만나길 🍵");

const sentences = [
  '상대방이 “나와 다른 마음일 수도 있다는 것을 잊지 않”는 그의 문장을 잊지 않고 싶다. 그 가능성을 겸허히 받아들이는 사람만이 다음 문제도 성숙하게 해결할 수 있을 것이다.<br><부지런한 사랑>, 이슬아 68p 中',
  "우리는 남에게 관심을 가지면서 어휘를 늘려가는 존재들이다.<br><부지런한 사랑>, 이슬아 77p 中"",
  "남다른 호기심이 가득한 사람들은 땅에서 발을 뗀 채로 세계를 유영하듯 살곤 하잖아.<br><부지런한 사랑>, 이슬아 84p 中"",
];

function pickSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const result = document.getElementById("result");

  result.classList.remove("fade");
  void result.offsetWidth;
  result.innerHTML = sentences[randomIndex]; // innerHTML 사용
  result.classList.add("fade");
}








