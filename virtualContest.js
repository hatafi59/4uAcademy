 // Votre code JavaScript va ici
 let currentQuestion = 1;
 let answers = {};
 let isAnswerRevealed = false;
 let contestStarted = false;
 let contestEnded = false;
 let timerInterval;
 let timeRemaining = 360;//en secondes

 let startTime;
 let endTime;

 let totalQuestionsAnswered = 0;//total answered questions

 const questions = {
     1: {
         text: "In how many phases an execution context is created?",
         options: [2, 3, 4, 1],
         correct: 2
     },
     2: {
         text: "What is the result of 'typeof null' in JavaScript?",
         options: ["null", "undefined", "object", "boolean"],
         correct: "object"
     },
     3: {
         text: "Which method is used to add elements to the end of an array?",
         options: ["push()", "pop()", "shift()", "unshift()"],
         correct: "push()"
     },
     4: {
         text: "What does 'this' refer to in JavaScript?",
         options: ["The current function", "The global object", "The calling object", "Depends on context"],
         correct: "Depends on context"
     },
     5: {
         text: "Which of the following is NOT a primitive data type in JavaScript?",
         options: ["string", "number", "array", "boolean"],
         correct: "array"
     },
     6: {
         text: "What is the output of console.log(0.1 + 0.2 === 0.3)?",
         options: ["true", "false", "undefined", "NaN"],
         correct: "false"
     },
     7: {
         text: "Which keyword is used to declare a constant in JavaScript?",
         options: ["var", "let", "const", "final"],
         correct: "const"
     },
     8: {
         text: "What is the correct way to check if a variable is an array?",
         options: ["typeof arr === 'array'", "arr instanceof Array", "Array.isArray(arr)", "arr.constructor === Array"],
         correct: "Array.isArray(arr)"
     },
     9: {
         text: "Which method is used to remove the last element from an array?",
         options: ["pop()", "push()", "shift()", "slice()"],
         correct: "pop()"
     },
     10: {
         text: "What is the result of '5' + 3 in JavaScript?",
         options: ["8", "53", "TypeError", "NaN"],
         correct: "53"
     },
     11: {
         text: "Which operator is used for strict equality comparison?",
         options: ["==", "===", "!=", "!=="],
         correct: "==="
     },
     12: {
         text: "What is the scope of a variable declared with 'let'?",
         options: ["Global", "Function", "Block", "Module"],
         correct: "Block"
     },
     13: {
         text: "Which method is used to convert a string to lowercase?",
         options: ["toLowerCase()", "toLower()", "lower()", "downCase()"],
         correct: "toLowerCase()"
     },
     14: {
         text: "What is the result of Boolean('false')?",
         options: ["true", "false", "undefined", "null"],
         correct: "true"
     },
     15: {
         text: "Which method is used to join array elements into a string?",
         options: ["join()", "concat()", "merge()", "combine()"],
         correct: "join()"
     },
     16: {
         text: "What is the default value of an uninitialized variable?",
         options: ["null", "undefined", "0", "''"],
         correct: "undefined"
     },
     17: {
         text: "Which event is fired when the DOM is fully loaded?",
         options: ["onload", "DOMContentLoaded", "ready", "domready"],
         correct: "DOMContentLoaded"
     },
     18: {
         text: "What is the result of parseInt('123abc')?",
         options: ["123", "NaN", "123abc", "undefined"],
         correct: "123"
     },
     19: {
         text: "Which method is used to add elements to the beginning of an array?",
         options: ["unshift()", "shift()", "push()", "pop()"],
         correct: "unshift()"
     },
     20: {
         text: "What is the purpose of the 'use strict' directive?",
         options: ["Enable strict mode", "Disable errors", "Improve performance", "All of the above"],
         correct: "Enable strict mode"
     }
 };


 // Initialize the page
 document.addEventListener('DOMContentLoaded', function () {
    // Désactiver l'interface au début
    document.querySelector('.contest-container').classList.add('contest-disabled');

    // Afficher le modal de confirmation
    document.getElementById('startModal').style.display = 'flex';

    loadQuestion();
    updateNavButtons();
    updateQuestionStatus();
});

