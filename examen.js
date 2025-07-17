// Pour empêcher la sélection de texte
document.querySelector('.main-content')?.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

const questions = {
    "ENSA": {
        2025: {
            1: {
                text: "Sachant que $11 \\times 11 = 121$, le produit $111111111 \\times 111111111$ est égal à :",
                options: ["1234567654321", "123456787654321", "12345678987654321", "1234568654321"],
                correct: "12345678987654321",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            2: {
                text: "Le nombre de diviseurs positifs du nombre $546 \\times 640$ est :",
                options: [180, 181, 182, 183],
                correct: 180,
                discuss: null
            },
            3: {
                text: "Soit $f: \\mathbb{R} \\to \\mathbb{R}$. La négation de la proposition « f est la fonction nulle » est :",
                options: [
                    "$\\forall x \\in \\mathbb{R}, f(x) > 0$",
                    "$\\forall x \\in \\mathbb{R}, f(x) \\neq 0$",
                    "$\\exists x \\in \\mathbb{R}, f(x) = 0$",
                    "$\\exists x \\in \\mathbb{R}, f(x) \\neq 0$"
                ],
                correct: "$\\exists x \\in \\mathbb{R}, f(x) \\neq 0$",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            4: {
                text: "La solution de l'équation à variable réelle x : $\\ln(x^2 - 1) - \\ln(2x - 1) + \\ln(2) = 0$ est :",
                options: [
                    "$\\frac{1+\\sqrt{5}}{2}$",
                    "$\\frac{1+\\sqrt{3}}{2}$",
                    "$\\frac{1-\\sqrt{3}}{2}$",
                    "$\\frac{1+\\sqrt{2}}{2}$"
                ],
                correct: "$\\frac{1+\\sqrt{3}}{2}$",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            5: {
                text: "La valeur maximale du terme $u_k = \\binom{20}{k} 20^{k} 21^{20-k}$ dans le développement du nombre $(20+21)^{20}$ par la formule du Binôme de Newton est atteinte pour k égal à :",
                options: [8, 9, 10, 11],
                correct: 10,
                discuss: null
            },
            6: {
                text: "La limite $\\lim_{n\\rightarrow+\\infty}\\sqrt[n]{n^{2}}=$",
                options: ["1", "0", "$+\\infty$", "e"],
                correct: "1",
                discuss: null
            },
            7: {
                text: "La limite $\\lim_{n\\rightarrow+\\infty} n-\\sqrt{(n+5)(n+7)}=$",
                options: ["0", "-6", "6", "$+\\infty$"],
                correct: "-6",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            8: {
                text: "Soient a et b deux réels; la fonction f définie par : $f(x)=\\begin{cases}\\frac{\\ln(1+x)-x}{x^{2}}&\\text{si }x>0\\\\ ax+b&\\text{si }x\\le0\\end{cases}$ est continue en 0 si et seulement si :",
                options: [
                    "$a \\in \\mathbb{R}$ et $b=2$",
                    "$a=0$ et $b=1$",
                    "$a=\\frac{-1}{3}$ et $b=\\frac{1}{2}$",
                    "$a \\in \\mathbb{R}$ et $b=\\frac{-1}{2}$"
                ],
                correct: "$a \\in \\mathbb{R}$ et $b=\\frac{-1}{2}$",
                discuss: null
            },
            9: {
                text: "La dérivée de la fonction $f(x)=\\frac{\\sqrt{x-1}}{\\sqrt[3]{(x+2)^{2}}\\sqrt{(x+3)^{3}}}$ est :",
                options: [
                    "$\\frac{5x^{2}-x-12}{\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
                    "$\\frac{3x^{2}+x-24}{\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
                    "$\\frac{2x^{2}+x-24}{2\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
                    "$\\frac{5x^{2}+x-24}{3\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$"
                ],
                correct: "$\\frac{5x^{2}+x-24}{3\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
                discuss: null
            },
            10: {
                text: "Soit $f:[0,+\\infty[\\rightarrow[0,+\\infty[$ définie par $f(x)=xe^{x}$. L'équation de la tangente à la courbe $f^{-1}$ au point d'abscisse e est :",
                options: [
                    "$y=\\frac{1}{2e}x+\\frac{1}{2}$",
                    "$y=\\frac{1}{e}x+\\frac{1}{2}$",
                    "$y=\\frac{1}{2e}x+1$",
                    "$y=\\frac{1}{e}x-1$"
                ],
                correct: "$y=\\frac{1}{2e}x+\\frac{1}{2}$",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            11: {
                text: "La valeur de $\\int_{0}^{1}\\frac{1-x^{2}}{1+x^{2}}dx=$",
                options: ["$\\frac{\\pi}{2}+1$", "$\\frac{\\pi}{2}-1$", "$-1+\\frac{\\pi}{4}$", "$-1-\\frac{\\pi}{4}$"],
                correct: "$\\frac{\\pi}{2}-1$",
                discuss: null
            },
            12: {
                text: "Soit l'intégrale $I_{n}=\\int_{-1}^{1}(x^{2}-1)^{n}dx$. La valeur de $I_{4}$ est :",
                options: ["$\\frac{252}{315}$", "$\\frac{254}{315}$", "$\\frac{258}{315}$", "$\\frac{256}{315}$"],
                correct: "$\\frac{256}{315}$",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            13: {
                text: "$\\cos(\\pi/16)$ est égal à :",
                options: [
                    "$\\frac{1}{2}\\sqrt{2+\\sqrt{2-\\sqrt{2}}}$",
                    "$\\frac{1}{2}\\sqrt{2-\\sqrt{2+\\sqrt{2}}}$",
                    "$\\frac{1}{16}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$",
                    "$\\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$"
                ],
                correct: "$\\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            14: {
                text: "La forme algébrique du nombre complexe $(\\frac{1}{2}+i\\frac{\\sqrt{3}}{2})^{2023}$ est :",
                options: [
                    "$\\frac{1}{2}+i\\frac{\\sqrt{3}}{2}$",
                    "$-\\frac{1}{2}+i\\frac{\\sqrt{3}}{2}$",
                    "$\\frac{\\sqrt{3}}{2}+i\\frac{1}{2}$",
                    "$-\\frac{\\sqrt{3}}{2}+i\\frac{1}{2}$"
                ],
                correct: "$\\frac{1}{2}+i\\frac{\\sqrt{3}}{2}$",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            15: {
                text: "$\\cos(\\pi/16)$ est égal à :",
                options: [
                    "$\\frac{1}{2}\\sqrt{2+\\sqrt{2-\\sqrt{2}}}$",
                    "$\\frac{1}{2}\\sqrt{2-\\sqrt{2+\\sqrt{2}}}$",
                    "$\\frac{1}{16}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$",
                    "$\\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$"
                ],
                correct: "$\\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$",
                discuss: null
            },
            16: {
                text: "Soient $z_{1}$ et $z_{2}$ les solutions de l'équation suivante : $2z^{2}-2(m+1+i)z+m^{2}+(1+i)m+i=0$ où $m \\in \\mathbb{C}^{*}$ et $m \\neq 1,i$. Alors $\\text{Im}(z_{1}) \\times \\text{Im}(z_{2})=$",
                options: [
                    "$\\frac{1-m^{2}}{2}$",
                    "$\\frac{1+m^{2}}{2}$",
                    "$\\frac{1-m^{2}}{4}$",
                    "$\\frac{1+m^{2}}{4}$"
                ],
                correct: "$\\frac{1-m^{2}}{4}$",
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            17: {
                text: "La solution $y(x)$ de l'équation différentielle suivante: $y''+y'+\\frac{5}{2}y=0$ avec $y(0)=-4$ et $y'(0)=6$ est :",
                options: [
                    "$e^{\\frac{x}{2}}(-4 \\cos(\\frac{3}{2}x)- \\frac{8}{3}\\sin(\\frac{3}{2}x))$",
                    "$e^{\\frac{x}{2}}(-4 \\cos(\\frac{3}{2}x)+ \\frac{8}{3}\\sin(\\frac{3}{2}x))$",
                    "$e^{\\frac{-x}{2}}(-4 \\cos(\\frac{3}{2}x)- \\frac{8}{3}\\sin(\\frac{3}{2}x))$",
                    "$e^{\\frac{-x}{2}}(-4 \\cos(\\frac{3}{2}x)+ \\frac{8}{3}\\sin(\\frac{3}{2}x))$"
                ],
                correct: "$e^{\\frac{-x}{2}}(-4 \\cos(\\frac{3}{2}x)+ \\frac{8}{3}\\sin(\\frac{3}{2}x))$",
                discuss: null
            },
            18: {
                text: "Dans un repère orthonormé, on considère le plan P d'équation cartésienne $2x-y-2z+2=0$, et la sphère d'équation $x^{2}-6x+y^{2}+z^{2}+10z-2=0$. Une représentation paramétrique de la droite passant par le centre de la sphère et perpendiculaire au plan P est :",
                options: [
                    "$\\begin{cases}x=3+2t\\\\ y=-t\\\\ z=-5-2t\\end{cases},t\\in\\mathbb{R}$",
                    "$\\begin{cases}x=3-2t\\\\ y=t\\\\ z=-5-2t\\end{cases},t\\in\\mathbb{R}$",
                    "$\\begin{cases}x=3+2t\\\\ y=-t\\\\ z=5-2t\\end{cases},t\\in\\mathbb{R}$",
                    "$\\begin{cases}x=-3+2t\\\\ y=-t\\\\ z=-5-2t\\end{cases},t\\in\\mathbb{R}$"
                ],
                correct: "$\\begin{cases}x=3+2t\\\\ y=-t\\\\ z=-5-2t\\end{cases},t\\in\\mathbb{R}$",
                discuss: null
            },
            19: {
                text: "Une école d'ingénieurs compte 300 élèves. Ils sont répartis dans des clubs : 60 en Cyber Sécurité (30% de filles), 90 en Sport (60% de filles), et 150 en Environnement (72% de filles). Chaque élève pratique une seule activité. On choisit un(e) élève au hasard. La probabilité que l'élève choisi(e) soit une fille est :",
                options: [0.4, 0.5, 0.6, 0.7],
                correct: 0.6,
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            },
            20: {
                text: "Sachant que l'élève choisi(e) est un garçon, la probabilité qu'il soit inscrit au club Environnement est :",
                options: [0.25, 0.35, 0.45, 0.55],
                correct: 0.35,
                discuss: "Lorem ipsum dolor sit amet consectetur adipisicing elit Porro soluta reprehenderit officia quia eligendi necessitatibus beatae repudiandae quas ipsam aspernatur deleniti! Iste repellendus optio ullam harum dolorem consequuntur ex qui."
            }
        },
        2024: {},
        2023: {},
        2022: {},
        2021: {},
        2020: {}
    }
};

const optionLetters = ["A", "B", "C", "D"];

// État des questions
let questionsState = {};
let correctAnswers = {};
let yearOfConcour = "2025"; // Année du concours
let road = questions["ENSA"][yearOfConcour];

// Initialiser l'état des questions
function initializeQuestionsState() {
    for (let i = 1; i <= 20; i++) {
        questionsState[i] = { answered: false, correct: null, selectedOption: null };
        correctAnswers[i] = optionLetters[road[i].options.indexOf(road[i].correct)];
    }
}

function generateQuestions(lastUpdate) {
    const container = document.querySelector(".main-content");

    // Vérifier si le container existe
    if (!container) {
        console.error("Container .main-content non trouvé");
        return;
    }

    // Vider le container
    container.innerHTML = '';

    let questionIndex = 1;

    // Header
    const tit = document.createElement("div");
    tit.className = "header";
    let titre = document.createElement("h1");
    titre.textContent = `concours ENSA ${yearOfConcour}`;
    tit.appendChild(titre);
    container.appendChild(tit);

    const subtit = document.createElement("p");
    subtit.className = "subtitle";
    subtit.textContent = 'This section covers the questions for ENSA concours.';
    container.appendChild(subtit);

    const lastup = document.createElement("p");
    lastup.className = "last-updated";
    lastup.textContent = `Last Updated : ${lastUpdate}`;
    container.appendChild(lastup);

    // Générer les questions
    for (let key in road) {
        const question = road[key];

        const questionCard = document.createElement("div");
        questionCard.className = "question-card";
        questionCard.id = `Q${key}`;

        // Question Header
        const header = document.createElement("div");
        header.className = "question-header";
        header.textContent = `Question ${questionIndex++}`;
        questionCard.appendChild(header);

        // Question Text
        const text = document.createElement("div");
        text.className = "question-text";
        text.textContent = question.text;
        questionCard.appendChild(text);

        // Options
        const ul = document.createElement("ul");
        ul.className = "options";

        question.options.forEach((optionText, i) => {
            const li = document.createElement("li");
            li.setAttribute("data-option", optionLetters[i]);
            li.setAttribute("onclick", `selectOption(this, '${optionLetters[i]}')`);

            const spanLetter = document.createElement("span");
            spanLetter.className = "option-letter";
            spanLetter.textContent = optionLetters[i];

            const spanText = document.createElement("span");
            spanText.textContent = optionText;

            li.appendChild(spanLetter);
            li.appendChild(spanText);

            ul.appendChild(li);
        });

        questionCard.appendChild(ul);

        // Discuss link
        const discussLink = document.createElement("a");
        discussLink.href = "#";
        discussLink.className = "discuss-link";
        discussLink.textContent = "Discuss it";
        questionCard.appendChild(discussLink);

        // Discuss Answer
        const discussAnswer = document.createElement("div");
        discussAnswer.className = "discuss-answer";
        discussAnswer.innerHTML = (question.discuss == null) ? `<p>makaynch</p>` : `<p>${question.discuss}</p>`;
        questionCard.appendChild(discussAnswer);

        container.appendChild(questionCard);
    }

    // Initialiser l'état des questions
    initializeQuestionsState();

    // Ajouter les event listeners pour les discuss links
    setupDiscussLinks();

    // Recompiler les formules LaTeX après avoir injecté le HTML
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

// Fonction pour sélectionner une option
function selectOption(element, option) {
    const questionNumber = getCurrentQuestionNumber(element);
    if (!questionNumber) {
        console.error('Numéro de question non trouvé.');
        return;
    }

    // Vérifier si la question a déjà été répondue
    if (questionsState[questionNumber].answered) {
        console.warn(`Question ${questionNumber} déjà répondue.`);
        return;
    }

    // Supprimer la sélection précédente dans cette question
    const options = element.parentElement.querySelectorAll('li');
    options.forEach(opt => {
        opt.classList.remove('selected');
        opt.style.backgroundColor = '';
        opt.style.border = '';
    });

    // Marquer l'option sélectionnée
    element.classList.add('selected');
    element.style.backgroundColor = '#e8f4fd';
    element.style.border = '2px solid #3498db';

    // Vérifier si la réponse est correcte
    const isCorrect = option === correctAnswers[questionNumber];

    // Mettre à jour l'état
    questionsState[questionNumber] = {
        answered: true,
        correct: isCorrect,
        selectedOption: option
    };

    // Feedback visuel après un court délai
    setTimeout(() => {
        if (isCorrect) {
            element.style.backgroundColor = '#d4edda';
            element.style.border = '2px solid #27ae60';
            element.classList.add('correct');
        } else {
            element.style.backgroundColor = '#f8d7da';
            element.style.border = '2px solid #e74c3c';
            element.classList.add('incorrect');

            // Afficher la bonne réponse
            const correctOption = element.parentElement.querySelector(`li[data-option="${correctAnswers[questionNumber]}"]`);
            if (correctOption) {
                correctOption.style.backgroundColor = '#d4edda';
                correctOption.style.border = '2px solid #27ae60';
                correctOption.classList.add('correct');
            }
        }

        // Mettre à jour l'affichage après le feedback visuel
        updateProgressGrid();
        updateStats();
    }, 300);
}

function getCurrentQuestionNumber(element) {
    const questionCard = element.closest('.question-card');
    if (!questionCard) return null;

    const questionId = questionCard.id;
    if (!questionId || !questionId.startsWith('Q')) return null;

    const questionNumber = questionId.replace('Q', '');
    const parsedNumber = parseInt(questionNumber, 10);

    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 20) {
        return null;
    }

    return parsedNumber;
}

function updateProgressGrid() {
    const progressItems = document.querySelectorAll('.progress-item');
    progressItems.forEach((item, index) => {
        const questionNumber = index + 1;
        const state = questionsState[questionNumber];

        // Réinitialiser les classes
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

function updateStats() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    // Compter les réponses
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

    // Mettre à jour l'affichage des statistiques
    const statValueCorrect = document.querySelector('.stat-value.correct');
    const statValueIncorrect = document.querySelector('.stat-value.incorrect');
    const statValueUnanswered = document.querySelector('.stats .stat-item:nth-child(3) .stat-value');

    if (statValueCorrect) statValueCorrect.textContent = correct;
    if (statValueIncorrect) statValueIncorrect.textContent = incorrect;
    if (statValueUnanswered) statValueUnanswered.textContent = unanswered;
}

function setupDiscussLinks() {
    const discussLinks = document.querySelectorAll('.discuss-link');
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

// Fonctions utilitaires pour réinitialiser
function resetQuestion(questionNumber) {
    if (!questionsState[questionNumber]) return;

    questionsState[questionNumber] = {
        answered: false,
        correct: null,
        selectedOption: null
    };

    // Réinitialiser l'affichage
    const questionCard = document.getElementById(`Q${questionNumber}`);
    if (questionCard) {
        const options = questionCard.querySelectorAll('.options li');
        options.forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            opt.style.backgroundColor = '';
            opt.style.border = '';
        });
    }

    updateProgressGrid();
    updateStats();
}

function resetAllQuestions() {
    Object.keys(questionsState).forEach(questionNumber => {
        resetQuestion(parseInt(questionNumber));
    });
}

// CORRECTION : Fonction corrigée avec paramètre year
function goToConcour(year, lastUpdate) {
    const container = document.querySelector(".main-content");
    
    // Vérifier si le container existe
    if (!container) {
        console.error("Container .main-content non trouvé");
        return;
    }
    
    // Vérifier si l'année existe dans les données
    if (!questions["ENSA"][year]) {
        console.error(`Année ${year} non trouvée dans les données`);
        return;
    }
    
    yearOfConcour = year;
    road = questions["ENSA"][yearOfConcour]; // Mettre à jour la variable road
    
    if (!road || road.length === 0) {
        alert("Le concours n'est pas encore disponible.");
        return;
    }
    container.innerHTML = ''; // Vider le contenu actuel
    
    // Mettre à jour les liens d'années (si ils existent)
    const yearLinks = document.querySelectorAll('.year-links a');
    yearLinks.forEach(link => {
        if (link.textContent === year) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    generateQuestions(lastUpdate);
}

// Initialisation corrigée
function initializeApp() {
    // Vérifier si le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            goToConcour("2025", "2023-10-01");
        });
    } else {
        goToConcour("2025", "2023-10-01");
    }
}

// Appeler l'initialisation
initializeApp();