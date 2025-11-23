const questions = [
  { q: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: 3 },
  { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style System", "Colorful Style Setup", "Coding Style Sheet"], answer: 0 },
  { q: "KING of cricket?", options: ["Babar Azam", "Virat Kohli", "Brian Lara", "S.Watson"], answer: 0 },
  { q: "What is the capital of Pakistan?", options: ["Karachi", "Lahore", "Islamabad", "Hyderabad"], answer: 2 },
  { q: "Best fictional character?", options: ["Batman", "Superman", "Spiderman", "Wonder Woman"], answer: 0 },
  { q: "GOAT of football?", options: ["Ibrahimovic", "Neymar Jr", "L.Messi", "C.Ronaldo"], answer: 3 },
  { q: "Which symbol is used for comments in JavaScript?", options: ["--", "//", "#", "**"], answer: 1 }
];

function startQuiz() {
  document.getElementById('startBox').style.display = 'none';
  alert("Answers to some questions are totally based on my personal opinion, no offense intented!");
  loadQuiz();
  document.getElementById('quizBox').style.display = 'block';
}

function loadQuiz() {
  const quizBox = document.getElementById('quizBox');
  quizBox.innerHTML = '<h2>Answer All Questions</h2>';

  for (let i = 0; i < questions.length; i++) {
    let q = questions[i];
    let block = `<div class='question'><p>${i + 1}. ${q.q}</p>`;

    for (let j = 0; j < q.options.length; j++) {
      block += `<label><input type='radio' name='q${i}' value='${j}'> ${q.options[j]}</label><br>`;
    }

    block += '</div>';
    quizBox.innerHTML += block;
  }

  quizBox.innerHTML += `<button onclick=\"finishQuiz()\">Finish Quiz</button>`;
}

function finishQuiz() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name='q${i}']:checked`);

    if (!selected) {
      alert("Please answer all questions before finishing.");
      return;
    }

    if (parseInt(selected.value) === questions[i].answer) score++;
  }

  document.getElementById('quizBox').style.display = 'none';
  document.getElementById('resultBox').style.display = 'flex';
  document.getElementById('scoreText').innerText = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
  document.getElementById('resultBox').style.display = 'none';
  loadQuiz();
  document.getElementById('quizBox').style.display = 'block';
}