// ------------------------start

 function selectOption(optionElement, value) {
     if (!contestStarted || contestEnded) {
         alert('Le contest n\'a pas encore commencé ou est terminé.');
         return;
     }

     // Remove selection from all options
     document.querySelectorAll('.option').forEach(opt => {
         opt.classList.remove('selected');
         opt.querySelector('input').checked = false;
     });

     // Select the clicked option
     optionElement.classList.add('selected');
     optionElement.querySelector('input').checked = true;

     // Store the answer
     answers[currentQuestion] = value;

     // Update question status
     updateQuestionStatus();
 }

 function updateQuestionStatus() {
     const questionNumbers = document.querySelectorAll('.question-number');
     let answeredCount = 0;
     if(!questionNumbers || questionNumbers.length === 0) {
         console.error('No question numbers found in the DOM.');
         return;
     }
     // Update question numbers
     questionNumbers.forEach((num, index) => {
         const questionNum = index + 1;
         if (answers[questionNum] !== undefined) {
             num.classList.add('answered');
             answeredCount++;
         } else {
             num.classList.remove('answered');
         }

         // Update active state
         if (questionNum === currentQuestion) {
             num.classList.add('active');
         } else {
             num.classList.remove('active');
         }
     });

     // Update stats
     document.getElementById('answeredCount').textContent = answeredCount;
     document.getElementById('unansweredCount').textContent = 20 - answeredCount;
 }

 function goToQuestion(questionNum) {
     if (!contestStarted || contestEnded) {
         alert('Le contest n\'a pas encore commencé ou est terminé.');
         return;
     }

     currentQuestion = questionNum;
     loadQuestion();
     updateNavButtons();
     updateQuestionStatus();
 }

 function loadQuestion() {
     const question = questions[currentQuestion];
     if (!question) {
         document.getElementById('questionTitle').textContent = `QUESTION ${currentQuestion}`;
         document.getElementById('questionText').textContent = `This is sample question ${currentQuestion}. What is the correct answer?`;

         const optionsContainer = document.getElementById('optionsContainer');
         optionsContainer.innerHTML = `
             <div class="option" onclick="selectOption(this, 'A')">
                 <input type="radio" name="answer" value="A">
                 <span class="option-text">Option A</span>
             </div>
             <div class="option" onclick="selectOption(this, 'B')">
                 <input type="radio" name="answer" value="B">
                 <span class="option-text">Option B</span>
             </div>
             <div class="option" onclick="selectOption(this, 'C')">
                 <input type="radio" name="answer" value="C">
                 <span class="option-text">Option C</span>
             </div>
             <div class="option" onclick="selectOption(this, 'D')">
                 <input type="radio" name="answer" value="D">
                 <span class="option-text">Option D</span>
             </div>
         `;
     } else {
         document.getElementById('questionTitle').textContent = `QUESTION ${currentQuestion}`;
         document.getElementById('questionText').textContent = question.text;

         const optionsContainer = document.getElementById('optionsContainer');
         optionsContainer.innerHTML = '';

         question.options.forEach(option => {
             const optionDiv = document.createElement('div');
             optionDiv.className = 'option';
             optionDiv.onclick = () => selectOption(optionDiv, option);

             optionDiv.innerHTML = `
                 <input type="radio" name="answer" value="${option}">
                 <span class="option-text">${option}</span>
             `;

             optionsContainer.appendChild(optionDiv);
         });
     }

     // Restore selected answer if exists
     if (answers[currentQuestion] !== undefined) {
         const selectedValue = answers[currentQuestion];
         const options = document.querySelectorAll('.option');
         options.forEach(opt => {
             const input = opt.querySelector('input');
             if (input.value == selectedValue) {
                 opt.classList.add('selected');
                 input.checked = true;
             }
         });
     }
 }

 function updateNavButtons() {
     const prevBtn = document.getElementById('prevBtn');
     const nextBtn = document.getElementById('nextBtn');

     if (currentQuestion === 1) {
         prevBtn.classList.add('disabled');
     } else {
         prevBtn.classList.remove('disabled');
     }

     if (currentQuestion === 20) {
         nextBtn.classList.add('disabled');
     } else {
         nextBtn.classList.remove('disabled');
     }
 }

 function previousQuestion() {
     if (currentQuestion > 1) {
         goToQuestion(currentQuestion - 1);
     }
 }

 function nextQuestion() {
     if (currentQuestion < 20) {
         goToQuestion(currentQuestion + 1);
     }
 }

 function submitAnswer() {
     if (!contestStarted || contestEnded) {
         alert('Le contest n\'a pas encore commencé ou est terminé.');
         return;
     }

     const selectedOption = document.querySelector('.option.selected');
     if (!selectedOption) {
         alert('Veuillez sélectionner une réponse avant de soumettre.');
         return;
     }

     const answeredCount = Object.keys(answers).length;

     if (answeredCount === 20) {
         if (confirm('🎯 Vous avez répondu à toutes les questions !\n\nVoulez-vous terminer le contest maintenant ?')) {
             endContestWithResults();
         }
     } else {
         if (currentQuestion < 20) {
             nextQuestion();
         }
     }
 }

 function stopContest() {
     if (!contestStarted || contestEnded) {
         alert('Le contest n\'a pas encore commencé ou est déjà terminé.');
         return;
     }

     const answeredCount = Object.keys(answers).length;

     if (confirm(`⚠️ Confirmation d'arrêt du contest\n\nÊtes-vous sûr de vouloir arrêter le contest ?\n\nQuestions répondues: ${answeredCount}/20\n\nVotre progression sera perdue si vous continuez.`)) {
        document.getElementById('timerContainer').classList.remove('time-critical');
         endContestWithResults(true);
     }
 }

 function endContestWithResults(isStopped = false) {
     contestEnded = true;
     endTime = new Date();
     clearInterval(timerInterval);

     const totalAnswered = Object.keys(answers).length;
     const totalQuestions = 20;
     const score = calculateScore();
     const duration = Math.floor((endTime - startTime) / 1000);
     const durationFormatted = formatDuration(duration);

     const endReason = isStopped ? 'Contest arrêté par l\'utilisateur' : 'Contest terminé';
     const percentage = Math.round(((score.correct-score.wrong) / totalQuestions) * 100);

     const resultsText = `
            ${endReason}<br>
         Questions répondues: ${totalAnswered}/${totalQuestions}<br>
        Questions non répondues: ${totalQuestions - totalAnswered}<br>
         Bonnes réponses: ${score.correct}<br>
         Mauvaises réponses: ${score.wrong}<br>
         Pourcentage: ${percentage}%<br>
         Durée du concours: ${durationFormatted}
     `;

     document.getElementById('finalResults').innerHTML = resultsText;
     document.getElementById('endModal').style.display = 'flex';
     document.querySelector('.contest-container').classList.add('contest-disabled');

 }



