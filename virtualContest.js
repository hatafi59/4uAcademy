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

//  const questions = {
//      1: {
//          text: "In how many phases an execution context is created?",
//          options: [2, 3, 4, 1],
//          correct: 2
//      },
//      2: {
//          text: "What is the result of 'typeof null' in JavaScript?",
//          options: ["null", "undefined", "object", "boolean"],
//          correct: "object"
//      },
//      3: {
//          text: "Which method is used to add elements to the end of an array?",
//          options: ["push()", "pop()", "shift()", "unshift()"],
//          correct: "push()"
//      },
//      4: {
//          text: "What does 'this' refer to in JavaScript?",
//          options: ["The current function", "The global object", "The calling object", "Depends on context"],
//          correct: "Depends on context"
//      },
//      5: {
//          text: "Which of the following is NOT a primitive data type in JavaScript?",
//          options: ["string", "number", "array", "boolean"],
//          correct: "array"
//      },
//      6: {
//          text: "What is the output of console.log(0.1 + 0.2 === 0.3)?",
//          options: ["true", "false", "undefined", "NaN"],
//          correct: "false"
//      },
//      7: {
//          text: "Which keyword is used to declare a constant in JavaScript?",
//          options: ["var", "let", "const", "final"],
//          correct: "const"
//      },
//      8: {
//          text: "What is the correct way to check if a variable is an array?",
//          options: ["typeof arr === 'array'", "arr instanceof Array", "Array.isArray(arr)", "arr.constructor === Array"],
//          correct: "Array.isArray(arr)"
//      },
//      9: {
//          text: "Which method is used to remove the last element from an array?",
//          options: ["pop()", "push()", "shift()", "slice()"],
//          correct: "pop()"
//      },
//      10: {
//          text: "What is the result of '5' + 3 in JavaScript?",
//          options: ["8", "53", "TypeError", "NaN"],
//          correct: "53"
//      },
//      11: {
//          text: "Which operator is used for strict equality comparison?",
//          options: ["==", "===", "!=", "!=="],
//          correct: "==="
//      },
//      12: {
//          text: "What is the scope of a variable declared with 'let'?",
//          options: ["Global", "Function", "Block", "Module"],
//          correct: "Block"
//      },
//      13: {
//          text: "Which method is used to convert a string to lowercase?",
//          options: ["toLowerCase()", "toLower()", "lower()", "downCase()"],
//          correct: "toLowerCase()"
//      },
//      14: {
//          text: "What is the result of Boolean('false')?",
//          options: ["true", "false", "undefined", "null"],
//          correct: "true"
//      },
//      15: {
//          text: "Which method is used to join array elements into a string?",
//          options: ["join()", "concat()", "merge()", "combine()"],
//          correct: "join()"
//      },
//      16: {
//          text: "What is the default value of an uninitialized variable?",
//          options: ["null", "undefined", "0", "''"],
//          correct: "undefined"
//      },
//      17: {
//          text: "Which event is fired when the DOM is fully loaded?",
//          options: ["onload", "DOMContentLoaded", "ready", "domready"],
//          correct: "DOMContentLoaded"
//      },
//      18: {
//          text: "What is the result of parseInt('123abc')?",
//          options: ["123", "NaN", "123abc", "undefined"],
//          correct: "123"
//      },
//      19: {
//          text: "Which method is used to add elements to the beginning of an array?",
//          options: ["unshift()", "shift()", "push()", "pop()"],
//          correct: "unshift()"
//      },
//      20: {
//          text: "What is the purpose of the 'use strict' directive?",
//          options: ["Enable strict mode", "Disable errors", "Improve performance", "All of the above"],
//          correct: "Enable strict mode"
//      }
//  };


