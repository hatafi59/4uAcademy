let questionsState = {
    1: { answered: false, correct: null, selectedOption: null },
    2: { answered: false, correct: null, selectedOption: null },
    3: { answered: false, correct: null, selectedOption: null },
    4: { answered: false, correct: null, selectedOption: null },
    5: { answered: false, correct: null, selectedOption: null },
    6: { answered: false, correct: null, selectedOption: null },
    7: { answered: false, correct: null, selectedOption: null },
    8: { answered: false, correct: null, selectedOption: null },
    9: { answered: false, correct: null, selectedOption: null },
    10: { answered: false, correct: null, selectedOption: null },
    11: { answered: false, correct: null, selectedOption: null },
    12: { answered: false, correct: null, selectedOption: null },
    13: { answered: false, correct: null, selectedOption: null },
    14: { answered: false, correct: null, selectedOption: null },
    15: { answered: false, correct: null, selectedOption: null },
    16: { answered: false, correct: null, selectedOption: null },
    17: { answered: false, correct: null, selectedOption: null },
    18: { answered: false, correct: null, selectedOption: null },
    19: { answered: false, correct: null, selectedOption: null },
    20: { answered: false, correct: null, selectedOption: null }
};

// Réponses correctes (exemple)
const correctAnswers = {
    1: 'D',
    2: 'B',
    3: 'A',
    4: 'C',
    5: 'B',
    6: 'A',
    7: 'D',
    8: 'B',
    9: 'A',
    10: 'C',
    11: 'D',
    12: 'B',
    13: 'A',
    14: 'C',
    15: 'B',
    16: 'D',
    17: 'A',
    18: 'C',
    19: 'B',
    20: 'D'
};

function selectOption(element, option) {

    const questionNumber = getCurrentQuestionNumber(element);
    if (!questionNumber) {
        console.error('Numéro de question non trouvé.');
        return;
    }
    // Vérifier si la question a déjà été répondue
    if (questionsState[questionNumber].selectedOption === null) {
        // Supprimer la sélection précédente
        const options = element.parentElement.querySelectorAll('li');
        if (options) {
            options.forEach(opt => {
                opt.style.backgroundColor = '';
                opt.style.border = '';
            });
        }

        // Marquer l'option sélectionnée
        element.style.backgroundColor = '#e8f4fd';
        element.style.border = '2px solid #3498db';

        // Simuler la vérification de la réponse
        const isCorrect = option === correctAnswers[questionNumber];

        // Mettre à jour l'état
        questionsState[questionNumber] = {
            answered: true,
            correct: isCorrect,
            selectedOption: option
        };


        // Mettre à jour l'affichage
        updateProgressGrid();
        updateStats();

        // Feedback visuel
        setTimeout(() => {
            if (isCorrect) {
                element.style.backgroundColor = '#d4edda';
                element.style.border = '2px solid #27ae60';
            } else {
                element.style.backgroundColor = '#f8d7da';
                element.style.border = '2px solid #e74c3c';
                // Afficher la bonne réponse
                const correctOption = element.parentElement.querySelector(`li[data-option="${correctAnswers[questionNumber]}"]`);
                if (correctOption) {
                    correctOption.style.backgroundColor = '#d4edda';
                    correctOption.style.border = '2px solid #27ae60';
                }
            }
        }, 500);
    } else { 
        // Si la question a déjà été répondue, on ne fait rien
        console.warn(`Question ${questionNumber} déjà répondue.`);
    }
}




function getCurrentQuestionNumber(element) {
    // Trouver le parent de la question
    const questionCard = element.closest('.question-card');
    if (!questionCard) return null;
    // Extraire le numéro de la question
    //<div class="question-card" id="Q1">
    const questionId = questionCard.id;
    if (!questionId) return null;
    const questionNumber = questionId.replace('Q', '');
    return parseInt(questionNumber, 10);
}





function goToQuestion(questionNumber) {
    const questionCard = document.getElementById(`Q${questionNumber}`);
    if (questionCard) {
        // Faire défiler la page jusqu'à la question
        questionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Mettre à jour la classe active dans la grille de progression
        // const progressItems = document.querySelectorAll('.progress-item');
        // if(progressItems){
        //     progressItems.forEach(item => item.classList.remove('active'));
        //     if(progressItems[questionNumber - 1]){
        //         progressItems[questionNumber - 1].classList.add('active');
        //     }
        // }
    } else {
        console.error(`Question ${questionNumber} non trouvée.`);
    }
}

function updateProgressGrid() {
    const progressItems = document.querySelectorAll('.progress-item');
    if (progressItems) {
        progressItems.forEach((item, index) => {
            const questionNumber = index + 1;
            const state = questionsState[questionNumber];

            item.className = 'progress-item';
            if (state && state.answered) {
                if (state.correct) {
                    item.classList.add('correct');
                } else {
                    item.classList.add('incorrect');
                }
            } else {
                item.classList.add('unanswered');
            }
        });
    }
}

function updateStats() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    Object.values(questionsState).forEach(state => {
        if (state.answered) {
            if (state.correct) {
                correct++;
            } else {
                incorrect++;
            }
        } else {
            unanswered++;
        }
    });

    // Compter les questions non initialisées comme non répondues
    const totalQuestions = 20;
    const answeredCount = Object.keys(questionsState).length;
    unanswered = totalQuestions - correct - incorrect;

    let statvaluecorrect = document.querySelector('.stat-value.correct');
    let statvalueincorrect = document.querySelector('.stat-value.incorrect');
    let statvaluetotal = document.querySelector('.stat-value:not(.correct):not(.incorrect):not(.total)');
    if (statvaluecorrect && statvalueincorrect && statvaluetotal) {
        statvaluecorrect.textContent = correct;
        statvalueincorrect.textContent = incorrect;
        statvaluetotal.textContent = unanswered;
    }

}




// Gestion des liens d'années
let yearlink = document.querySelectorAll('.year-links a');
if (yearlink) {
    yearlink.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.year-links a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Ici vous pourriez charger les questions pour l'année sélectionnée
            console.log(`Chargement des questions pour l'année ${this.textContent}`);

        });
    });
}

// Initialisation
updateProgressGrid();
updateStats();





// -----------------------------gestion de discuss-answer
let discussLinks = document.querySelectorAll('.discuss-link');
if (discussLinks.length > 0) {
    discussLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const questionCard = link.closest('.question-card');
            const discussAnswer = questionCard.querySelector('.discuss-answer');

            // Cacher toutes les autres réponses
            document.querySelectorAll('.question-card').forEach(card => {
                if (card !== questionCard) {
                    card.querySelector('.discuss-answer')?.classList.remove('active');
                }
            });

            // Basculer la visibilité de la réponse actuelle
            discussAnswer.classList.toggle('active');
        });
    });
}