//  ----------------------------------------start
 function startContest() {
     contestStarted = true;
     startTime = new Date();
     document.getElementById('startModal').style.display = 'none';
     document.querySelector('.contest-container').classList.remove('contest-disabled');
     startTimer();
 }
// ------------------------fin
// ------------------------start
 function cancelContest() {
     if (confirm('Êtes-vous sûr de vouloir annuler le contest ?')) {
         window.location.href= 'virtualContest.html'; // Rediriger vers la page d'accueil du contest
     }
 }
// -------------fin
// --------------start
 function startTimer() {
     updateTimerDisplay();

     timerInterval = setInterval(() => {
         timeRemaining--;
         updateTimerDisplay();

         if (timeRemaining === 5 * 60) {
             alert('⚠️ Attention : Il ne reste que 5 minutes !');
             document.getElementById('timerContainer').classList.add('time-warning');
         }

         if (timeRemaining === 1 * 60) {
             alert('🚨 Attention : Il ne reste qu\'1 minute !');
             document.getElementById('timerContainer').classList.remove('time-warning');
             document.getElementById('timerContainer').classList.add('time-critical');
         }

         if (timeRemaining <= 0) {
             endContest();
             document.getElementById('timerContainer').classList.remove('time-critical');

         }
     }, 1000);
 }

 function updateTimerDisplay() {
     const hours = Math.floor(timeRemaining / 3600);
     const minutes = Math.floor((timeRemaining % 3600) / 60);
     const seconds = timeRemaining % 60;

     const display = `${hours.toString().padStart(2, '0')}:` +
                     `${minutes.toString().padStart(2, '0')}:` +
                     `${seconds.toString().padStart(2, '0')}`;

     document.getElementById('timerDisplay').textContent = display;
 }

 function endContest() {
    endContestWithResults();
}

