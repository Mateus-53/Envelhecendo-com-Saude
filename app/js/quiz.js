// Pegando o indicador da questão atual
const currentQuestion = document.querySelector(".currentQuestion");

// Pegando todas as questões
const q1 = document.querySelector(".Q1");
const q2 = document.querySelector(".Q2");
const q3 = document.querySelector(".Q3");
const q4 = document.querySelector(".Q4");
const q5 = document.querySelector(".Q5");
const q6 = document.querySelector(".Q6");
const q7 = document.querySelector(".Q7");
const q8 = document.querySelector(".Q8");
const q9 = document.querySelector(".Q9");
const q10 = document.querySelector(".Q10");

// Pegando as respostas de cada questão
const answerQ1 = document.querySelectorAll(".r-q1");
const answerQ2 = document.querySelectorAll(".r-q2");
const answerQ3 = document.querySelectorAll(".r-q3");
const answerQ4 = document.querySelectorAll(".r-q4");
const answerQ5 = document.querySelectorAll(".r-q5");
const answerQ6 = document.querySelectorAll(".r-q6");
const answerQ7 = document.querySelectorAll(".r-q7");
const answerQ8 = document.querySelectorAll(".r-q8");
const answerQ9 = document.querySelectorAll(".r-q9");
const answerQ10 = document.querySelectorAll(".r-q10");

// Pegando os botões de próximo
const next1 = document.querySelector(".n1");
const next2 = document.querySelector(".n2");
const next3 = document.querySelector(".n3");
const next4 = document.querySelector(".n4");
const next5 = document.querySelector(".n5");
const next6 = document.querySelector(".n6");
const next7 = document.querySelector(".n7");
const next8 = document.querySelector(".n8");
const next9 = document.querySelector(".n9");

// Pegando o botão de finalizar
const finish = document.querySelector(".finish");

// Questões certas
let correctAnswers = 0;

// Função que verifica se tem uma resposta selecionada
const isAnyAnswerSelected = (answerElements) => {
  return Array.from(answerElements).some(input => input.checked);
};

// Função que passa de uma questão para outra
const moveToNextQuestion = (currentQuestionEl, nextQuestionEl) => {
  currentQuestionEl.classList.add("hide-box");
  nextQuestionEl.classList.remove("hide-box");
  
  const currentQuestionNum = parseInt(currentQuestion.innerHTML);
  currentQuestion.innerHTML = (currentQuestionNum + 1).toString();
}

// Eventos
next1.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ1)) {
    alert("Você precisa selecionar uma resposta para prosseguir!");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ1).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q1, q2);
});

next2.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ2)) {
    alert("Você precisa selecionar uma resposta para prosseguir");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ2).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q2, q3);
});

next3.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ3)) {
    alert("Você precisa selecionar uma resposta para prosseguir");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ3).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q3, q4);
});

next4.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ4)) {
    alert("Você precisa selecionar uma resposta para prosseguir");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ4).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q4, q5);
});

next5.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ5)) {
    alert("Você precisa selecionar uma resposta para prosseguir");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ5).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q5, q6);
});

next6.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ6)) {
    alert("Você precisa selecionar uma resposta para prosseguir");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ6).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q6, q7);
});

next7.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ7)) {
    alert("Você precisa selecionar uma resposta para prosseguir");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ7).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q7, q8);
});

next8.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ8)) {
    alert("Você precisa selecionar uma resposta para prosseguir");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ8).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q8, q9);
});

next9.addEventListener("click", () => {
  if (!isAnyAnswerSelected(answerQ9)) {
    alert("Você precisa selecionar uma resposta para prosseguir");
    return;
  }
  
  const selectedAnswer = Array.from(answerQ9).find(input => input.checked);
  if (selectedAnswer.classList.contains("correct")) {
    correctAnswers++;
  }
  
  moveToNextQuestion(q9, q10);
});