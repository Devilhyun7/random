
const guessInput = document.querySelector('#guessInput');
const checkBtn = document.querySelector('#checkBtn');
const resultText = document.querySelector('#resultText');

// 1 ~ 10 사이의 랜덤 숫자 생성
// * Math.random(): 0~1 사이의 소수 생성
// * Math.fllor(): 소숫점 버리고 정수로 만듦
const answer = Math.floor(Math.random() * 10) + 1;

checkBtn.addEventListener('click', () => {
  // input value는 기본적으로 String이므로 Number로 형 변환
  const userGuess = Number(guessInput.value);

  // ⭐ 예외 처리: 입력이 없거나 범위를 벗어난 경우(||: or)
  if(!userGuess || userGuess < 1 || userGuess > 10) {
      resultText.textContent = '1부터 10 사이의 숫자를 입력해주세요!';
      return;
  }

  if(userGuess === answer) {
      resultText.textContent = '🎉 정답입니다!';
  } else if(userGuess < answer) {
      resultText.textContent = '📈 더 큰 숫자예요!';
  } else {
      resultText.textContent = '📉 더 작은 숫자예요!';
  }

	// 입력값 초기화
  guessInput.value = '';
});