// --------------------fin





 function calculateScore() {
     let correct = 0;
     let wrong = 0;

     Object.keys(answers).forEach(questionNum => {
         const question = questions[questionNum];
         if (question && answers[questionNum] === question.correct) {
             correct++;
         } else if (question) {
             wrong++;
         }
     });

     return { correct, wrong };
 }

 function formatDuration(seconds) {
     const hours = Math.floor(seconds / 3600);
     const minutes = Math.floor((seconds % 3600) / 60);
     const secs = seconds % 60;
     return `${hours.toString().padStart(2, '0')}h ` +
            `${minutes.toString().padStart(2, '0')}m ` +
            `${secs.toString().padStart(2, '0')}s`;
 }

 function closeContest() {
    document.getElementById('endModal').style.display = 'none';
    showDetailedResults();
    setTimeout(() => {
        restartContest();
    },2000);
 }

 function restartContest() {
         window.location.reload();
     
 }


// ------------------start
function showDetailedResults() {
    let resultsHtml = '<h3>Résultats détaillés du Contest JavaScript:</h3><br>';

    const score = calculateScore();
    const totalAnswered = Object.keys(answers).length;
    const percentage = Math.round((score.correct / 20) * 100);
    const timeUsed = formatDuration(Math.floor((endTime - startTime) / 1000));

    resultsHtml += `
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <strong>📈 Résumé global:</strong><br>
            Questions correctes: ${score.correct} points<br>
            Questions incorrectes: ${score.wrong} points<br>
            Temps total: ${timeUsed}<br>
            Pourcentage de réussite: ${percentage}%<br>
            Questions répondues: ${totalAnswered}/20<br>
        </div>
    `;

    for (let i = 1; i <= 20; i++) {
        const question = questions[i];
        const userAnswer = answers[i];

        if (question && userAnswer !== undefined) {
            const isCorrect = userAnswer === question.correct;
            const status = isCorrect ? '✅ Correct' : '❌ Incorrect';
            const points = isCorrect ? '+1' : '-1';

            resultsHtml += `
                <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 5px;">
                    <strong>Question ${i}:</strong> ${status} (${points} points)<br>
                    <em>${question.text}</em><br>
                    Votre réponse: <strong>${userAnswer}</strong><br>
                    Bonne réponse: <strong style="color: #4CAF50;">${question.correct}</strong>
                </div>
            `;
        } else {
            resultsHtml += `
                <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 5px; background-color: #fff3cd;">
                    <strong>Question ${i}:</strong> ❌ Non répondue (0 points)<br>
                </div>
            `;
        }
    }

    // Créer un conteneur en mémoire (pas dans le DOM)
    const container = document.createElement('div');
    container.innerHTML = resultsHtml;

    // Générer et télécharger le PDF
    html2pdf()
        .set({
            margin: 10,
            filename: 'resultats_contest.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(container)
        .save();
}

// -----------------------fin
 