const questions = {
    1: {
       text: "Sachant que $11 \\times 11 = 121$, le produit $111111111 \\times 111111111$ est égal à :",
       options: ["1234567654321", "123456787654321", "12345678987654321", "1234568654321"],
       correct: "12345678987654321"
   },
   2: {
       text: "Le nombre de diviseurs positifs du nombre $546 \\times 640$ est :",
       options: [180, 181, 182, 183],
       correct: 180
   },
   3: {
       text: "Soit $f: \\mathbb{R} \\to \\mathbb{R}$. La négation de la proposition « f est la fonction nulle » est :",
       options: [
           "$\\forall x \\in \\mathbb{R}, f(x) > 0$",
           "$\\forall x \\in \\mathbb{R}, f(x) \\neq 0$",
           "$\\exists x \\in \\mathbb{R}, f(x) = 0$",
           "$\\exists x \\in \\mathbb{R}, f(x) \\neq 0$"
       ],
       correct: "$\\exists x \\in \\mathbb{R}, f(x) \\neq 0$"
   },
   4: {
       text: "La solution de l'équation à variable réelle x : $\\ln(x^2 - 1) - \\ln(2x - 1) + \\ln(2) = 0$ est :",
       options: [
           "$\\frac{1+\\sqrt{5}}{2}$",
           "$\\frac{1+\\sqrt{3}}{2}$",
           "$\\frac{1-\\sqrt{3}}{2}$",
           "$\\frac{1+\\sqrt{2}}{2}$"
       ],
       correct: "$\\frac{1+\\sqrt{3}}{2}$"
   },
   5: {
       text: "La valeur maximale du terme $u_k = \\binom{20}{k} 20^{k} 21^{20-k}$ dans le développement du nombre $(20+21)^{20}$ par la formule du Binôme de Newton est atteinte pour k égal à :",
       options: [8, 9, 10, 11],
       correct: 10
   },

   6: {
       text: "La limite $lim_{n\\rightarrow+\\infty}\\sqrt[n]{n^{2}}=$ [cite: 36]",
       options: ["1", "0", "$+\\infty$", "e"],
       correct: "1"
   },
   7: {
       text: "La limite $lim_{n\\rightarrow+\\infty} n-\\sqrt{(n+5)(n+7)}=$ [cite: 42]",
       options: ["0", "-6", "6", "$+\\infty$"],
       correct: "-6"
   },
   8: {
       text: "Soient a et b deux réels; la fonction f définie par : $f(x)=\\begin{cases}\\frac{ln(1+x)-x}{x^{2}}&si~x>0\\\\ ax+b&si~x\\le0\\end{cases}$ est continue en 0 si et seulement si : [cite: 48, 50]",
       options: [
           "$a \\in \\mathbb{R}$ et $b=2$",
           "$a=0$ et $b=1$",
           "$a=\\frac{-1}{3}$ et $b=\\frac{1}{2}$",
           "$a \\in \\mathbb{R}$ et $b=\\frac{-1}{2}$"
       ],
       correct: "$a \\in \\mathbb{R}$ et $b=\\frac{-1}{2}$"
   },
   9: {
       text: "La dérivée de la fonction $f(x)=\\frac{\\sqrt{x-1}}{\\sqrt[3]{(x+2)^{2}}\\sqrt{(x+3)^{3}}}$ est : [cite: 52, 58]",
       options: [
           "$\\frac{5x^{2}-x-12}{\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
           "$\\frac{3x^{2}+x-24}{\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
           "$\\frac{2x^{2}+x-24}{2\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
           "$\\frac{5x^{2}+x-24}{3\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$"
       ],
       correct: "$\\frac{5x^{2}+x-24}{3\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$"
   },
   10: {
       text: "Soit $f:[0,+\\infty[\\rightarrow[0,+\\infty[$ définie par $f(x)=xe^{x}$. L'équation de la tangente à la courbe $f^{-1}$ au point d'abscisse e est : [cite: 61]",
       options: [
           "$y=\\frac{1}{2e}x+\\frac{1}{2}$",
           "$y=\\frac{1}{e}x+\\frac{1}{2}$",
           "$y=\\frac{1}{2e}x+1$",
           "$y=\\frac{1}{e}x-1$"
       ],
       correct: "$y=\\frac{1}{2e}x+\\frac{1}{2}$"
   },
   11: {
       text: "La valeur de $\\int_{0}^{1}\\frac{1-x^{2}}{1+x^{2}}dx=$ [cite: 72]",
       options: ["$\\frac{\\pi}{2}+1$", "$\\frac{\\pi}{2}-1$", "$-1+\\frac{\\pi}{4}$", "$-1-\\frac{\\pi}{4}$"],
       correct: "$\\frac{\\pi}{2}-1$"
   },
   12: {
       text: "Soit l'intégrale $I_{n}=\\int_{-1}^{1}(x^{2}-1)^{n}dx$. La valeur de $I_{4}$ est : [cite: 69, 70, 79]",
       options: ["$\\frac{252}{315}$", "$\\frac{254}{315}$", "$\\frac{258}{315}$", "$\\frac{256}{315}$"],
       correct: "$\\frac{256}{315}$"
   },
   13: {
       text: "$cos(\\pi/16)$ est égal à : [cite: 83]",
       options: [
           "$\\frac{1}{2}\\sqrt{2+\\sqrt{2-\\sqrt{2}}}$",
           "$\\frac{1}{2}\\sqrt{2-\\sqrt{2+\\sqrt{2}}}$",
           "$\\frac{1}{16}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$",
           "$\\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$"
       ],
       correct: "$\\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$"
   },
   14: {
       text: "La forme algébrique du nombre complexe $(\\frac{1}{2}+i\\frac{\\sqrt{3}}{2})^{2023}$ est : [cite: 85]",
       options: [
           "$\\frac{1}{2}+i\\frac{\\sqrt{3}}{2}$",
           "$-\\frac{1}{2}+i\\frac{\\sqrt{3}}{2}$",
           "$\\frac{\\sqrt{3}}{2}+i\\frac{1}{2}$",
           "$-\\frac{\\sqrt{3}}{2}+i\\frac{1}{2}$"
       ],
       correct: "$\\frac{1}{2}+i\\frac{\\sqrt{3}}{2}$"
   },
   15: {
    text: "$cos(\\pi/16)$ est égal à : [cite: 83]",
    options: [
        "$\\frac{1}{2}\\sqrt{2+\\sqrt{2-\\sqrt{2}}}$",
        "$\\frac{1}{2}\\sqrt{2-\\sqrt{2+\\sqrt{2}}}$",
        "$\\frac{1}{16}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$",
        "$\\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$"
    ],
    correct: "$\\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$"
},   16: {
       text: "Soient $z_{1}$ et $z_{2}$ les solutions de l'équation suivante : $2z^{2}-2(m+1+i)z+m^{2}+(1+i)m+i=0$ où $m \\in \\mathbb{C}^{*}$ et $m \\neq 1,i$. Alors $Im(z_{1}) \\times Im(z_{2})=$ [cite: 105, 106, 107, 108]",
       options: [
           "$\\frac{1-m^{2}}{2}$",
           "$\\frac{1+m^{2}}{2}$",
           "$\\frac{1-m^{2}}{4}$",
           "$\\frac{1+m^{2}}{4}$"
       ],
       correct: "$\\frac{1-m^{2}}{4}$"
   },
   17: {
       text: "La solution $y(x)$ de l'équation différentielle suivante: $y''+y'+\\frac{5}{2}y=0$ avec $y(0)=-4$ et $y'(0)=6$ est : [cite: 114]",
       options: [
           "$e^{\\frac{x}{2}}(-4 \\cos(\\frac{3}{2}x)- \\frac{8}{3}\\sin(\\frac{3}{2}x))$",
           "$e^{\\frac{x}{2}}(-4 \\cos(\\frac{3}{2}x)+ \\frac{8}{3}\\sin(\\frac{3}{2}x))$",
           "$e^{\\frac{-x}{2}}(-4 \\cos(\\frac{3}{2}x)- \\frac{8}{3}\\sin(\\frac{3}{2}x))$",
           "$e^{\\frac{-x}{2}}(-4 \\cos(\\frac{3}{2}x)+ \\frac{8}{3}\\sin(\\frac{3}{2}x))$"
       ],
       correct: "$e^{\\frac{-x}{2}}(-4 \\cos(\\frac{3}{2}x)+ \\frac{8}{3}\\sin(\\frac{3}{2}x))$"
   },
   18: {
       text: "Dans un repère orthonormé, on considère le plan P d'équation cartésienne $2x-y-2z+2=0$, et la sphère d'équation $x^{2}-6x+y^{2}+z^{2}+10z-2=0$. Une représentation paramétrique de la droite passant par le centre de la sphère et perpendiculaire au plan P est : [cite: 120, 121]",
       options: [
           "$\\begin{cases}x=3+2t\\\\ y=-t\\\\ z=-5-2t\\end{cases},t\\in\\mathbb{R}$",
           "$\\begin{cases}x=3-2t\\\\ y=t\\\\ z=-5-2t\\end{cases},t\\in\\mathbb{R}$",
           "$\\begin{cases}x=3+2t\\\\ y=-t\\\\ z=5-2t\\end{cases},t\\in\\mathbb{R}$",
           "$\\begin{cases}x=-3+2t\\\\ y=-t\\\\ z=-5-2t\\end{cases},t\\in\\mathbb{R}$"
       ],
       correct: "$\\begin{cases}x=3+2t\\\\ y=-t\\\\ z=-5-2t\\end{cases},t\\in\\mathbb{R}$"
   },
   19: {
       text: "Une école d'ingénieurs compte 300 élèves. Ils sont répartis dans des clubs : 60 en Cyber Sécurité (30% de filles), 90 en Sport (60% de filles), et 150 en Environnement (72% de filles). Chaque élève pratique une seule activité. On choisit un(e) élève au hasard. La probabilité que l'élève choisi(e) soit une fille est : [cite: 130, 131, 132, 133]",
       options: [0.4, 0.5, 0.6, 0.7],
       correct: 0.6
   },
   20: {
       text: "Sachant que l'élève choisi(e) est un garçon, la probabilité qu'il soit inscrit au club Environnement est : [cite: 139]",
       options: [0.25, 0.35, 0.45, 0.55],
       correct: 0.35
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
     // Recompiler les formules LaTeX après avoir injecté le HTML
if (window.MathJax) {
    MathJax.typesetPromise();
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
    // Afficher une confirmation avant d'arrêter le contest
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
//  -------------si l'utulisateur change visibility
document.addEventListener('visibilitychange', () => {
    if(!contestStarted || contestEnded) return;
    if (document.visibilityState === 'hidden') {
        // L'utilisateur a quitté l'onglet ou réduit la fenêtre
        alert("🚨 Attention ! Vous avez quitté la fenêtre. Le test va être réinitialisé.");
        location.reload(); // ou bien resetTimer(); ou resetContest();
    }
});

//-----------------------------Désactiver le clic droit et les raccourcis clavier
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function (e) {
    if(!contestStarted || contestEnded) return;
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        alert("Fonction désactivée.");
        return false;
    }
};



// ------------------------Empêcher copier, couper, coller via événements
document.addEventListener('copy', e => { 
    if(!contestStarted || contestEnded) return;
    e.preventDefault();
    alert("❌ Copie interdite !");
});
document.addEventListener('cut', e => {
    if(!contestStarted || contestEnded) return;
    e.preventDefault();
    alert("❌ Coupe interdite !");
});

document.addEventListener('paste', e => {
    if(!contestStarted || contestEnded) return;
    e.preventDefault();
    alert("❌ Collage interdit !");
});

// ------------------------------------------ Désactiver sélection de texte
document.addEventListener('selectstart', e =>{  if(!contestStarted || contestEnded) return;e.preventDefault();});