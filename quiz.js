
const timerDuration = 300;
let timeRemaining = timerDuration;

const timer = setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = `Time Remaining: ${minutes}:${seconds}`;
    
    timeRemaining--;

    if (timeRemaining < 0) {
        clearInterval(timer);
        calculateScore();
    }
}

function calculateScore() {
   const questions = document.querySelectorAll('.question');
   let score = 0;

   const correctAnswers = [
       ["C"], 
       ["C"], 
       ["C"],
       ["B"],
       ["C"],
       ["C"], 
       ["C"],
       ["C"],
       ["B"],
       ["C"],
   ];

   questions.forEach((question, index) => {
       const radioButtons = question.querySelectorAll('input[type="radio"]');
       const userAnswers = [];

       radioButtons.forEach(radioButton => {
           if (radioButton.checked) {
               userAnswers.push(radioButton.value);
           }
       });

       const correctAnswer = correctAnswers[index];
       if (arraysEqual(userAnswers, correctAnswer)) {
           score++;
       }
   });

   const resultMessage = `Your Score: ${score} / ${questions.length}`;
   alert(resultMessage);
}

function arraysEqual(arr1, arr2) {
   if (arr1.length !== arr2.length) return false;
   for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== arr2[i]) return false;
   }
   return true;
}