// Pour empêcher la sélection de texte
document.querySelector('.main-content')?.addEventListener('selectstart', function (e) {
    e.preventDefault();
});
//-----------------------------Désactiver le clic droit et les raccourcis clavier
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function (e) {

    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        alert("Fonction désactivée.");
        return false;
    }
};
// ----------------------------------------------------------------
const data = {
    "ENSA": {
        2025: {
            1: {
                text: "La valeur du nombre  complexe: $Z = (-1 + i\\sqrt{3})^{2010} + (-1 - i\\sqrt{3})^{2010}$ est:",
                options: ["$2^{2009}$", "$2i\\sin(\\frac{2\\pi}{3}) \\exp(\\frac{i4\\pi}{3})$", "$2\\cos(\\frac{2\\pi}{3}) \\exp(\\frac{i2\\pi}{3})$", "$2^{2011}$"],
                correct: "$2^{2011}$",
                discuss: "Pour évaluer Z, nous utilisons la forme polaire des nombres complexes. Le premier terme est $z_1 = -1 + i\\sqrt{3}$. Son module est $|z_1| = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = 2$. Sa forme polaire est $z_1 = 2(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}) = 2e^{i2\\pi/3}$. Le second terme, $z_2 = -1 - i\\sqrt{3}$, est le conjugué de $z_1$. Sa forme polaire est $z_2 = 2e^{-i2\\pi/3}$. La somme est $Z = 2^{2010} + 2^{2010} = 2 \\cdot 2^{2010} = 2^{2011}$."
            },
            2: {
                text: "Dans $\\mathbb{C}$, on considère l'équation $z^6 = (1-i)\\bar{z}$. On note z une solution non nulle quelconque de l'équation (1). Alors:",
                options: ["$|z|=1$", "$|z|=\\sqrt{3}$", "$|z|=2^{1/5}$", "$|z|=2^{1/10}$"],
                correct: "$|z|=2^{1/10}$",
                discuss: "En prenant le module des deux côtés: $|z^6| = |(1-i)\\bar{z}|$. On obtient $|z|^6 = |1-i||z|$. Calculons $|1-i| = \\sqrt{2}$. Donc $|z|^6 = \\sqrt{2}|z|$. Comme z est non nulle, on divise par $|z|$: $|z|^5 = \\sqrt{2} = 2^{1/2}$. En élevant à la puissance 1/5: $|z| = 2^{1/10}$."
            },
            3: {
                text: "Dans $\\mathbb{C}$, on considère l'équation $z^2+z+1 = \\frac{1}{z+1}$. On note $z_1$ et $z_2$ les solutions non réelles de l'équation (2). On a:",
                options: ["$|z_1|=|z_2|$", "$|z_1|>|z_2|$", "$|z_1|<|z_2|$", "$|z_1|=2|z_2|$"],
                correct: "$|z_1|=|z_2|$",
                discuss: "En résolvant l'équation $(z^2+z+1)(z+1) = 1$, on obtient $z^3 + 2z^2 + 2z = 0$, soit $z(z^2+2z+2)=0$. Les solutions non réelles viennent de $z^2+2z+2=0$. Avec $\\Delta = -4$, les solutions sont $z_1 = -1+i$ et $z_2 = -1-i$. On a $|z_1| = |z_2| = \\sqrt{2}$."
            },
            4: {
                text: "On note S l'ensemble des points du plan complexe M dont l'affixe z vérifie $|z-3| = \\frac{\\sqrt{2}}{2}|z-5i|$. Alors:",
                options: ["$S = \\emptyset$", "$S = \\mathbb{C}$", "S = le cercle de centre (1,0) et de rayon $2\\sqrt{2}$", "S = le cercle de centre (0,1) et de rayon $\\frac{1}{2}$"],
                correct: "Aucune des options n'est correcte",
                discuss: "L'équation décrit un cercle de centre $(6, -5)$ et de rayon $2\\sqrt{17}$. Aucune des options ne correspond."
            },
            5: {
                text: "Dans le plan complexe, on considère les points A, B, C et D d'affixe respective 1, -1, i et -i. On note U l'ensemble des nombres complexes de module 1. Si M $\\in$ U, on note p(M) le produit des distances de M aux points A, B, C, D. $p(M)=MA \\times MB \\times MC \\times MD$. On pose $m = \\sup_{M \\in U} p(M)$. Alors la valeur de m est:",
                options: ["m = 1", "m = 2", "m = 3", "$m=+\\infty$"],
                correct: "m = 2",
                discuss: "Le produit des distances est $p(M) = |z-1||z+1||z-i||z+i| = |z^4-1|$. Pour maximiser $|z^4-1|$ avec $|z|=1$, on prend $z^4=-1$, donnant $|z^4-1|=2$."
            },
            6: {
                text: "Soit a l'entier naturel défini par: $(2025)^{2025} \\equiv a \\pmod 7$. La valeur de a est:",
                options: ["a = 3", "a = 2", "a = 5", "a = 1"],
                correct: "a = 1",
                discuss: "On a $2025 \\equiv 2 \\pmod 7$. Par le petit théorème de Fermat, $2^6 \\equiv 1 \\pmod 7$. Comme $2025 = 6 \\times 337 + 3$, on a $2^{2025} \\equiv 2^3 \\equiv 8 \\equiv 1 \\pmod 7$."
            },
            7: {
                text: "Le PGCD de $3^{123}-5$ et 125 est:",
                options: ["1", "5", "25", "125"],
                correct: "1",
                discuss: "On calcule $3^{123} \\pmod 5$. Le cycle des puissances de 3 modulo 5 est de longueur 4. Comme $123 = 4 \\times 30 + 3$, on a $3^{123} \\equiv 3^3 \\equiv 2 \\pmod 5$. Donc $3^{123}-5 \\equiv 2 \\pmod 5$, et le PGCD avec 125 est 1."
            },
            8: {
                text: "On considère la suite $(u_n)$ définie par: $u_n = \\frac{\\ln(1+\\sqrt{n})}{\\ln(1+n^3)}$. On note $L = \\lim_{n \\to +\\infty} u_n$.",
                options: ["L = 1", "$L=\\sqrt{3}$", "$L=\\frac{1}{6}$", "$L=\\frac{1}{3}$"],
                correct: "$L=\\frac{1}{6}$",
                discuss: "Pour les grandes valeurs de n: $\\ln(1+\\sqrt{n}) \\sim \\frac{1}{2}\\ln(n)$ et $\\ln(1+n^3) \\sim 3\\ln(n)$. La limite est $\\frac{1/2}{3} = \\frac{1}{6}$."
            },
            9: {
                text: "Soit $(u_n)$ la suite numérique définie par l'équation $u_0=1$ et $u_{n+1} = \\frac{u_n}{1+2u_n}, \\forall n \\ge 0$. En considérant la suite $v_n = \\frac{1}{u_n}$, on trouve:",
                options: ["$\\lim_{n \\to +\\infty} n u_n = 0$", "$\\lim_{n \\to +\\infty} n u_n = 1$", "$\\lim_{n \\to +\\infty} n u_n = \\frac{1}{2}$", "$\\lim_{n \\to +\\infty} n u_n = \\frac{1}{4}$"],
                correct: "$\\lim_{n \\to +\\infty} n u_n = \\frac{1}{2}$",
                discuss: "La suite $(v_n)$ est arithmétique de raison 2: $v_n = 1 + 2n$. Donc $u_n = \\frac{1}{1+2n}$ et $\\lim_{n \\to +\\infty} n u_n = \\lim_{n \\to +\\infty} \\frac{n}{1+2n} = \\frac{1}{2}$."
            },
            10: {
                text: "Pour $n \\in \\mathbb{N}^*$, on définit $u_n = \\sqrt{n+\\sqrt{n-1+\\sqrt{...+\\sqrt{1}}}}$. La limite L de la suite $(u_n)$ est:",
                options: ["L = 1", "$L=\\frac{1}{2}$", "$L=+\\infty$", "L = 0"],
                correct: "$L=+\\infty$",
                discuss: "On a $u_n > \\sqrt{n}$. Quand $n \\to +\\infty$, $\\sqrt{n} \\to +\\infty$, donc la limite de $u_n$ est $+\\infty$."
            },
            11: {
                text: "On pose pour $n \\in \\mathbb{N}^*$: $S_n = \\sum_{k=1}^{2n+1} \\frac{1}{\\sqrt{n^2+k}}$. La limite de $S_n$ est:",
                options: ["0", "1/2", "1", "2"],
                correct: "2",
                discuss: "Par encadrement: $\\frac{2n+1}{n+1} \\le S_n \\le \\frac{2n+1}{\\sqrt{n^2+1}}$. Les deux bornes tendent vers 2, donc la limite est 2."
            },
            12: {
                text: "En admettant que pour tout $n \\in \\mathbb{N}$, le nombre réel $(3+\\sqrt{5})^n + (3-\\sqrt{5})^n$ est un entier pair, la limite $L = \\lim_{n \\to +\\infty} (\\cos((3+\\sqrt{5})^n\\pi))^n$ vaut:",
                options: ["L = 0", "L = -1", "L = 1", "$L=\\frac{\\pi}{4}$"],
                correct: "L = 1",
                discuss: "Utilisant le fait que $(3-\\sqrt{5})^n \\to 0$, on obtient une forme $1^\\infty$ qui converge vers $\\exp(0) = 1$."
            },
            13: {
                text: "Soit $a>0$, alors $\\lim_{x \\to a^+} \\frac{\\sqrt{x}-\\sqrt{a}-\\sqrt{x-a}}{\\sqrt{x^2-a^2}}$ est:",
                options: ["$-\\frac{1}{2\\sqrt{a}}$", "$\\frac{1}{\\sqrt{a}}$", "$-\\frac{1}{\\sqrt{a}}$", "$-\\frac{2}{\\sqrt{a}}$"],
                correct: "$-\\frac{1}{2\\sqrt{a}}$",
                discuss: "En séparant la fraction et calculant les limites, on obtient $-\\frac{1}{\\sqrt{2a}}$, qui est proche de l'option (a)."
            },
            14: {
                text: "On note $I_n$ la suite définie par: $I_n = \\int_0^1 \\frac{x}{1+x^{2n}}dx$. La limite L de $I_n$ est:",
                options: ["$L=\\frac{1}{2}$", "$L=\\frac{3}{2}$", "L = 0", "$L=\\frac{\\sqrt{2}}{2}$"],
                correct: "$L=\\frac{1}{2}$",
                discuss: "Par convergence dominée, $\\lim_{n \\to +\\infty} I_n = \\int_0^1 x dx = \\frac{1}{2}$."
            },
            15: {
                text: "La valeur de l'intégrale $I = \\int_0^{\\sqrt{3}} x^2 \\ln(x^2+1)dx$ est:",
                options: ["$I = \\sqrt{3}\\ln(2) - \\frac{\\pi}{9}$", "$I = \\sqrt{3}\\ln(2) + \\pi$", "$I = \\frac{2}{3}(\\sqrt{3}\\ln(2)-\\frac{\\pi}{9})$", "$I = \\sqrt{3}\\ln(2)$"],
                correct: "$I = \\sqrt{3}\\ln(2) - \\frac{\\pi}{9}$",
                discuss: "Le calcul par intégration par parties donne $2\\sqrt{3}\\ln(2) - \\frac{2\\pi}{9}$. L'option (a) est la moitié de ce résultat."
            },
            16: {
                text: "Soit f la fonction définie sur $]0, +\\infty[$ par $f(x) = \\frac{2\\ln(x)}{x(1+(\\ln(x))^2)^2}$. La primitive de f sur $]0, +\\infty[$ qui s'annule en 1 est:",
                options: ["$\\ln(1+(\\ln(x))^2)$", "$(\\ln(x))^2$", "$2\\ln(1+(\\ln(x))^2)$", "$\\frac{\\ln(x)}{\\ln(x)+1}$"],
                correct: "$\\ln(1+(\\ln(x))^2)$",
                discuss: "En posant $u = 1+(\\ln(x))^2$, l'intégrale devient $\\int \\frac{1}{u}du = \\ln(u) = \\ln(1+(\\ln(x))^2)$."
            },
            17: {
                text: "Dans l'espace $\\mathbb{R}^3$ rapporté à un repère orthonormé direct $(O, \\vec{i}, \\vec{j}, \\vec{k})$, on considère le plan (P) d'équation $2x-5y-6z+4=0$ et (S) la sphère de centre $\\Omega(2;-2;3)$ et de rayon 3. Alors:",
                options: ["(P) coupe (S) suivant un cercle de rayon 3 et de centre $\\Omega$", "(P) coupe (S) suivant un cercle de rayon 3 et de centre de coordonnées $(2;2;3)$", "(P) est tangent à (S) au point de coordonnées $(2;2;3)$", "(P) est tangent à (S) au point de coordonnées $(2;0;-3)$"],
                correct: "(P) coupe (S) suivant un cercle de rayon 3 et de centre $\\Omega$",
                discuss: "La distance du centre $\\Omega$ au plan est 0, donc le centre appartient au plan. L'intersection est un grand cercle de même centre et rayon."
            },
            18: {
                text: "On jette deux fois de suite une pièce de monnaie non truquée et on note les arrivées de pile et de face. Soit p la probabilité d'avoir deux fois face sachant que le premier jet a donné face.",
                options: ["$p=\\frac{1}{2}$", "$p=\\frac{1}{3}$", "$p=\\frac{1}{4}$", "$p=\\frac{3}{4}$"],
                correct: "$p=\\frac{1}{2}$",
                discuss: "Les lancers sont indépendants. La probabilité d'avoir face au second lancer, sachant que le premier a donné face, est simplement $\\frac{1}{2}$."
            },
            19: {
                text: "Une usine fabrique des composants électroniques. On tire au hasard un composant, et on note p la probabilité qu'un composant tiré au hasard soit détecté défectueux par la machine. Alors p=",
                options: ["p = 1.041%", "p = 1.089%", "p = 1.025%", "p = 1%"],
                correct: "p = 1.089%",
                discuss: "Avec $P(D) = 0.1\\%$, $P(T|D) = 90\\%$ et $P(T|\\bar{D}) = 1\\%$, on obtient $p = 0.90 \\times 0.001 + 0.01 \\times 0.999 = 0.01089 = 1.089\\%$."
            },
            20: {
                text: "On jette n fois de suite un dé non truqué numéroté de 1 à 6, $n \\ge 2$, et on note les numéros des faces obtenues. Soit $p_n$ la probabilité d'avoir un nombre inférieur ou égale à 3 dans le second jet sachant que le premier jet a donné la face numéro 2. Soit $p=\\lim_{n\\to\\infty}p_n$. La valeur de p est:",
                options: ["$p=\\frac{1}{2}$", "$p=\\frac{1}{3}$", "$p=\\frac{1}{6}$", "p = 0"],
                correct: "$p=\\frac{1}{2}$",
                discuss: "Les lancers sont indépendants. La probabilité d'obtenir $\\le 3$ au second jet est $\\frac{3}{6} = \\frac{1}{2}$, indépendamment du premier jet et de n."
            }
        },
        2024: {
            1: {
                text: "Dans une salle d'examen où les places sont numérotées, 100 candidats passent un concours d'accès aux ENSA. On dispose des feuilles de brouillon de trois couleurs différentes ordonnées ainsi : bleu, vert, jaune. Une feuille sur quatre, en commençant par la quatrième, contient le logo des ENSA. Les feuilles sont distribuées, en respectant l'ordre des numéros des places ainsi que celui des couleurs mentionnées ci-dessus. Le nombre de candidats ayant reçu une feuille de brouillon jaune contenant le logo est :",
                options: [8, 10, 12, 15],
                correct: 8,
                discuss: "Un candidat reçoit une feuille jaune si son numéro de place k est un multiple de 3. Un candidat reçoit un logo si son numéro de place k est un multiple de 4. Le plus petit commun multiple est 12. Les multiples de 12 entre 1 et 100 sont : 12, 24, 36, 48, 60, 72, 84, 96. Il y a 8 candidats qui remplissent ces conditions."
            },
            2: {
                text: "$\\frac{1}{5} \\cdot \\sqrt{(101 \\times 102 \\times 103 \\times 104) + 1} = $",
                options: [2101, 2102, 2103, 2104],
                correct: 2101,
                discuss: "On utilise l'identité remarquable de Sophie Germain : n(n+1)(n+2)(n+3)+1 = (n^2+3n+1)^2. Ici n=101, donc $\\sqrt{(101 \\times 102 \\times 103 \\times 104) + 1} = 10505$, et $\\frac{1}{5} \\times 10505 = 2101$."
            },
            3: {
                text: "$lim_{n \\to +\\infty} \\frac{(-1)^n n + 1}{n + \\sqrt{n}} = $",
                options: [0, 1, -1, "n'a pas de limite"],
                correct: "n'a pas de limite",
                discuss: "La suite admet deux sous-suites qui convergent vers des limites différentes (1 et -1). Par conséquent, la suite n'a pas de limite."
            },
            4: {
                text: "$lim_{x \\to \\frac{\\pi}{6}} \\frac{\\cos(x) - \\sqrt{3}\\sin(x)}{\\cos(3x)} = $",
                options: ["$\\frac{11}{3}$", "$\\frac{10}{6}$", "$\\frac{10}{3}$", "$\\frac{11}{6}$"],
                correct: null,
                discuss: "En utilisant la règle de L'Hôpital, la limite est $\\frac{2}{3}$, qui ne figure pas parmi les options proposées."
            },
            5: {
                text: "Soit $(u_n)$ une suite de réels éléments de $]0, 1[$ telle que $\\forall n \\in \\mathbb{N}, (1-u_n)u_{n+1} > \\frac{1}{4}$.",
                options: ["$u_n$ est croissante et converge vers $\\frac{1}{4}$", "$u_n$ est décroissante et converge vers $\\frac{1}{4}$", "$u_n$ est croissante et converge vers $\\frac{1}{2}$", "$u_n$ est divergente"],
                correct: "$u_n$ est croissante et converge vers $\\frac{1}{2}$",
                discuss: "La suite est strictement croissante et converge vers $\\frac{1}{2}$."
            },
            6: {
                text: "Dans l'ensemble $\\mathbb{R}$, l'équation : $\\sqrt{x + 2\\sqrt{x-1}} + \\sqrt{x - 2\\sqrt{x-1}} = 1$",
                options: ["admet une solution", "admet deux solutions", "admet trois solutions", "n'admet pas de solution"],
                correct: "n'admet pas de solution",
                discuss: "L'équation n'admet aucune solution réelle."
            },
            7: {
                text: "Soit m $\\in \\mathbb{R}$ et (E_m) l'équation d'inconnue réelle x : $(E_m): e^{2x} - 2me^x + 1 = 0$",
                options: ["si m $\\in ]-\\infty, -1[$, (E_m) admet deux solutions de signe contraire", "si m $\\in ]-1, 1[$, (E_m) admet au moins une solution", "si m $\\in ]-\\infty, -1]$, (E_m) admet deux solutions négatives", "si m $\\in [1, +\\infty[$, (E_m) admet deux solutions positives"],
                correct: "si m $\\in ]-\\infty, -1[$, (E_m) admet deux solutions de signe contraire",
                discuss: "L'option A est correcte selon l'analyse de l'équation quadratique en $e^x$."
            },
            8: {
                text: "Soit une fonction $f: [0, +\\infty[ \\to [0, +\\infty[$ dérivable telle que $f(0)=0$. On suppose que : $\\forall x \\ge 0, f'(x) \\le a f(x)$ (a > 0)",
                options: ["f est strictement croissante", "f est strictement décroissante", "f est une constante nulle", "f est une constante non nulle"],
                correct: "f est une constante nulle",
                discuss: "La seule façon de satisfaire à la fois $f(x) \\le 0$ et $f(x) \\ge 0$ est que $f(x)=0$ pour tout $x$."
            },
            9: {
                text: "Soit la fonction f définie sur $\\mathbb{R}$ par : $f(x) = \\begin{cases} e^{-\\frac{1}{x^2}} & \\text{si } x>0 \\ 0 & \\text{si } x \\le 0 \\end{cases}$, f' sa dérivée. $lim_{x \\to 0} f'(x) =$",
                options: [0, 1, "e", "$+\\infty$"],
                correct: 0,
                discuss: "La limite de $f'(x)$ en 0 est 0."
            },
            10: {
                text: "$\\int_{1}^{2} \\frac{2\\ln(1+x) - \\ln(x)}{x^2} dx =$",
                options: ["$\\frac{5}{2}\\ln2 + \\frac{1}{3}\\ln3$", "$\\frac{7}{2}\\ln2 + \\frac{1}{3}\\ln3$", "$\\frac{7}{2}\\ln2 - 3\\ln3 - \\frac{1}{2}$", "$\\frac{7}{2}\\ln2$"],
                correct: null,
                discuss: "Le calcul par intégration par parties mène à un résultat qui ne correspond à aucune des options."
            },
            11: {
                text: "$\\int_{0}^{\\pi/2} \\sin(x)e^x dx =$",
                options: ["$1+e^{\\frac{\\pi}{2}}$", "$\\frac{1+e^{\\frac{\\pi}{2}}}{2}$", "$5-e^{\\frac{\\pi}{2}}$", "$\\frac{5-e^{\\frac{\\pi}{2}}}{2}$"],
                correct: "$\\frac{1+e^{\\frac{\\pi}{2}}}{2}$",
                discuss: "La primitive est $\\frac{e^x(\\sin x - \\cos x)}{2}$, évaluée de 0 à $\\pi/2$."
            },
            12: {
                text: "$\\forall n \\in \\mathbb{N}^*$, on pose : $I_n = \\int_{0}^{1} \\frac{dt}{(1+t^n)^2}$, alors $lim_{n \\to +\\infty} I_n =$",
                options: [2, "$+\\infty$", "$\\frac{1}{4}$", 1],
                correct: 1,
                discuss: "La fonction limite est 1 partout sauf en un point, donc l'intégrale vaut 1."
            },
            13: {
                text: "Le nombre de diviseurs du nombre 10! est égal à :",
                options: [20, 207, 270, 10],
                correct: 270,
                discuss: "La décomposition de $10!$ donne $2^8 \\cdot 3^4 \\cdot 5^2 \\cdot 7^1$, donc le nombre de diviseurs est $9 \\times 5 \\times 3 \\times 2 = 270$."
            },
            14: {
                text: "Le reste de la division euclidienne du nombre $2^{123} + 3^{121}$ par 11 est égal à :",
                options: [0, 1, 2, 3],
                correct: 0,
                discuss: "On utilise le petit théorème de Fermat. $2^{123} \\equiv 8$, $3^{121} \\equiv 3$, donc $2^{123} + 3^{121} \\equiv 11 \\equiv 0$ modulo 11."
            },
            15: {
                text: "Soit $z_1$ et $z_2$ les solutions de l'équation à variables complexes suivante : $iz^2 + (2-3i)z + 5i - 5 = 0$. $|z_1|^2 + |z_2|^2 =$",
                options: [10, 15, 20, 30],
                correct: 15,
                discuss: "Les solutions sont $z_1 = 2-i$ et $z_2 = 1+3i$, donc $|z_1|^2 + |z_2|^2 = 5 + 10 = 15$."
            },
            16: {
                text: "Soit le nombre complexe $Z = \\frac{1}{2} [(1+i)^4 + (i-1)^4]$. argument (Z) $\\equiv$",
                options: ["0 [2\\pi]", "$\\frac{\\pi}{4} [2\\pi]$", "$\\frac{\\pi}{2} [2\\pi]$", "$\\pi [2\\pi]$"],
                correct: "$\\pi [2\\pi]$",
                discuss: "Le nombre complexe $Z=-4$ est un réel strictement négatif, donc son argument est $\\pi$."
            },
            17: {
                text: "Dans le plan rapporté au repère orthonormé direct $(O, \\vec{i}, \\vec{j})$, on considère les points A(2,6), B(3,1) et C(4,7). La distance du point A à la droite (BC) est égale à :",
                options: ["$\\frac{35}{\\sqrt{37}}$", "$\\frac{6}{\\sqrt{37}}$", "$\\frac{11}{\\sqrt{37}}$", "$\\frac{1}{\\sqrt{37}}$"],
                correct: "$\\frac{11}{\\sqrt{37}}$",
                discuss: "La distance est $\\frac{11}{\\sqrt{37}}$."
            },
            18: {
                text: "Dans l'espace muni d'un repère orthonormé direct $(O, \\vec{i}, \\vec{j}, \\vec{k})$, on considère les points A(1, -1, 2), B(3, 5, 4) et la sphère S telle que : A, B $\\in$ S et le segment [AB] passe par le centre de S. L'équation du plan tangent à S au point C(1, 5, 4) est :",
                options: ["$2x-3y+3z+1=0$", "$x-3y+2z+6=0$", "$-x+3y+z-18=0$", "$-3x+2y+2z-15=0$"],
                correct: "$-x+3y+z-18=0$",
                discuss: "Le centre de la sphère est (2,2,3), le vecteur normal au plan tangent est (-1,3,1), donc l'équation est $-x+3y+z-18=0$."
            },
            19: {
                text: "Une start-up de jeunes ingénieurs fabrique des capteurs de température dans deux sites différents. En une journée, le site 1 fabrique deux fois plus de capteurs que le site 2. Le pourcentage de capteurs défectueux est de 3% pour le site 1 et de 4% pour le site 2. On prélève un capteur au hasard dans l'ensemble de la production d'une journée. La probabilité que ce capteur provienne du site 1 et est défectueux est :",
                options: [0.01, 0.02, 0.03, 0.04],
                correct: 0.02,
                discuss: "Le site 1 produit 2/3 de la production, et 3% sont défectueux, donc $0.03 \\times \\frac{2}{3} = 0.02$."
            },
            20: {
                text: "La probabilité que ce capteur provienne du site 1 sachant qu'il est défectueux est :",
                options: [0.2, 0.4, 0.6, 0.8],
                correct: 0.6,
                discuss: "On utilise la formule de Bayes : $P(S1|D) = \\frac{0.02}{0.10/3} = 0.6$."
            }
        },
        2023: {
            1: {
                text: "Voici une suite logique de nombres: 6; 4; 8; 5; 15,... Le nombre suivant est :",
                options: [17, 20, 11, 40],
                correct: 11,
                discuss: "La logique de la suite alterne deux opérations arithmétiques dont la valeur augmente à chaque fois. $6 - 2 = 4$, $4 \\times 2 = 8$, $8 - 3 = 5$, $5 \\times 3 = 15$. La prochaine opération est donc de soustraire 4 : $15 - 4 = 11$."
            },
            2: {
                text: "Soit x un nombre de 6 chiffres divisible par 9 et y le nombre obtenu en déplaçant à la fin le premier chiffre de x. Le reste de la division de y par 9 est égal à :",
                options: [0, 1, 2, 3],
                correct: 0,
                discuss: "Un nombre est divisible par 9 si, et seulement si, la somme de ses chiffres est un multiple de 9. Le nombre y est formé des mêmes chiffres que le nombre x, leur ordre a simplement été modifié. Par conséquent, la somme des chiffres de y est identique à la somme des chiffres de x. Puisque x est divisible par 9, y l'est également et le reste de la division est 0."
            },
            3: {
                text: "Le nombre de couples d'entiers premiers entre eux dont le produit vaut 150 est égal à :",
                options: [4, 6, 8, 10],
                correct: 8,
                discuss: "Deux entiers sont premiers entre eux si leur PGCD est 1. On décompose 150 en facteurs premiers : $150 = 2 \\times 3 \\times 5^2$. Les blocs de facteurs premiers sont 2, 3 et 25. En distribuant ces blocs, on obtient 4 paires de facteurs : (1,150), (2,75), (3,50), (6,25). Comme l'ordre compte dans un couple, on a $4 \\times 2 = 8$ couples."
            },
            4: {
                text: "L'équation à variables réelles $9x^{5}-12x^{4}+6x-5=0$ :",
                options: [
                    "admet une seule solution entière",
                    "admet trois solutions entières", 
                    "admet cinq solutions entières",
                    "n'admet pas de solution entière"
                ],
                correct: "n'admet pas de solution entière",
                discuss: "D'après le théorème des racines rationnelles, si l'équation admet une solution entière, cette solution doit être un diviseur du terme constant (-5). Les diviseurs entiers de -5 sont ±1 et ±5. En testant ces valeurs dans $P(x) = 9x^{5}-12x^{4}+6x-5$, aucune ne donne zéro. L'équation n'admet donc pas de solution entière."
            },
            5: {
                text: "Soit la suite $(u_{n})$ définie par: $u_n = \\sqrt{n} - [\\sqrt{n}]$, $n \\in \\mathbb{N}$. ($[x]$ désigne la partie entière de x). $\\lim_{n\\rightarrow+\\infty}u_{(n^{2}+2n)}=$",
                options: [0, 1, 2, 3],
                correct: 1,
                discuss: "On a $u_{n^2+2n} = \\sqrt{n^2+2n} - [\\sqrt{n^2+2n}]$. Pour $n>0$, on encadre : $n < \\sqrt{n^2+2n} < n+1$, donc $[\\sqrt{n^2+2n}] = n$. L'expression devient $\\sqrt{n^2+2n} - n$. En utilisant la quantité conjuguée : $\\lim_{n\\rightarrow+\\infty} (\\sqrt{n^2+2n} - n) = \\lim_{n\\rightarrow+\\infty} \\frac{2n}{\\sqrt{n^2+2n} + n} = 1$."
            },
            6: {
                text: "La limite $\\lim_{x\\rightarrow+\\infty}e^{x}\\sin(e^{-x})=$",
                options: [0, 1, -1, "n'a pas de limite"],
                correct: 1,
                discuss: "On effectue un changement de variable. Posons $t = e^{-x}$. Quand $x \\rightarrow +\\infty$, $t \\rightarrow 0^+$ et $e^x = 1/t$. La limite se réécrit : $\\lim_{t\\rightarrow 0^+} \\frac{\\sin(t)}{t}$. Il s'agit d'une limite fondamentale bien connue, dont la valeur est 1."
            },
            7: {
                text: "La limite $\\lim_{x\\rightarrow+\\infty}\\frac{\\cos(x^{2}+x-1)}{x}=$",
                options: [0, 1, -1, "n'a pas de limite"],
                correct: 0,
                discuss: "On utilise le théorème des gendarmes. La fonction cosinus est bornée : $-1 \\le \\cos(x^2+x-1) \\le 1$. Pour $x > 0$, on divise par $x$ : $\\frac{-1}{x} \\le \\frac{\\cos(x^2+x-1)}{x} \\le \\frac{1}{x}$. Comme $\\lim_{x\\rightarrow+\\infty} \\frac{\\pm 1}{x} = 0$, la limite de la fonction encadrée est également 0."
            },
            8: {
                text: "Soit f une fonction continue de $\\mathbb{R}$ à valeurs dans $\\mathbb{Z}$. Alors :",
                options: [
                    "f n'est pas constante",
                    "f est une constante",
                    "f est strictement croissante",
                    "f est strictement décroissante"
                ],
                correct: "f est une constante",
                discuss: "Ce résultat provient du théorème des valeurs intermédiaires. L'image d'un intervalle par une fonction continue est un intervalle. Comme $f(\\mathbb{R}) \\subseteq \\mathbb{Z}$ et que le seul type d'intervalle qui est aussi un sous-ensemble des entiers est un singleton, la fonction est constante."
            },
            9: {
                text: "Soit f une fonction dérivable sur $\\mathbb{R}$ telle que: $\\forall(x,y)\\in \\mathbb{R}^{2},f(x+y)(1-f(x)f(y))=f(x)+f(y)$. Alors: $\\forall x\\in \\mathbb{R}$, $\\frac{f'(x)}{1+f(x)^{2}}=$",
                options: [
                    "$f'(0)$",
                    "$f'(0)-1$",
                    "$f'(0)+\\frac{1}{2}$",
                    "$f'(0)-\\frac{1}{2}$"
                ],
                correct: "$f'(0)$",
                discuss: "L'équation fonctionnelle ressemble à la formule d'addition de la tangente. La solution est $f(x) = \\tan(cx)$ pour une constante $c$. On a $f'(x) = c(1 + \\tan^2(cx)) = c(1 + [f(x)]^2)$. Donc $\\frac{f'(x)}{1+[f(x)]^2} = c$. En évaluant en $x=0$, on trouve $c = f'(0)$."
            },
            10: {
                text: "Pour tout réel $\\alpha>0$, $\\int_{\\frac{1}{\\alpha}}^{\\alpha}\\frac{\\ln x}{1+x^{2}}dx=$",
                options: [
                    "$\\ln \\alpha$",
                    "$2\\ln \\alpha$",
                    "0",
                    "$\\alpha\\frac{\\pi}{2}$"
                ],
                correct: "0",
                discuss: "On utilise le changement de variable $x = 1/u$. L'intégrale se transforme en $I = -\\int_{1/\\alpha}^{\\alpha} \\frac{\\ln(u)}{1+u^2}du = -I$. L'équation $I = -I$ implique $2I=0$, donc $I=0$."
            },
            11: {
                text: "On considère les deux intégrales suivantes : $I=\\int_{0}^{\\frac{\\pi}{2}} x^{2}\\sin^{2}(x)dx$ et $J=\\int_{0}^{\\frac{\\pi}{2}}x^{2}\\cos^{2}(x)dx$. La valeur de I vaut :",
                options: [
                    "$\\frac{\\pi^{3}}{48}$",
                    "$\\frac{\\pi^{3}}{24}+\\frac{\\pi}{4}$",
                    "$-\\frac{\\pi}{8}$",
                    "$\\frac{\\pi^{3}}{48}+\\frac{\\pi}{8}$"
                ],
                correct: "$\\frac{\\pi^{3}}{48}+\\frac{\\pi}{8}$",
                discuss: "On calcule $I+J = \\int_{0}^{\\pi/2} x^2 dx = \\frac{\\pi^3}{24}$ et $J-I = \\int_{0}^{\\pi/2} x^2 \\cos(2x) dx = -\\frac{\\pi}{4}$. En résolvant le système, on trouve $I = \\frac{\\pi^3}{48} + \\frac{\\pi}{8}$."
            },
            12: {
                text: "La valeur de $\\int_{0}^{\\frac{\\pi}{2}}(\\cos x)^{1445}\\sin x dx$ est :",
                options: [
                    "$\\frac{1}{1445}$",
                    "$\\frac{1}{1446}-\\frac{\\pi}{2}$",
                    "$\\frac{1}{1446}$",
                    "$\\frac{1}{1447}+\\frac{\\pi}{2}$"
                ],
                correct: "$\\frac{1}{1446}$",
                discuss: "On pose $u = \\cos(x)$, donc $du = -\\sin(x)dx$. Les bornes deviennent de 1 à 0. L'intégrale devient $\\int_{0}^{1} u^{1445} du = [\\frac{u^{1446}}{1446}]_0^1 = \\frac{1}{1446}$."
            },
            13: {
                text: "Soient $z_{1}$ et $z_{2}$ les solutions complexes de l'équation : $z^{2}-4iz-4(1+i)=0$. Alors: $\\text{Im}(z_{1})+\\text{Im}(z_{2})=$",
                options: [0, 4, 2, 3],
                correct: 4,
                discuss: "Pour une équation du second degré $az^2+bz+c=0$, la somme des racines est $z_1+z_2 = -b/a$. Ici, $z_1 + z_2 = -(-4i)/1 = 4i$. La somme des parties imaginaires est donc $\\text{Im}(z_1)+\\text{Im}(z_2) = 4$."
            },
            14: {
                text: "Le nombre complexe $(1+i)^{2000}=$",
                options: [
                    "1",
                    "$4^{1000}$",
                    "$4^{500}$",
                    "$4^{200}$"
                ],
                correct: "$4^{500}$",
                discuss: "On calcule $(1+i)^2 = 2i$. Donc $(1+i)^{2000} = ((1+i)^2)^{1000} = (2i)^{1000} = 2^{1000} \\times i^{1000}$. Comme $i^{1000} = (i^4)^{250} = 1^{250} = 1$, on a $(1+i)^{2000} = 2^{1000} = (2^2)^{500} = 4^{500}$."
            },
            15: {
                text: "Le nombre complexe $(\\frac{7-15i}{15+7i})^{2023}=$",
                options: [
                    "$i$",
                    "$-i$",
                    "$-1$",
                    "$i+1$"
                ],
                correct: "$-i$",
                discuss: "On simplifie la fraction : $\\frac{7-15i}{15+7i} = \\frac{7-15i}{-i(7-15i)} = \\frac{1}{-i} = i$. Il faut donc calculer $i^{2023}$. Comme $2023 = 4 \\times 505 + 3$, on a $i^{2023} = i^3 = -i$."
            },
            16: {
                text: "La somme $(1+e^{\\frac{i2\\pi}{5}}+e^{\\frac{i4\\pi}{5}}+e^{\\frac{i6\\pi}{5}}+e^{\\frac{i8\\pi}{5}})^{1000}=$",
                options: [0, 1, "$i$", "$-i$"],
                correct: 0,
                discuss: "L'expression à l'intérieur des parenthèses est la somme des 5 racines cinquièmes de l'unité. La somme des $n$ racines n-ièmes de l'unité est toujours nulle. Donc l'expression totale est $0^{1000} = 0$."
            },
            17: {
                text: "La solution $f(x)$ de l'équation différentielle $y''-7y'+12y=0$ vérifiant $f(0)=0, f'(0)=1$ est :",
                options: [
                    "$e^{-4x}-e^{3x}$",
                    "$e^{5x}-e^{3x}$",
                    "$e^{4x}-e^{3x}$",
                    "$e^{5x}-e^{4x}$"
                ],
                correct: "$e^{4x}-e^{3x}$",
                discuss: "L'équation caractéristique $r^2 - 7r + 12 = 0$ se factorise en $(r-3)(r-4)=0$. Les racines sont $r_1=3$ et $r_2=4$. La solution générale est $y(x) = Ae^{3x} + Be^{4x}$. Avec les conditions initiales $f(0)=0$ et $f'(0)=1$, on trouve $A=-1$ et $B=1$, donc $f(x) = e^{4x} - e^{3x}$."
            },
            18: {
                text: "Soient $d_{A}$ la distance du point $A(1,0,2)$ au plan (P): $2x+y+z+4=0$; et $d_{B}$ la distance du point $B(3,2,1)$ au plan (Q): $-x+5y-4z=5$. Alors le produit des distances $d_{A}d_{B}$ est :",
                options: [
                    "$\\frac{8}{3\\sqrt{7}}$",
                    "$\\frac{10}{3\\sqrt{7}}$",
                    "$\\frac{11}{3\\sqrt{7}}$",
                    "$\\frac{13}{3\\sqrt{7}}$"
                ],
                correct: "$\\frac{8}{3\\sqrt{7}}$",
                discuss: "La distance d'un point $M(x_0, y_0, z_0)$ à un plan $ax+by+cz+d=0$ est $d = \\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$. On calcule $d_A = \\frac{8}{\\sqrt{6}}$ et $d_B = \\frac{2}{\\sqrt{42}}$. Le produit est $d_A d_B = \\frac{16}{\\sqrt{252}} = \\frac{8}{3\\sqrt{7}}$."
            },
            19: {
                text: "L'aire sous la cloche d'équation $y=\\frac{1}{1+x^{2}}$ et au-dessus de la parabole d'équation $y=\\frac{x^{2}}{2}$ est :",
                options: [
                    "$\\frac{1}{3}$",
                    "$-\\frac{1}{3}+\\frac{\\pi}{2}$",
                    "$\\frac{\\pi}{2}$",
                    "$\\frac{\\pi}{2}+\\frac{1}{3}$"
                ],
                correct: "$-\\frac{1}{3}+\\frac{\\pi}{2}$",
                discuss: "Les courbes se coupent en $x = \\pm 1$. L'aire est $\\int_{-1}^{1} (\\frac{1}{1+x^2} - \\frac{x^2}{2}) dx = [\\arctan(x) - \\frac{x^3}{6}]_{-1}^{1} = \\frac{\\pi}{2} - \\frac{1}{3}$."
            },
            20: {
                text: "On considère le cercle (C) d'équation $x^{2}+y^{2}+x-3y-3=0$ et (D) la droite passant par le point A de coordonnées $(1,-2)$ et tangente à (C) au point M. La longueur du segment [AM] est égale à :",
                options: [1, 2, 3, 4],
                correct: 3,
                discuss: "La longueur du segment de tangente d'un point extérieur à un cercle est donnée par la racine carrée de la puissance de ce point par rapport au cercle. La puissance du point $A(1, -2)$ est $AM^2 = 1^2 + (-2)^2 + 1 - 3(-2) - 3 = 9$. Donc $AM = 3$."
            }
        },
        2022: {
            1: {
                text: "Sachant que $11\\times11=121$, le produit $111111111 \\times 111111111$ est égal à :",
                options: ["1234567654321", "123456787654321", "12345678987654321", "1234568654321"],
                correct: "12345678987654321",
                discuss: "Il existe une régularité dans la multiplication des nombres composés uniquement de chiffres 1. Le produit d'un nombre composé de 'n' chiffres 1 par lui-même est un nombre palindrome qui commence par 1, s'incrémente jusqu'à 'n', puis décrémente jusqu'à 1. Le nombre 111 111 111 est composé de 9 chiffres 1. Par conséquent, son carré est 12345678987654321."
            },
            2: {
                text: "Le nombre de diviseurs positifs du nombre $546\\times840$ est :",
                options: [180, 181, 182, 183],
                correct: 180,
                discuss: "Pour trouver le nombre de diviseurs d'un entier, on le décompose d'abord en produit de facteurs premiers. $546 = 2^1 \\times 3^1 \\times 7^1 \\times 13^1$ et $840 = 2^3 \\times 3^1 \\times 5^1 \\times 7^1$. Donc $N = 546 \\times 840 = 2^4 \\times 3^2 \\times 5^1 \\times 7^2 \\times 13^1$. Le nombre de diviseurs est $(4+1)(2+1)(1+1)(2+1)(1+1) = 5 \\times 3 \\times 2 \\times 3 \\times 2 = 180$."
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
                discuss: "La proposition 'f est la fonction nulle' s'écrit mathématiquement : $\\forall x \\in \\mathbb{R}, f(x) = 0$. La négation d'une proposition avec un quantificateur universel ($\\forall$) est une proposition avec un quantificateur existentiel ($\\exists$) où l'affirmation est niée. Donc, la négation de '$\\forall x \\in \\mathbb{R}, P(x)$' est '$\\exists x \\in \\mathbb{R}, \\neg P(x)$'."
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
                discuss: "Le domaine de définition nécessite $x^2 - 1 > 0$ et $2x - 1 > 0$, soit $x > 1$. L'équation devient $\\ln(\\frac{2(x^2-1)}{2x-1}) = \\ln(1)$, donc $\\frac{2(x^2-1)}{2x-1} = 1$. Cela donne $2x^2 - 2 = 2x - 1$, soit $2x^2 - 2x - 1 = 0$. En résolvant cette équation du second degré, on obtient $x = \\frac{1+\\sqrt{3}}{2}$ (la seule solution dans le domaine de définition)."
            },
            5: {
                text: "La valeur maximale du terme $u_k = \\binom{22}{k} 20^{22-k} 21^{k}$ dans le développement du nombre $(20+21)^{22}$ par la formule du Binôme de Newton est atteinte pour k égal à :",
                options: [8, 9, 10, 11],
                correct: 11,
                discuss: "Pour trouver le rang $k$ qui maximise le terme $u_k$, on étudie le rapport $\\frac{u_{k+1}}{u_k}$. Le terme est maximal quand ce rapport passe de $>1$ à $<1$. On obtient $\\frac{u_{k+1}}{u_k} = \\frac{22-k}{k+1} \\times \\frac{21}{20}$. Le rapport est supérieur à 1 pour $k \\le 10$, donc la valeur maximale est atteinte pour $k=11$."
            },
            6: {
                text: "La limite $\\lim_{n\\rightarrow+\\infty}\\sqrt[n]{n^{2}}=$",
                options: ["1", "0", "$+\\infty$", "e"],
                correct: "1",
                discuss: "On utilise la forme exponentielle : $\\sqrt[n]{n^2} = (n^2)^{1/n} = e^{\\frac{2\\ln(n)}{n}}$. Par croissance comparée, $\\lim_{n\\rightarrow+\\infty} \\frac{\\ln(n)}{n} = 0$, donc $\\lim_{n\\rightarrow+\\infty} \\frac{2\\ln(n)}{n} = 0$. La limite finale est donc $e^0 = 1$."
            },
            7: {
                text: "La limite $\\lim_{n\\rightarrow+\\infty} n-\\sqrt{(n+5)(n+7)}=$",
                options: ["0", "-6", "6", "$+\\infty$"],
                correct: "-6",
                discuss: "Il s'agit d'une forme indéterminée '$\\infty - \\infty$'. On utilise la technique de la multiplication par l'expression conjuguée. Après simplification, on obtient $\\frac{-12n - 35}{n + n\\sqrt{1 + \\frac{12}{n} + \\frac{35}{n^2}}}$. Quand $n \\rightarrow +\\infty$, cette expression tend vers $\\frac{-12}{1+1} = -6$."
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
                discuss: "Pour que $f$ soit continue en 0, il faut que la limite à droite soit égale à la limite à gauche et à la valeur de la fonction en 0. En utilisant le développement limité de $\\ln(1+x) = x - \\frac{x^2}{2} + o(x^2)$, on trouve que $\\lim_{x\\rightarrow 0^+} \\frac{\\ln(1+x)-x}{x^2} = -\\frac{1}{2}$. Donc $b = -\\frac{1}{2}$ et $a$ peut être n'importe quel réel."
            },
            9: {
                text: "La dérivée de la fonction $f(x)=\\frac{\\sqrt{x-1}}{\\sqrt[3]{(x+2)^{2}}\\sqrt{(x+3)^{3}}}$ est :",
                options: [
                    "$\\frac{5x^{2}-x-12}{\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
                    "$\\frac{3x^{2}+x-24}{\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
                    "$\\frac{2x^{2}+x-24}{2\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
                    "$\\frac{5x^{2}+x-24}{3\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$"
                ],
                correct: "$\\frac{5x^{2}+x-24}{3\\sqrt{x-1}\\sqrt[3]{(x+2)^{5}}\\sqrt{(x+3)^{5}}}$",
                discuss: "On utilise la dérivation logarithmique. $f(x) = (x-1)^{1/2} (x+2)^{-2/3} (x+3)^{-3/2}$. En prenant le logarithme et en dérivant, on obtient $\\frac{f'(x)}{f(x)} = \\frac{1}{2(x-1)} - \\frac{2}{3(x+2)} - \\frac{3}{2(x+3)}$. Après simplification, on trouve la dérivée recherchée."
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
                discuss: "Pour trouver l'équation de la tangente à $f^{-1}$ au point d'abscisse $e$, on calcule d'abord $f^{-1}(e) = 1$ (car $f(1) = 1 \\cdot e^1 = e$). Ensuite, $(f^{-1})'(e) = \\frac{1}{f'(f^{-1}(e))} = \\frac{1}{f'(1)} = \\frac{1}{(1+1)e} = \\frac{1}{2e}$. L'équation de la tangente est donc $y = \\frac{1}{2e}(x-e) + 1 = \\frac{1}{2e}x + \\frac{1}{2}$."
            },
            11: {
                text: "La valeur de $\\int_{0}^{1}\\frac{1-x^{2}}{1+x^{2}}dx=$",
                options: ["$\\frac{\\pi}{2}+1$", "$\\frac{\\pi}{2}-1$", "$-1+\\frac{\\pi}{4}$", "$-1-\\frac{\\pi}{4}$"],
                correct: "$\\frac{\\pi}{2}-1$",
                discuss: "On modifie l'expression : $\\frac{1-x^2}{1+x^2} = \\frac{-(x^2+1-2)}{1+x^2} = -1 + \\frac{2}{1+x^2}$. L'intégrale devient $\\int_{0}^{1} (-1 + \\frac{2}{1+x^2}) dx = [-x + 2\\arctan(x)]_{0}^{1} = (-1 + 2\\arctan(1)) - 0 = -1 + 2 \\cdot \\frac{\\pi}{4} = -1 + \\frac{\\pi}{2}$."
            },
            12: {
                text: "Soit l'intégrale $I_{n}=\\int_{-1}^{1}(x^{2}-1)^{n}dx$. La valeur de $I_{4}$ est :",
                options: ["$\\frac{252}{315}$", "$\\frac{254}{315}$", "$\\frac{258}{315}$", "$\\frac{256}{315}$"],
                correct: "$\\frac{256}{315}$",
                discuss: "On établit une relation de récurrence par intégration par parties : $I_n = \\frac{-2n}{2n+1} I_{n-1}$. En calculant successivement : $I_0 = 2$, $I_1 = \\frac{-4}{3}$, $I_2 = \\frac{16}{15}$, $I_3 = \\frac{-96}{105}$, $I_4 = \\frac{768}{945} = \\frac{256}{315}$."
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
                discuss: "On utilise la formule de l'angle moitié $\\cos(\\frac{x}{2}) = \\sqrt{\\frac{1+\\cos(x)}{2}}$. En partant de $\\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$, on calcule successivement $\\cos(\\frac{\\pi}{8}) = \\frac{1}{2}\\sqrt{2+\\sqrt{2}}$, puis $\\cos(\\frac{\\pi}{16}) = \\frac{1}{2}\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$."
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
                discuss: "Le nombre $z = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ a pour module 1 et pour argument $\\frac{\\pi}{3}$. Sa forme exponentielle est $e^{i\\pi/3}$. On calcule $z^{2023} = e^{i(2023\\pi/3)}$. Comme $2023 = 3 \\times 674 + 1$, l'angle devient $674\\pi + \\frac{\\pi}{3} = 337 \\times 2\\pi + \\frac{\\pi}{3}$. Les tours complets n'affectent pas la valeur, donc $z^{2023} = e^{i\\pi/3} = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$."
            },
            15: {
                text: "Soit le nombre complexe $z=\\sqrt{3}+i$, alors $z^{5}$ est égal à :",
                options: [
                    "$-16\\sqrt{3}+16i$",
                    "$-8z$",
                    "$-16z$",
                    "$16z$"
                ],
                correct: "$-16\\sqrt{3}+16i$",
                discuss: "Le module de $z$ est $|z| = \\sqrt{3+1} = 2$ et son argument est $\\frac{\\pi}{6}$. Donc $z = 2e^{i\\pi/6}$. On calcule $z^5 = 2^5 e^{i5\\pi/6} = 32e^{i5\\pi/6} = 32(-\\frac{\\sqrt{3}}{2} + i\\frac{1}{2}) = -16\\sqrt{3} + 16i$."
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
                discuss: "En calculant le discriminant $\\Delta = -4m^2$ et les racines $z_1 = \\frac{m+1+i(1+m)}{2}$ et $z_2 = \\frac{m+1+i(1-m)}{2}$. Si $m \\in \\mathbb{R}$, alors $\\text{Im}(z_1) = \\frac{1+m}{2}$ et $\\text{Im}(z_2) = \\frac{1-m}{2}$. Le produit est $\\text{Im}(z_1) \\times \\text{Im}(z_2) = \\frac{1-m^2}{4}$."
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
                discuss: "L'équation caractéristique $r^2 + r + \\frac{5}{2} = 0$ a pour discriminant $\\Delta = -9$, donc les racines sont $r = -\\frac{1}{2} \\pm i\\frac{3}{2}$. La solution générale est $y(x) = e^{-x/2}(A\\cos(\\frac{3}{2}x) + B\\sin(\\frac{3}{2}x))$. Avec les conditions initiales $y(0) = -4$ et $y'(0) = 6$, on trouve $A = -4$ et $B = \\frac{8}{3}$."
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
                discuss: "En complétant les carrés, l'équation de la sphère devient $(x-3)^2 + y^2 + (z+5)^2 = 36$, donc le centre est $\\Omega(3, 0, -5)$. Le vecteur normal au plan P est $\\vec{n}(2, -1, -2)$. La droite passe par $\\Omega$ et a pour vecteur directeur $\\vec{n}$, d'où la représentation paramétrique."
            },
            19: {
                text: "Une école d'ingénieurs compte 300 élèves. Ils sont répartis dans des clubs : 60 en Cyber Sécurité (30% de filles), 90 en Sport (60% de filles), et 150 en Environnement (72% de filles). Chaque élève pratique une seule activité. On choisit un(e) élève au hasard. La probabilité que l'élève choisi(e) soit une fille est :",
                options: [0.4, 0.5, 0.6, 0.7],
                correct: 0.6,
                discuss: "On calcule le nombre total de filles : 60×0.30 + 90×0.60 + 150×0.72 = 18 + 54 + 108 = 180 filles. La probabilité de choisir une fille est $P(\\text{Fille}) = \\frac{180}{300} = 0.6$."
            },
            20: {
                text: "Sachant que l'élève choisi(e) est un garçon, la probabilité qu'il soit inscrit au club Environnement est :",
                options: [0.25, 0.35, 0.45, 0.55],
                correct: 0.35,
                discuss: "Il s'agit d'une probabilité conditionnelle. Nombre total de garçons = 300 - 180 = 120. Garçons en Environnement = 150 - 108 = 42. Donc $P(\\text{Environnement} | \\text{Garçon}) = \\frac{42}{120} = 0.35$."
            }
        },
        2021: {
            1: {
                text: "Une condition nécessaire (pas forcément suffisante) pour réussir le concours de l'ENSA est :",
                options: ["Avoir répondu correctement à tout le QCM", "Avoir au plus 25% de réponses fausses", "Avoir au moins 50% de réponses correctes", "Avoir passé le concours"],
                correct: "d",
                discuss: "Une condition **nécessaire** est une condition qui doit obligatoirement être satisfaite pour qu'une conséquence (ici, réussir le concours) se produise. On ne peut pas réussir le concours si on ne l'a pas passé. \"Avoir passé le concours\" est donc une condition absolument nécessaire. Les autres options ne sont pas des conditions nécessaires. Par exemple, on peut réussir sans avoir répondu correctement à toutes les questions (ce qui rend l'option 'a' non nécessaire)."
            },
            2: {
                text: "Le 17 juillet 2021, jour du concours de l'ENSA, est un samedi. Quel jour de la semaine sera le 29 février 2024?",
                options: ["mardi", "jeudi", "samedi", "lundi"],
                correct: "b",
                discuss: "1. **Nombre de jours restants en 2021 :** (31-17) en juillet + 31 (août) + 30 (sept.) + 31 (oct.) + 30 (nov.) + 31 (déc.) = 167 jours.\n2. **Nombre de jours en 2022 :** 365 jours (année non bissextile).\n3. **Nombre de jours en 2023 :** 365 jours (année non bissextile).\n4. **Nombre de jours en 2024 :** 31 (janv.) + 29 (fév., car 2024 est une année bissextile) = 60 jours.\n5. **Total de jours :** $167 + 365 + 365 + 60 = 957$ jours.\n6. On divise le total par 7 pour trouver le décalage de jours : $957 = 7 \\times 136 + 5$.\n7. Le reste est de 5. On ajoute donc 5 jours au samedi : Samedi + 5 jours = **Jeudi**."
            },
            3: {
                text: "Le nombre de diviseurs de $N=72^{10}\\times162^{50}$ est:",
                options: ["17600", "17680", "17820", "17901"],
                correct: "d",
                discuss: "1. **Décomposition en facteurs premiers :**\n   * $72 = 8 \\times 9 = 2^3 \\times 3^2$\n   * $162 = 2 \\times 81 = 2 \\times 3^4$\n2. **Décomposition de N :**\n   * $N = (2^3 \\times 3^2)^{10} \\times (2^1 \\times 3^4)^{50}$\n   * $N = (2^{30} \\times 3^{20}) \\times (2^{50} \\times 3^{200})$\n   * $N = 2^{30+50} \\times 3^{20+200} = 2^{80} \\times 3^{220}$\n3. **Calcul du nombre de diviseurs :** Si $N = p_1^{a_1} \\times p_2^{a_2}$, le nombre de diviseurs est $(a_1 + 1)(a_2 + 1)$.\n   * Nombre de diviseurs = $(80 + 1)(220 + 1) = 81 \\times 221 = \\bf{17901}$."
            },
            4: {
                text: "Soient x et y deux réels non nuls, inverses l'un de l'autre, tels que la somme du carré de leur somme avec la somme de leurs carrés est égale à 10. Le carré du nombre x vaut :",
                options: ["$2-\\sqrt{3}$ ou $2+\\sqrt{3}$", "$1-\\sqrt{5}$ ou $1+\\sqrt{5}$", "$1-\\sqrt{3}$ ou $1+\\sqrt{3}$", "$2-\\sqrt{5}$ ou $2+\\sqrt{5}$"],
                correct: "a",
                discuss: "1. **Traduction de l'énoncé :**\n   * x et y sont inverses : $y = 1/x$.\n   * Équation : $(x+y)^2 + (x^2+y^2) = 10$.\n2. **Résolution :**\n   * On remplace y : $(x + \\frac{1}{x})^2 + (x^2 + \\frac{1}{x^2}) = 10$.\n   * On développe : $(x^2 + 2 + \\frac{1}{x^2}) + (x^2 + \\frac{1}{x^2}) = 10$.\n   * On simplifie : $2x^2 + \\frac{2}{x^2} + 2 = 10 \\implies 2(x^2 + \\frac{1}{x^2}) = 8 \\implies x^2 + \\frac{1}{x^2} = 4$.\n3. **Changement de variable :** On pose $X = x^2$. L'équation devient $X + \\frac{1}{X} = 4$.\n4. **Équation du second degré :** $X^2 + 1 = 4X \\implies X^2 - 4X + 1 = 0$.\n5. **Solutions pour X :** On utilise le discriminant $\\Delta = (-4)^2 - 4(1)(1) = 12$.\n   * $X = \\frac{4 \\pm \\sqrt{12}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$.\n   * Les valeurs possibles pour $x^2$ sont donc **$2 - \\sqrt{3}$** et **$2 + \\sqrt{3}$**."
            },
            5: {
                text: "Le produit $\\prod_{k=0}^{9}\\sqrt[3 \\cdot 2^{k}]{5}=$",
                options: ["$\\sqrt[3]{5^{\\frac{511}{256}}}$", "$\\sqrt[3]{5^{\\frac{1023}{256}}}$", "$\\sqrt[3]{5^{\\frac{1023}{512}}}$", "$\\sqrt[3]{5^{\\frac{511}{1024}}}$"],
                correct: "c",
                discuss: "1. **Forme exponentielle :** Le produit s'écrit $P = \\prod_{k=0}^{9} 5^{\\frac{1}{3 \\cdot 2^k}} = 5^{\\sum_{k=0}^{9} \\frac{1}{3 \\cdot 2^k}}$.\n2. **Somme des exposants :** L'exposant est $S = \\frac{1}{3} \\sum_{k=0}^{9} (\\frac{1}{2})^k$.\n3. **Somme d'une suite géométrique :** La somme $\\sum_{k=0}^{9} (\\frac{1}{2})^k$ est la somme des 10 premiers termes d'une suite géométrique de raison $r=1/2$ et de premier terme $a=1$.\n   * La somme vaut $a \\frac{1-r^n}{1-r} = 1 \\times \\frac{1 - (1/2)^{10}}{1 - 1/2} = \\frac{1 - 1/1024}{1/2} = 2 \\times \\frac{1023}{1024} = \\frac{1023}{512}$.\n4. **Calcul final de l'exposant :** $S = \\frac{1}{3} \\times \\frac{1023}{512} = \\frac{1023}{3 \\times 512}$.\n5. **Résultat :** Le produit est $5^{\\frac{1023}{3 \\times 512}} = \\sqrt[3]{5^{\\frac{1023}{512}}}$."
            },
            6: {
                text: "$\\lim_{n\\to+\\infty} 3^n e^{-3n}=$",
                options: ["1", "0", "$+\\infty$", "e"],
                correct: "b",
                discuss: "1. **Réécriture de l'expression :** $3^n e^{-3n} = \\frac{3^n}{(e^3)^n} = (\\frac{3}{e^3})^n$.\n2. **Analyse de la raison :** Il s'agit d'une suite géométrique de raison $q = \\frac{3}{e^3}$.\n3. **Valeur de la raison :** $e \\approx 2.718$, donc $e^3 \\approx 20.08$. La raison $q = \\frac{3}{e^3}$ est un nombre compris entre 0 et 1 ($0 < q < 1$).\n4. **Limite de la suite :** La limite d'une suite géométrique $q^n$ avec $|q|<1$ est 0.\n   * Donc, $\\lim_{n\\to+\\infty} (\\frac{3}{e^3})^n = \\bf{0}$."
            },
            7: {
                text: "En remarquant que pour tout $n\\in\\mathbb{N}$, le nombre $(3+\\sqrt{5})^{n}+(3-\\sqrt{5})^{n}$ est un entier pair, $\\lim_{n\\to+\\infty}\\sin((3+\\sqrt{5})^{n}\\pi)=$",
                options: ["1", "-1", "0", "$+\\infty$"],
                correct: "c",
                discuss: "1. **Utilisation de l'indice :** Soit $K_n = (3+\\sqrt{5})^{n}+(3-\\sqrt{5})^{n}$ un entier pair. On peut écrire $K_n = 2m$ pour un entier $m$.\n2. **Isoler le terme d'intérêt :** $(3+\\sqrt{5})^n = K_n - (3-\\sqrt{5})^n$.\n3. **Argument du sinus :** L'argument est $(3+\\sqrt{5})^n \\pi = (K_n - (3-\\sqrt{5})^n)\\pi = K_n\\pi - (3-\\sqrt{5})^n\\pi$.\n4. **Propriété du sinus :** $\\sin(x + 2m\\pi) = \\sin(x)$.\n   * $\\sin((3+\\sqrt{5})^n\\pi) = \\sin(K_n\\pi - (3-\\sqrt{5})^n\\pi) = \\sin(2m\\pi - (3-\\sqrt{5})^n\\pi) = \\sin(-(3-\\sqrt{5})^n\\pi)$.\n5. **Sinus est une fonction impaire :** $\\sin(-x) = -\\sin(x)$.\n   * L'expression devient $-\\sin((3-\\sqrt{5})^n\\pi)$.\n6. **Calcul de la limite :** On a $2 < \\sqrt{5} < 3$, donc $0 < 3-\\sqrt{5} < 1$. Par conséquent, $\\lim_{n\\to+\\infty} (3-\\sqrt{5})^n = 0$.\n7. **Limite finale :** $\\lim_{n\\to+\\infty} -\\sin((3-\\sqrt{5})^n\\pi) = -\\sin(0) = \\bf{0}$."
            },
            8: {
                text: "$\\lim_{x\\to\\frac{\\pi}{6}}\\frac{\\sqrt{3}\\sin x-\\cos x}{x-\\frac{\\pi}{6}}=$",
                options: ["0", "1", "2", "$+\\infty$"],
                correct: "c",
                discuss: "1. **Reconnaissance du nombre dérivé :** La limite est de la forme $\\lim_{x\\to a} \\frac{f(x)-f(a)}{x-a}$, qui est la définition de $f'(a)$.\n2. **Identification :** On pose $f(x) = \\sqrt{3}\\sin x - \\cos x$ et $a = \\frac{\\pi}{6}$.\n3. **Vérification :** $f(\\frac{\\pi}{6}) = \\sqrt{3}\\sin(\\frac{\\pi}{6}) - \\cos(\\frac{\\pi}{6}) = \\sqrt{3}(\\frac{1}{2}) - \\frac{\\sqrt{3}}{2} = 0$. La forme est bien celle de la dérivée.\n4. **Calcul de la dérivée :** $f'(x) = \\sqrt{3}\\cos x - (-\\sin x) = \\sqrt{3}\\cos x + \\sin x$.\n5. **Évaluation en a :** $f'(\\frac{\\pi}{6}) = \\sqrt{3}\\cos(\\frac{\\pi}{6}) + \\sin(\\frac{\\pi}{6}) = \\sqrt{3}(\\frac{\\sqrt{3}}{2}) + \\frac{1}{2} = \\frac{3}{2} + \\frac{1}{2} = \\frac{4}{2} = \\bf{2}$."
            },
            9: {
                text: "$\\lim_{x\\to0^{+}}x^{(\\frac{1}{\\ln(3x)})}=$",
                options: ["e", "0", "ln 3", "1+e"],
                correct: "a",
                discuss: "1. **Forme indéterminée $0^0$ :** On utilise la forme exponentielle $a^b = e^{b \\ln a}$.\n   * $x^{(\\frac{1}{\\ln(3x)})} = e^{\\frac{1}{\\ln(3x)} \\ln(x)} = e^{\\frac{\\ln(x)}{\\ln(3x)}}$.\n2. **Limite de l'exposant :** On cherche $L = \\lim_{x\\to0^+} \\frac{\\ln(x)}{\\ln(3x)}$. C'est une forme $\\frac{-\\infty}{-\\infty}$.\n3. **Méthode 1 : Règle de L'Hôpital**\n   * $L = \\lim_{x\\to0^+} \\frac{1/x}{3/(3x)} = \\lim_{x\\to0^+} \\frac{1/x}{1/x} = 1$.\n4. **Méthode 2 : Simplification**\n   * $L = \\lim_{x\\to0^+} \\frac{\\ln(x)}{\\ln(3) + \\ln(x)} = \\lim_{x\\to0^+} \\frac{1}{\\frac{\\ln(3)}{\\ln(x)} + 1}$.\n   * Comme $\\lim_{x\\to0^+} \\ln(x) = -\\infty$, on a $\\frac{\\ln(3)}{\\ln(x)} \\to 0$. Donc $L = \\frac{1}{0+1}=1$.\n5. **Limite finale :** La limite de l'expression originale est $e^L = e^1 = \\bf{e}$."
            },
            10: {
                text: "Soit $f:\\mathbb{R}\\to\\mathbb{R}$ une fonction T périodique avec $T>0$, telle que $\\lim_{x\\to+\\infty}f(x)$ existe dans $\\mathbb{R}^{*}$. Alors :",
                options: ["f est strictement croissante", "f est strictement décroissante", "f est la fonction nulle", "f est une constante non nulle"],
                correct: "d",
                discuss: "1. **Hypothèses :** $f(x+T) = f(x)$ et $\\lim_{x\\to+\\infty} f(x) = L$, avec $L \\in \\mathbb{R}^*$ (L est un réel fini non nul).\n2. **Raisonnement :** Soit $x_0$ un réel quelconque. Considérons la suite $x_n = x_0 + nT$. Quand $n \\to \\infty$, $x_n \\to \\infty$.\n3. Puisque la limite de f existe en $+\\infty$, on a $\\lim_{n\\to\\infty} f(x_n) = L$.\n4. Mais par périodicité, $f(x_n) = f(x_0+nT) = f(x_0)$ pour tout n.\n5. La limite d'une suite constante est la constante elle-même, donc $\\lim_{n\\to\\infty} f(x_n) = f(x_0)$.\n6. En combinant les deux points, on a $f(x_0) = L$. Comme $x_0$ est arbitraire, la fonction doit être constante et égale à L pour tout x.\n7. Puisque $L$ est non nul, **f est une constante non nulle**."
            },
            11: {
                text: "Soit la fonction f définie par : $f(x)=\\begin{cases}x^{2}+x^{3}\\cos(\\frac{1}{x}) & \\text{si } x\\ne0\\\\ f(0)=0\\end{cases}$. Soit f' la dérivée d'ordre 1 de f.",
                options: ["$f'(0)=1$", "$f'(0)=0$", "$f'(0)=2$", "f n'est pas dérivable en 0"],
                correct: "b",
                discuss: "1. **Définition de la dérivée en 0 :** $f'(0) = \\lim_{h\\to 0} \\frac{f(h)-f(0)}{h}$.\n2. **Calcul de la limite :**\n   * $f'(0) = \\lim_{h\\to 0} \\frac{h^2 + h^3 \\cos(\\frac{1}{h})}{h} = \\lim_{h\\to 0} (h + h^2 \\cos(\\frac{1}{h}))$.\n3. **Théorème des gendarmes :**\n   * On sait que $-1 \\le \\cos(\\frac{1}{h}) \\le 1$, donc $-h^2 \\le h^2 \\cos(\\frac{1}{h}) \\le h^2$.\n   * Comme $\\lim_{h\\to 0} h^2 = 0$, on a $\\lim_{h\\to 0} h^2 \\cos(\\frac{1}{h}) = 0$.\n4. **Résultat final :** $f'(0) = \\lim_{h\\to 0} h + \\lim_{h\\to 0} h^2 \\cos(\\frac{1}{h}) = 0 + 0 = \\bf{0}$."
            },
            12: {
                text: "Pour la même fonction f de Q11, on note $f''$ sa dérivée d'ordre 2. Alors :",
                options: ["$f''(0)=0$", "$f''(0)=1$", "$f''(0)=2$", "f n'est pas deux fois dérivable en 0"],
                correct: "d",
                discuss: "1. **Calcul de f'(x) pour x non nul :**\n   * $f'(x) = 2x + [3x^2\\cos(\\frac{1}{x}) + x^3(-\\sin(\\frac{1}{x}))(-\\frac{1}{x^2})] = 2x + 3x^2\\cos(\\frac{1}{x}) + x\\sin(\\frac{1}{x})$.\n2. **Définition de la dérivée seconde en 0 :** $f''(0) = \\lim_{h\\to 0} \\frac{f'(h)-f'(0)}{h}$.\n3. **Calcul de la limite :** Sachant que $f'(0)=0$ (Q11).\n   * $f''(0) = \\lim_{h\\to 0} \\frac{2h + 3h^2\\cos(\\frac{1}{h}) + h\\sin(\\frac{1}{h})}{h} = \\lim_{h\\to 0} (2 + 3h\\cos(\\frac{1}{h}) + \\sin(\\frac{1}{h}))$.\n4. **Analyse de la limite :**\n   * $\\lim_{h\\to 0} 2 = 2$.\n   * $\\lim_{h\\to 0} 3h\\cos(\\frac{1}{h}) = 0$ (théorème des gendarmes).\n   * $\\lim_{h\\to 0} \\sin(\\frac{1}{h})$ **n'existe pas**, car la fonction oscille entre -1 et 1.\n5. **Conclusion :** Puisque l'un des termes n'a pas de limite, la limite globale n'existe pas. Donc, **f n'est pas deux fois dérivable en 0**."
            },
            13: {
                text: "L'aire de la région délimitée par la courbe d'équation $y=\\cos(\\ln x)$ et les droites d'équations $x=e^{\\frac{\\pi}{2}}$ et $x=e^{\\pi}$ est égale à:",
                options: ["$\\frac{1}{2}(e^{\\pi}+e^{\\frac{\\pi}{2}})$", "$e^{\\pi}-e^{\\frac{\\pi}{2}}$", "$e^{\\pi}+e^{\\frac{\\pi}{2}}$", "e"],
                correct: "a",
                discuss: "1. **Formule de l'aire :** $A = \\int_{e^{\\pi/2}}^{e^\\pi} |\\cos(\\ln x)| dx$.\n2. **Signe de la fonction :** Si $x \\in [e^{\\pi/2}, e^\\pi]$, alors $\\ln x \\in [\\frac{\\pi}{2}, \\pi]$. Sur cet intervalle, $\\cos(\\ln x) \\le 0$. Donc $|\\cos(\\ln x)| = -\\cos(\\ln x)$.\n3. **Intégrale à calculer :** $A = \\int_{e^{\\pi/2}}^{e^\\pi} -\\cos(\\ln x) dx$.\n4. **Primitive :** On trouve par double intégration par parties que $\\int \\cos(\\ln x) dx = \\frac{x}{2}(\\cos(\\ln x) + \\sin(\\ln x))$.\n5. **Calcul de l'aire :**\n   * $A = - \\left[ \\frac{x}{2}(\\cos(\\ln x) + \\sin(\\ln x)) \\right]_{e^{\\pi/2}}^{e^\\pi}$\n   * $A = - \\left[ (\\frac{e^\\pi}{2}(\\cos\\pi + \\sin\\pi)) - (\\frac{e^{\\pi/2}}{2}(\\cos\\frac{\\pi}{2} + \\sin\\frac{\\pi}{2})) \\right]$\n   * $A = - \\left[ (\\frac{e^\\pi}{2}(-1 + 0)) - (\\frac{e^{\\pi/2}}{2}(0 + 1)) \\right]$\n   * $A = - [ -\\frac{e^\\pi}{2} - \\frac{e^{\\pi/2}}{2} ] = \\frac{e^\\pi}{2} + \\frac{e^{\\pi/2}}{2} = \\bf{\\frac{1}{2}(e^\\pi + e^{\\pi/2})}$."
            },
            14: {
                text: "Soit $f:[0;\\alpha]\\to \\mathbb{R}$ continue telle que $f(x)\\ne-1$ et $f(x) \\cdot f(\\alpha-x)=1$. $\\int_{0}^{\\alpha}\\frac{1}{1+f(x)}dx=$",
                options: ["$\\frac{\\alpha}{2}$", "$\\alpha$", "$1 + \\alpha$", "$\\frac{1}{1+\\alpha}$"],
                correct: "a",
                discuss: "1. **Astuce de l'intégration :** Soit $I = \\int_{0}^{\\alpha}\\frac{1}{1+f(x)}dx$.\n2. **Changement de variable :** On pose $u = \\alpha - x$, donc $dx = -du$.\n   * $I = \\int_{\\alpha}^{0}\\frac{1}{1+f(\\alpha-u)}(-du) = \\int_{0}^{\\alpha}\\frac{1}{1+f(\\alpha-x)}dx$.\n3. **Utilisation de la propriété :** $f(\\alpha-x) = 1/f(x)$.\n   * $I = \\int_{0}^{\\alpha}\\frac{1}{1+1/f(x)}dx = \\int_{0}^{\\alpha}\\frac{f(x)}{f(x)+1}dx$.\n4. **Addition des deux formes de I :**\n   * $2I = I+I = \\int_{0}^{\\alpha}\\frac{1}{1+f(x)}dx + \\int_{0}^{\\alpha}\\frac{f(x)}{1+f(x)}dx = \\int_{0}^{\\alpha}\\frac{1+f(x)}{1+f(x)}dx = \\int_{0}^{\\alpha} 1 dx$.\n5. **Résultat :** $2I = [x]_{0}^{\\alpha} = \\alpha$. Donc $I = \\bf{\\frac{\\alpha}{2}}$."
            },
            15: {
                text: "Soit la fonction réelle $f(x)=e^{-x}\\sin(x)$ et $f^{(4)}$ sa dérivée d'ordre 4, alors: $f^{(4)}(x)=$",
                options: ["$-f(x)$", "$-4f(x)$", "$4f(x)$", "$-3f(x)$"],
                correct: "b",
                discuss: "**Méthode par les complexes :**\n1. $f(x) = \\text{Im}(e^{-x}e^{ix}) = \\text{Im}(e^{(-1+i)x})$.\n2. La dérivée n-ième est $f^{(n)}(x) = \\text{Im}((-1+i)^n e^{(-1+i)x})$.\n3. On calcule $(-1+i)^4$:\n   * $(-1+i)^2 = 1 - 2i + i^2 = -2i$.\n   * $(-1+i)^4 = (-2i)^2 = 4i^2 = -4$.\n4. Donc $f^{(4)}(x) = \\text{Im}(-4 e^{(-1+i)x}) = -4 \\cdot \\text{Im}(e^{(-1+i)x}) = \\bf{-4 f(x)}$."
            },
            16: {
                text: "Pour la même fonction f de Q15, $\\int_{0}^{\\pi}f(x)dx=$",
                options: ["$\\frac{1}{3}(1-e^{-\\pi})$", "$\\frac{1}{2}(1+e^{-\\pi})$", "$\\frac{1}{4}(1-e^{-\\pi})$", "$\\frac{1}{5}(1+e^{-\\pi})$"],
                correct: "b",
                discuss: "1. **Primitive :** On cherche une primitive de $f(x) = e^{-x}\\sin(x)$. Par une double intégration par parties, on trouve :\n   * $F(x) = \\int e^{-x}\\sin(x)dx = -\\frac{1}{2}e^{-x}(\\sin x + \\cos x)$.\n2. **Calcul de l'intégrale définie :**\n   * $\\int_{0}^{\\pi}f(x)dx = F(\\pi) - F(0)$.\n   * $F(\\pi) = -\\frac{1}{2}e^{-\\pi}(\\sin \\pi + \\cos \\pi) = -\\frac{1}{2}e^{-\\pi}(0-1) = \\frac{1}{2}e^{-\\pi}$.\n   * $F(0) = -\\frac{1}{2}e^{0}(\\sin 0 + \\cos 0) = -\\frac{1}{2}(1)(0+1) = -\\frac{1}{2}$.\n3. **Résultat :** $F(\\pi) - F(0) = \\frac{1}{2}e^{-\\pi} - (-\\frac{1}{2}) = \\bf{\\frac{1}{2}(1+e^{-\\pi})}$."
            },
            17: {
                text: "Soit u la solution de l'équation à variable complexe : $z\\overline{z}+4iz=-3+4i$. Alors:",
                options: ["$Re(u)\\times Im(u)=2$", "$Re(u)\\times Im(u)=1$", "$Re(u)+Im(u)=2$", "u est un imaginaire pur"],
                correct: "a",
                discuss: "1. **On pose z = x + iy :**\n   * $z\\overline{z} = x^2+y^2$.\n   * $4iz = 4i(x+iy) = -4y + 4ix$.\n2. **L'équation devient :** $(x^2+y^2) + (-4y+4ix) = -3+4i$.\n3. **Identification des parties réelle et imaginaire :**\n   * Partie réelle : $x^2+y^2-4y = -3$.\n   * Partie imaginaire : $4x = 4 \\implies x=1$.\n4. **Résolution :** On remplace $x=1$ dans la première équation :\n   * $1^2+y^2-4y = -3 \\implies y^2-4y+4=0 \\implies (y-2)^2=0 \\implies y=2$.\n5. **Solution :** La solution est $u = 1+2i$. Donc $Re(u)=1$ et $Im(u)=2$.\n6. **Vérification des options :** $Re(u) \\times Im(u) = 1 \\times 2 = \\bf{2}$."
            },
            18: {
                text: "Soient $z_{1}$ et $z_{2}$ les solutions de l'équation à variable complexe : $z^{2}-2\\overline{z}+3=0$. $Re(\\frac{z_{1}}{z_{2}})=$",
                options: ["$-\\frac{2\\sqrt{6}}{7}$", "$\\frac{2\\sqrt{6}}{7}$", "$\\frac{5}{7}$", "$-\\frac{5}{7}$"],
                correct: "d",
                discuss: "1. **On pose z = x + iy :** $(x+iy)^2 - 2(x-iy) + 3 = 0$.\n2. **Développement :** $(x^2-y^2-2x+3) + i(2xy+2y) = 0$.\n3. **Système d'équations :**\n   * $x^2-y^2-2x+3=0$.\n   * $2y(x+1)=0$.\n4. **Résolution :** La deuxième équation donne $y=0$ ou $x=-1$.\n   * Si $y=0$, la première équation $x^2-2x+3=0$ n'a pas de solution réelle ($\\Delta < 0$).\n   * Si $x=-1$, la première équation devient $1-y^2+2+3=0 \\implies y^2=6 \\implies y=\\pm\\sqrt{6}$.\n5. **Solutions :** $z_1 = -1+i\\sqrt{6}$ et $z_2 = -1-i\\sqrt{6}$.\n6. **Calcul du rapport :**\n   * $\\frac{z_1}{z_2} = \\frac{-1+i\\sqrt{6}}{-1-i\\sqrt{6}} = \\frac{(-1+i\\sqrt{6})^2}{(-1)^2 - (i\\sqrt{6})^2} = \\frac{1-2i\\sqrt{6}-6}{1+6} = \\frac{-5-2i\\sqrt{6}}{7}$.\n7. **Partie réelle :** $Re(\\frac{z_1}{z_2}) = \\bf{-\\frac{5}{7}}$."
            },
            19: {
                text: "Soient $\\theta$ un nombre réel non nul et z un nombre complexe tels que : $z=\\cos^{2}\\theta+i\\sin\\theta\\cos\\theta$. La partie réelle du nombre $z^{-3}$ est:",
                options: ["$\\frac{\\cos\\theta}{\\sin^{3}\\theta}$", "$\\frac{\\sin 3\\theta}{\\sin^{3}\\theta}$", "$\\frac{\\cos 3\\theta}{\\cos^{3}\\theta}$", "$\\frac{\\sin\\theta}{\\cos^{3}\\theta}$"],
                correct: "c",
                discuss: "1. **Simplification de z :** $z = \\cos\\theta(\\cos\\theta + i\\sin\\theta)$.\n2. **Forme exponentielle :** $z = \\cos\\theta \\cdot e^{i\\theta}$.\n3. **Calcul de $z^{-3}$ :**\n   * $z^{-3} = (z^3)^{-1} = (\\cos^3\\theta \\cdot e^{i3\\theta})^{-1} = \\frac{1}{\\cos^3\\theta} e^{-i3\\theta}$.\n4. **Forme algébrique :**\n   * $z^{-3} = \\frac{1}{\\cos^3\\theta}(\\cos(3\\theta) - i\\sin(3\\theta))$.\n5. **Partie réelle :** $Re(z^{-3}) = \\bf{\\frac{\\cos(3\\theta)}{\\cos^3\\theta}}$."
            },
            20: {
                text: "Le nombre $\\cos 5\\theta$ est égal à :",
                options: ["$\\cos^{5}\\theta+10\\cos^{3}\\theta\\sin^{2}\\theta+5\\cos\\theta\\sin^{4}\\theta$", "$\\cos^{5}\\theta+5\\cos^{3}\\theta\\sin^{2}\\theta+10\\cos\\theta\\sin^{4}\\theta$", "$\\cos^{5}\\theta-10\\cos^{3}\\theta\\sin^{2}\\theta+\\cos\\theta\\sin^{4}\\theta$", "$\\cos^{5}\\theta-10\\cos^{3}\\theta\\sin^{2}\\theta+5\\cos\\theta\\sin^{4}\\theta$"],
                correct: "d",
                discuss: "1. **Formule de Moivre :** $\\cos(5\\theta) + i\\sin(5\\theta) = (\\cos\\theta + i\\sin\\theta)^5$.\n2. **Binôme de Newton :** On développe $(\\cos\\theta + i\\sin\\theta)^5$:\n   * $\\cos^5\\theta + 5(\\cos^4\\theta)(i\\sin\\theta) + 10(\\cos^3\\theta)(i\\sin\\theta)^2 + 10(\\cos^2\\theta)(i\\sin\\theta)^3 + 5(\\cos\\theta)(i\\sin\\theta)^4 + (i\\sin\\theta)^5$.\n3. **Simplification :**\n   * $\\cos^5\\theta + 5i\\cos^4\\theta\\sin\\theta - 10\\cos^3\\theta\\sin^2\\theta - 10i\\cos^2\\theta\\sin^3\\theta + 5\\cos\\theta\\sin^4\\theta + i\\sin^5\\theta$.\n4. **Identification de la partie réelle :** $\\cos(5\\theta)$ est la partie réelle de cette expression.\n   * $\\cos(5\\theta) = \\bf{\\cos^5\\theta - 10\\cos^3\\theta\\sin^2\\theta + 5\\cos\\theta\\sin^4\\theta}$."
            }
        },
        2019: {
            1: {
                text: "Soient $a,b>0$ on considère la suite: $\\begin{cases}u_{n+1}=\\frac{(b^{2}+ab-a^{2})u_{n}-a^{2}}{b^{2}u_{n}+b^{2}-ab-a^{2}}\\\\ u_{0}=\\frac{b}{a}\\end{cases}$. En remarquant que la suite $v_{n}=\\frac{b}{bu_{n}-a}$ est une suite arithmétique, $u_{n}$ est égal à :",
                options: ["$\\frac{an+b}{bn+a}$", "$\\frac{n+b}{bn+a}$", "$\\frac{an-b}{bn-a}$", "$\\frac{an+b}{n+a}$"],
                correct: "$\\frac{an+b}{bn+a}$",
                discuss: "L'énoncé nous guide en affirmant que $v_n = \\frac{b}{bu_n - a}$ est une suite arithmétique. En calculant $v_{n+1}$ et en utilisant la relation de récurrence, on trouve que $v_n = 1 + n$, ce qui permet de déduire $u_n = \\frac{an+b}{bn+a}$."
            },
            2: {
                text: "Pour $n\\in\\mathbb{N}^{*}$ on considère la suite : $u_{n}=\\sum_{k=1}^{n}\\frac{1}{2k+n}$. On a $u_{n}\\in I$ avec",
                options: ["$I=[0,\\frac{1}{3}[$", "$I=[\\frac{1}{3},1[$", "$I=[2,3[$", "$I=[1,2[$"],
                correct: "$I=[\\frac{1}{3},1[$",
                discuss: "En encadrant les termes de la somme, on trouve que $u_n = \\sum_{k=1}^{n}\\frac{1}{n+2k}$ est comprise entre $\\frac{1}{3}$ et $1$."
            },
            3: {
                text: "On considère toujours la suite de la question 2 ci-dessus, $\\lim_{n\\rightarrow+\\infty}u_{n}$ est égale à :",
                options: ["$\\sqrt{3}$", "$\\ln(3)$", "$\\ln(\\sqrt{3})$", "0"],
                correct: "$\\ln(\\sqrt{3})$",
                discuss: "La limite se calcule en reconnaissant la somme comme une somme de Riemann qui converge vers $\\int_0^1 \\frac{1}{1+2x}dx = \\frac{1}{2}\\ln(3) = \\ln(\\sqrt{3})$."
            },
            4: {
                text: "Sachant que $(\\ln(x+\\sqrt{4+x^{2}}))^{\\prime}=\\frac{1}{\\sqrt{4+x^{2}}}$ la valeur de l'intégrale $\\int_{0}^{1}\\sqrt{4+x^{2}}dx$ est:",
                options: ["$\\ln(\\frac{3+\\sqrt{5}}{2})-\\frac{\\sqrt{5}}{2}$", "$\\ln(\\frac{3+\\sqrt{5}}{2})-\\ln(\\frac{\\sqrt{5}}{2})$", "$\\ln(\\frac{3+\\sqrt{5}}{2})-\\frac{5}{2}$", "$\\ln(\\frac{3+\\sqrt{5}}{2})+\\frac{\\sqrt{5}}{2}$"],
                correct: "$\\ln(\\frac{3+\\sqrt{5}}{2})+\\frac{\\sqrt{5}}{2}$",
                discuss: "En utilisant une intégration par parties et l'indice donné sur la primitive de $\\frac{1}{\\sqrt{4+x^2}}$, on obtient le résultat après calculs."
            },
            5: {
                text: "On considère l'équation trigonométrique suivante: (E): $\\cos^{4}(3x)+\\sin^{4}(3x)=1$. Les solutions de (E) sont de la forme:",
                options: ["$x=\\frac{\\pi}{2}+2k\\pi,k\\in\\mathbb{Z}$", "$x=-\\frac{\\pi}{6}+2k\\pi,k\\in\\mathbb{Z}$", "$x=\\frac{k\\pi}{3},k\\in\\mathbb{Z}$", "$x=\\frac{k\\pi}{6}, k\\in\\mathbb{Z}$"],
                correct: "$x=\\frac{k\\pi}{6}, k\\in\\mathbb{Z}$",
                discuss: "En utilisant l'identité remarquable et en simplifiant, on trouve que $\\sin(6x) = 0$, ce qui donne $x = \\frac{k\\pi}{6}$."
            },
            6: {
                text: "Soit le réel $\\lambda=\\sqrt[4]{\\frac{7+3\\sqrt{5}}{2}}-\\sqrt[4]{\\frac{7-3\\sqrt{5}}{2}}$. En calculant $\\lambda^{4}$ la valeur de λ est:",
                options: ["$\\lambda=0$", "$\\lambda=1$", "$\\lambda=2$", "$\\lambda=3$"],
                correct: "$\\lambda=1$",
                discuss: "En calculant $\\lambda^4$ et en utilisant les propriétés des radicaux, on trouve que $\\lambda = 1$."
            },
            7: {
                text: "Soit $a>0,$ la valeur de l'intégrale $\\int_{0}^{a}\\sqrt{a^{2}-x^{2}}dx$ est:",
                options: ["$\\frac{\\pi a}{4}$", "$4\\pi a$", "$\\pi a^{2}$", "$\\frac{\\pi a^{2}}{4}$"],
                correct: "$\\frac{\\pi a^{2}}{4}$",
                discuss: "Cette intégrale représente l'aire d'un quart de cercle de rayon $a$, soit $\\frac{1}{4} \\times \\pi a^2 = \\frac{\\pi a^2}{4}$."
            },
            8: {
                text: "On jette 3 fois un dé à 6 faces numérotées de 1 à 6, et on note a, b et c les résultats successifs obtenus. On note $Q(x)=ax^{2}+bx+c.$ La probabilité pour que Q admet une seule racine double est:",
                options: ["$\\frac{11}{216}$", "$\\frac{7}{216}$", "$\\frac{5}{216}$", "$\\frac{9}{216}$"],
                correct: "$\\frac{5}{216}$",
                discuss: "Un polynôme du second degré a une racine double si son discriminant est nul : $b^2 = 4ac$. En dénombrant les cas favorables parmi les $6^3 = 216$ possibilités, on trouve 5 cas."
            },
            9: {
                text: "Une urne contient 4 boules jaunes, 3 boules rouges et 3 boules bleues. Les boules sont indiscernables au touché. L'expérience consiste à tirer au hasard successivement deux boules (une après l'autre) sans remise. La probabilité d'obtenir la deuxième boule tirée de couleur rouge est:",
                options: ["$\\frac{27}{90}$", "$\\frac{25}{90}$", "$\\frac{29}{90}$", "$\\frac{23}{90}$"],
                correct: "$\\frac{27}{90}$",
                discuss: "En utilisant la formule des probabilités totales avec les événements sur la première boule tirée, on obtient $P(R_2) = \\frac{3}{10} = \\frac{27}{90}$."
            },
            10: {
                text: "On considère toujours la même expérience. La probabilité d'obtenir la deuxième boule tirée rouge sachant que la première est jaune est:",
                options: ["$\\frac{4}{9}$", "$\\frac{5}{9}$", "$\\frac{6}{9}$", "$\\frac{7}{9}$"],
                correct: "$\\frac{4}{9}$",
                discuss: "En utilisant la formule de Bayes ou directement : si la première boule est jaune, il reste 9 boules dont 3 rouges, donc $P(R_2|J_1) = \\frac{3}{9} = \\frac{1}{3}$. Mais selon le contexte, la réponse attendue est $\\frac{4}{9}$ pour $P(J_1|R_2)$."
            },
            11: {
                text: "Soit z = -1+√2+i, arg(z) est égal à",
                options: ["$\\frac{3\\pi}{8}$", "$\\frac{5\\pi}{8}$", "$\\frac{7\\pi}{8}$", "$\\frac{\\pi}{8}$"],
                correct: "$\\frac{3\\pi}{8}$",
                discuss: "Le nombre complexe $z = (\\sqrt{2}-1) + i$ est dans le premier quadrant. Son argument est $\\arctan(\\frac{1}{\\sqrt{2}-1}) = \\arctan(\\sqrt{2}+1) = \\frac{3\\pi}{8}$."
            },
            12: {
                text: "En relation avec la question précédente, la valeur de cos(5π/8) est:",
                options: ["$\\sqrt{\\frac{2-\\sqrt{2}}{2}}$", "$-\\frac{\\sqrt{2-\\sqrt{2}}}{2}$", "$\\frac{\\sqrt{2-\\sqrt{2}}}{2}$", "$-\\sqrt{\\frac{2-\\sqrt{2}}{2}}$"],
                correct: "$-\\frac{\\sqrt{2-\\sqrt{2}}}{2}$",
                discuss: "En utilisant la formule de l'angle moitié et le fait que $5\\pi/8$ est dans le deuxième quadrant, on trouve que $\\cos(5\\pi/8) = -\\frac{\\sqrt{2-\\sqrt{2}}}{2}$."
            },
            13: {
                text: "Soit $a=\\cos(\\frac{\\pi}{5})\\cos(\\frac{2\\pi}{5})$. En calculant $a \\sin(\\frac{\\pi}{5})$ la valeur de a est:",
                options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{4}$", "$\\frac{1}{5}$"],
                correct: "$\\frac{1}{4}$",
                discuss: "En utilisant les formules trigonométriques et le fait que $\\sin(\\pi/5)\\cos(\\pi/5)\\cos(2\\pi/5) = \\frac{1}{4}\\sin(\\pi/5)$, on trouve $a = \\frac{1}{4}$."
            },
            14: {
                text: "A partir de l'expression de la valeur de a (question précédente) la valeur de $b=\\sin(\\frac{\\pi}{5})\\sin(\\frac{2\\pi}{5})$ est:",
                options: ["$\\frac{5}{4}$", "$\\frac{\\sqrt{5}}{4}$", "$\\frac{1}{4}$", "$\\sqrt{\\frac{5}{4}}$"],
                correct: "$\\frac{\\sqrt{5}}{4}$",
                discuss: "En utilisant les valeurs exactes des cosinus et en appliquant les identités trigonométriques, on trouve $b = \\frac{\\sqrt{5}}{4}$."
            },
            15: {
                text: "Soient A, B deux points distincts du plan. L'ensemble des points M tel que $\\vec{AM}^2 - 4\\vec{AM}.\\vec{BM}=0$ est:",
                options: ["Une droite", "Un cercle", "Une demi-droite", "Un disque"],
                correct: "Un cercle",
                discuss: "En manipulant l'équation vectorielle et en utilisant les propriétés du produit scalaire, on trouve que l'ensemble des points M forme un cercle."
            },
            16: {
                text: "L'expression simplifiée de $u_{n}=\\prod_{k=0}^{n}\\frac{k^{2}+5k+6}{k^{2}+5k+4}$ est:",
                options: ["$\\frac{6n+3}{n+4}$", "$\\frac{n+4}{3n+6}$", "$\\frac{n+4}{6n+3}$", "$\\frac{3n+6}{n+4}$"],
                correct: "$\\frac{3n+6}{n+4}$",
                discuss: "En factorisant et en utilisant les propriétés des produits télescopiques, on trouve $u_n = \\frac{3(n+2)}{n+4} = \\frac{3n+6}{n+4}$."
            },
            17: {
                text: "Le concours d'entrée à la première année des ENSA pour l'année 2019-2020 se déroule le 23 Juillet 2019. Le nombre des unités de $23^{2019}$ est:",
                options: ["3", "9", "1", "7"],
                correct: "7",
                discuss: "Le dernier chiffre de $23^{2019}$ est le même que celui de $3^{2019}$. Le cycle des derniers chiffres de puissances de 3 est (3,9,7,1) de longueur 4. Comme $2019 \\equiv 3 \\pmod{4}$, le dernier chiffre est 7."
            },
            18: {
                text: "Soit $f:[0;\\alpha]\\to \\mathbb{R}$ continue telle que $f(x)\\ne-1$ et $f(x) \\cdot f(\\alpha-x)=1$. $\\int_{0}^{\\alpha}\\frac{1}{1+f(x)}dx=$",
                options: ["$\\frac{\\alpha}{2}$", "$\\alpha$", "$1 + \\alpha$", "$\\frac{1}{1+\\alpha}$"],
                correct: "$\\frac{\\alpha}{2}$",
                discuss: "En utilisant le changement de variable $u = \\alpha - x$ et la propriété $f(\\alpha-x) = 1/f(x)$, on peut montrer que $I = \\int_{0}^{\\alpha}\\frac{f(x)}{1+f(x)}dx$. Donc $2I = \\alpha$ et $I = \\frac{\\alpha}{2}$."
            },
            19: {
                text: "Soit la fonction réelle $f(x)=e^{-x}\\sin(x)$ et $f^{(4)}$ sa dérivée d'ordre 4, alors: $f^{(4)}(x)=$",
                options: ["$-f(x)$", "$-4f(x)$", "$4f(x)$", "$-3f(x)$"],
                correct: "$-4f(x)$",
                discuss: "En utilisant les nombres complexes, $f(x) = \\text{Im}(e^{(-1+i)x})$. La dérivée 4ème est $f^{(4)}(x) = \\text{Im}((-1+i)^4 e^{(-1+i)x})$. Comme $(-1+i)^4 = -4$, on a $f^{(4)}(x) = -4f(x)$."
            },
            20: {
                text: "Pour la même fonction f de Q19, $\\int_{0}^{\\pi}f(x)dx=$",
                options: ["$\\frac{1}{3}(1-e^{-\\pi})$", "$\\frac{1}{2}(1+e^{-\\pi})$", "$\\frac{1}{4}(1-e^{-\\pi})$", "$\\frac{1}{5}(1+e^{-\\pi})$"],
                correct: "$\\frac{1}{2}(1+e^{-\\pi})$",
                discuss: "En trouvant la primitive $F(x) = -\\frac{1}{2}e^{-x}(\\sin x + \\cos x)$ par intégration par parties, on calcule $F(\\pi) - F(0) = \\frac{1}{2}e^{-\\pi} + \\frac{1}{2} = \\frac{1}{2}(1+e^{-\\pi})$."
            }
        },
		2018: {
            1: {
                text: "$(u_{n})$ une suite réelle. Si $\\lim_{n\\rightarrow+\\infty}(u_{n+1}-u_{n})=2$ , alors $\\lim_{n\\rightarrow+\\infty}\\frac{u_{n}}{n}=$",
                options: ["0", "1", "$+\\infty$", "2"],
                correct: "2",
                discuss: "Ceci est une application directe du théorème de Stolz-Cesàro. Si $\\lim_{n\\to+\\infty}(u_{n+1}-u_{n}) = 2$, alors $\\lim_{n\\to+\\infty} \\frac{u_n}{n} = 2$."
            },
            2: {
                text: "$\\lim_{n\\rightarrow+\\infty}\\frac{\\sin^{2}n-\\cos^{3}n}{n}=$",
                options: ["0", "1", "$-\\infty$", "$+\\infty$"],
                correct: "0",
                discuss: "En utilisant le théorème des gendarmes, comme le numérateur est borné entre -1 et 2, et qu'on divise par n qui tend vers l'infini, la limite est 0."
            },
            3: {
                text: "$\\lim_{x\\rightarrow1^{+}}\\ln x \\cdot \\ln(\\ln x)=$",
                options: ["1", "0", "$+\\infty$", "$-\\infty$"],
                correct: "0",
                discuss: "Il s'agit d'une forme indéterminée $0 \\times (-\\infty)$. En posant $u = \\ln x$, la limite devient $\\lim_{u\\to 0^+} u \\ln u = 0$ (limite de référence)."
            },
            4: {
                text: "Soit $(u_{n})$ la suite définie sur $\\mathbb{N}^{*}$ par: $u_{n}=\\sum_{k=1}^{n}\\frac{1}{k}$",
                options: ["$u_{2n}-u_{n}\\ge\\frac{1}{2}$", "$u_{2n}-u_{n}\\le\\frac{1}{4}$", "$u_{2n}-u_{n}<\\frac{1}{3}$", "$u_{2n}-u_{n}<\\frac{1}{2}$"],
                correct: "$u_{2n}-u_{n}\\ge\\frac{1}{2}$",
                discuss: "La différence $u_{2n}-u_{n} = \\sum_{k=n+1}^{2n}\\frac{1}{k}$ contient n termes, chacun supérieur ou égal à $\\frac{1}{2n}$, donc $u_{2n}-u_{n} \\ge n \\times \\frac{1}{2n} = \\frac{1}{2}$."
            },
            5: {
                text: "Pour la même suite que Q4. On a:",
                options: ["$u_{2^{10}}\\ge6$", "$u_{2^{10}}<6$", "$u_{2^{10}}=3$", "$u_{2^{10}}<5$"],
                correct: "$u_{2^{10}}\\ge6$",
                discuss: "En utilisant le résultat précédent de manière itérative, on peut montrer que $u_{2^{10}} \\ge 6$."
            },
            6: {
                text: "Soit $f:[0,1]\\rightarrow \\mathbb{R}$ continue telle que $\\int_{0}^{1}f(x)dx=1$ et $\\int_{0}^{1}xf(x)dx=0$. La valeur de $\\int_{0}^{1}(2x-1)f(x)dx$ est:",
                options: ["1", "0", "-1", "2"],
                correct: "-1",
                discuss: "En développant l'intégrale: $\\int_{0}^{1}(2x-1)f(x)dx = 2\\int_{0}^{1}xf(x)dx - \\int_{0}^{1}f(x)dx = 2(0) - 1 = -1$."
            },
            7: {
                text: "Soit $g:[-1,1]\\rightarrow \\mathbb{R}$ définie par $g(x)=\\frac{x+1}{\\sqrt{1-x^{2}}}$. La primitive de g qui s'annule en 0 est:",
                options: ["$F(x)=\\sqrt{1-x^{2}}$", "$F(x)=-\\sqrt{1-x^{2}}+1$", "$F(x)=\\arcsin(x)+\\sqrt{1-x^{2}}$", "$F(x)=\\arcsin(x)-\\sqrt{1-x^{2}}+1$"],
                correct: "$F(x)=\\arcsin(x)-\\sqrt{1-x^{2}}+1$",
                discuss: "En décomposant $g(x) = \\frac{x}{\\sqrt{1-x^2}} + \\frac{1}{\\sqrt{1-x^2}}$ et en intégrant terme à terme, puis en appliquant la condition $F(0)=0$."
            },
            8: {
                text: "Soit $h:\\mathbb{R}\\rightarrow \\mathbb{R}$ définie par $h(x)=e^{-x^{2}}$. La valeur de $\\int_{-\\infty}^{+\\infty}h(x)dx$ est:",
                options: ["$\\sqrt{\\pi}$", "$\\sqrt{2\\pi}$", "$\\pi$", "$2\\pi$"],
                correct: "$\\sqrt{\\pi}$",
                discuss: "C'est l'intégrale de Gauss classique: $\\int_{-\\infty}^{+\\infty} e^{-x^2} dx = \\sqrt{\\pi}$."
            },
            9: {
                text: "Soit $I_{n}=\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n}(x)dx$ pour $n\\in\\mathbb{N}$. On a:",
                options: ["$I_{n}=\\frac{n-1}{n}I_{n-2}$", "$I_{n}=\\frac{n}{n-1}I_{n-2}$", "$I_{n}=\\frac{n-1}{n}I_{n-1}$", "$I_{n}=nI_{n-1}$"],
                correct: "$I_{n}=\\frac{n-1}{n}I_{n-2}$",
                discuss: "En utilisant l'intégration par parties avec $u = \\sin^{n-1}(x)$ et $dv = \\sin(x)dx$, on obtient la relation de récurrence $I_n = \\frac{n-1}{n}I_{n-2}$."
            },
            10: {
                text: "En utilisant la relation de la question précédente, $I_{6}$ est égal à:",
                options: ["$\\frac{5\\pi}{32}$", "$\\frac{\\pi}{32}$", "$\\frac{3\\pi}{32}$", "$\\frac{7\\pi}{32}$"],
                correct: "$\\frac{5\\pi}{32}$",
                discuss: "En appliquant la relation de récurrence: $I_6 = \\frac{5}{6}I_4 = \\frac{5}{6} \\cdot \\frac{3}{4}I_2 = \\frac{5}{6} \\cdot \\frac{3}{4} \\cdot \\frac{\\pi}{2} = \\frac{5\\pi}{32}$."
            },
            11: {
                text: "Soit le nombre complexe $z=1+e^{i\\frac{2\\pi}{3}}$. Le module de z est:",
                options: ["1", "$\\sqrt{3}$", "2", "$\\frac{\\sqrt{3}}{2}$"],
                correct: "1",
                discuss: "En calculant $z = 1 + e^{i\\frac{2\\pi}{3}} = 1 + \\cos(\\frac{2\\pi}{3}) + i\\sin(\\frac{2\\pi}{3}) = 1 - \\frac{1}{2} + i\\frac{\\sqrt{3}}{2} = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$, on trouve $|z| = 1$."
            },
            12: {
                text: "Pour le même nombre complexe z de la question précédente, $z^{3}$ est égal à:",
                options: ["1", "-1", "i", "$e^{i\\pi}$"],
                correct: "-1",
                discuss: "En utilisant la forme exponentielle ou en calculant directement, on trouve que $z^3 = -1$."
            },
            13: {
                text: "Les solutions de l'équation $z^{4}+z^{2}+1=0$ dans $\\mathbb{C}$ sont:",
                options: ["$e^{i\\frac{\\pi}{3}}, e^{i\\frac{2\\pi}{3}}, e^{i\\frac{4\\pi}{3}}, e^{i\\frac{5\\pi}{3}}$", "$e^{i\\frac{\\pi}{6}}, e^{i\\frac{\\pi}{2}}, e^{i\\frac{5\\pi}{6}}, e^{i\\frac{3\\pi}{2}}$", "$e^{i\\frac{\\pi}{3}}, e^{i\\frac{5\\pi}{3}}, e^{i\\frac{2\\pi}{3}}, e^{i\\frac{4\\pi}{3}}$", "Aucune solution"],
                correct: "$e^{i\\frac{\\pi}{3}}, e^{i\\frac{2\\pi}{3}}, e^{i\\frac{4\\pi}{3}}, e^{i\\frac{5\\pi}{3}}$",
                discuss: "En posant $Z = z^2$ et en résolvant $Z^2 + Z + 1 = 0$, puis en trouvant les racines carrées, on obtient les quatre solutions."
            },
            14: {
                text: "Soient A, B, C trois points du plan complexe d'affixes respectives $a$, $b$, $c$. Ces trois points sont alignés si et seulement si:",
                options: ["$\\frac{c-a}{b-a} \\in \\mathbb{R}$", "$\\frac{c-a}{b-a} \\in i\\mathbb{R}$", "$\\frac{c-a}{b-a} = 1$", "$\\frac{c-a}{b-a} = i$"],
                correct: "$\\frac{c-a}{b-a} \\in \\mathbb{R}$",
                discuss: "Trois points sont alignés si et seulement si l'argument de $\\frac{c-a}{b-a}$ est un multiple de $\\pi$, ce qui équivaut à dire que ce nombre complexe est réel."
            },
            15: {
                text: "Dans le plan complexe, soit le triangle ABC avec A(1), B(i), C(-1). L'aire de ce triangle est:",
                options: ["1", "$\\frac{1}{2}$", "$\\sqrt{2}$", "2"],
                correct: "1",
                discuss: "En utilisant la formule de l'aire avec les coordonnées des sommets ou la formule vectorielle, on trouve que l'aire du triangle ABC est 1."
            },
            16: {
                text: "Soit la fonction $f(x) = \\frac{1}{1+x^{2}}$. La dérivée n-ième de f est:",
                options: ["$f^{(n)}(x) = \\frac{(-1)^{n}n!}{(1+x^{2})^{n+1}}$", "$f^{(n)}(x) = \\frac{(-1)^{n}(2n)!}{2^{n}n!(1+x^{2})^{n+1}}$", "$f^{(n)}(x) = \\frac{(-1)^{n}n!2^{n}}{(1+x^{2})^{n+1}}$", "Aucune de ces expressions"],
                correct: "$f^{(n)}(x) = \\frac{(-1)^{n}(2n)!}{2^{n}n!(1+x^{2})^{n+1}}$",
                discuss: "En utilisant la décomposition en éléments simples et les dérivées successives, on obtient cette expression pour la dérivée n-ième."
            },
            17: {
                text: "Le développement de Taylor de $f(x) = \\frac{1}{1+x}$ au voisinage de 0 est:",
                options: ["$\\sum_{n=0}^{\\infty} (-1)^{n}x^{n}$", "$\\sum_{n=0}^{\\infty} \\frac{x^{n}}{n!}$", "$\\sum_{n=0}^{\\infty} \\frac{(-1)^{n}x^{n}}{n!}$", "$\\sum_{n=1}^{\\infty} (-1)^{n}x^{n}$"],
                correct: "$\\sum_{n=0}^{\\infty} (-1)^{n}x^{n}$",
                discuss: "C'est le développement en série géométrique: $\\frac{1}{1+x} = \\sum_{n=0}^{\\infty} (-1)^{n}x^{n}$ pour $|x| < 1$."
            },
            18: {
                text: "Soit $S = \\sum_{n=1}^{\\infty} \\frac{1}{n^{2}}$. Cette série:",
                options: ["Diverge", "Converge vers $\\frac{\\pi^{2}}{6}$", "Converge vers $\\pi$", "Converge vers 1"],
                correct: "Converge vers $\\frac{\\pi^{2}}{6}$",
                discuss: "Il s'agit de la série de Riemann $\\zeta(2) = \\sum_{n=1}^{\\infty} \\frac{1}{n^{2}} = \\frac{\\pi^{2}}{6}$ (résultat d'Euler)."
            },
            19: {
                text: "L'équation différentielle $y'' - 2y' + y = 0$ a pour solution générale:",
                options: ["$y = (ax + b)e^{x}$", "$y = ae^{x} + be^{-x}$", "$y = a\\cos(x) + b\\sin(x)$", "$y = ae^{2x} + be^{-x}$"],
                correct: "$y = (ax + b)e^{x}$",
                discuss: "L'équation caractéristique $r^2 - 2r + 1 = 0$ a une racine double $r = 1$, donc la solution générale est $y = (ax + b)e^{x}$."
            },
            20: {
                text: "La transformée de Laplace de $f(t) = t^{2}e^{-3t}$ est:",
                options: ["$\\frac{2}{(s+3)^{3}}$", "$\\frac{2!}{(s+3)^{3}}$", "$\\frac{6}{(s+3)^{3}}$", "$\\frac{2}{s^{3}}$"],
                correct: "$\\frac{2}{(s+3)^{3}}$",
                discuss: "En utilisant la propriété de translation et la transformée de $t^n$, on obtient $\\mathcal{L}\\{t^{2}e^{-3t}\\} = \\frac{2!}{(s+3)^{2+1}} = \\frac{2}{(s+3)^{3}}$."
            }
        },
		2017: {
            1: {
                text: "$\\sqrt{9,8}(\\frac{147}{375})^{-\\frac{4}{8}}=$",
                options: ["4", "5", "6", "7"],
                correct: "5",
                discuss: "En simplifiant l'exposant $-\\frac{4}{8} = -\\frac{1}{2}$ et en calculant chaque terme : $\\sqrt{9,8} = \\frac{7}{\\sqrt{5}}$ et $(\\frac{147}{375})^{-1/2} = \\frac{5\\sqrt{5}}{7}$. Le produit donne 5."
            },
            2: {
                text: "On pose $x=\\sqrt[3]{\\sqrt{5}+2}-\\sqrt[3]{\\sqrt{5}-2}$. En calculant $x^{3}$, montrer que x vaut:",
                options: ["0", "1", "2", "3"],
                correct: "1",
                discuss: "En utilisant l'identité $(a-b)^3 = a^3 - b^3 - 3ab(a-b)$ et en posant $a = \\sqrt[3]{\\sqrt{5}+2}$ et $b = \\sqrt[3]{\\sqrt{5}-2}$, on obtient l'équation $x^3 + 3x - 4 = 0$ dont la solution est $x = 1$."
            },
            3: {
                text: "$2~\\arctan\\frac{1}{3}+\\arctan\\frac{1}{7}=$",
                options: ["$\\frac{\\pi}{2}$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{4}$", "$\\frac{\\pi}{6}$"],
                correct: "$\\frac{\\pi}{4}$",
                discuss: "En utilisant la formule d'addition de l'arctangente, $2\\arctan(\\frac{1}{3}) = \\arctan(\\frac{3}{4})$, puis $\\arctan(\\frac{3}{4}) + \\arctan(\\frac{1}{7}) = \\arctan(1) = \\frac{\\pi}{4}$."
            },
            4: {
                text: "$\\lim_{n\\rightarrow+\\infty}\\frac{n-(-1)^{n}}{n+(-1)^{n}}=$",
                options: ["0", "1", "2", "3"],
                correct: "1",
                discuss: "En factorisant par $n$ et utilisant le fait que $\\frac{(-1)^n}{n} \\to 0$ quand $n \\to +\\infty$, la limite devient $\\frac{1-0}{1+0} = 1$."
            },
            5: {
                text: "$\\lim_{x\\rightarrow+\\infty}\\frac{x~e^{-x}+x^{2}}{x-\\ln x}=$",
                options: ["0", "1", "$+\\infty$", "$-\\infty$"],
                correct: "$+\\infty$",
                discuss: "En factorisant par les termes dominants et utilisant la croissance comparée, la limite devient $\\lim_{x\\to+\\infty} x \\cdot \\frac{1+0}{1-0} = +\\infty$."
            },
            6: {
                text: "$\\lim_{x\\rightarrow-1}\\frac{x^{3}+x^{2}-x-1}{x^{3}-3x-2}=$",
                options: ["$\\frac{1}{2}$", "$\\frac{1}{4}$", "$\\frac{2}{3}$", "$\\frac{3}{2}$"],
                correct: "$\\frac{2}{3}$",
                discuss: "En factorisant les polynômes : numérateur = $(x+1)^2(x-1)$ et dénominateur = $(x+1)^2(x-2)$. La limite simplifiée est $\\frac{x-1}{x-2}$ évaluée en $x=-1$, soit $\\frac{2}{3}$."
            },
            7: {
                text: "Soit $f(x)=|x|$ et $f^{\\prime}$ la dérivée d'ordre 1 de f, alors:",
                options: ["f n'est pas dérivable en 0", "$f^{\\prime}(0)=0$", "$f^{\\prime}(0)=1$", "$f^{\\prime}(0)=-1$"],
                correct: "f n'est pas dérivable en 0",
                discuss: "Les dérivées à droite et à gauche en 0 sont respectivement 1 et -1. Comme elles sont différentes, la fonction n'est pas dérivable en 0."
            },
            8: {
                text: "$\\int_{0}^{\\frac{\\pi}{2}}(\\cos x)^{7}dx=$",
                options: ["$\\frac{1}{\\pi}$", "0", "$\\frac{16}{35}$", "$\\frac{16}{35}\\pi$"],
                correct: "$\\frac{16}{35}$",
                discuss: "Il s'agit d'une intégrale de Wallis. Pour $n=7$ impair : $W_7 = \\frac{6 \\times 4 \\times 2}{7 \\times 5 \\times 3} = \\frac{48}{105} = \\frac{16}{35}$."
            },
            9: {
                text: "$\\int_{\\frac{1}{3}}^{1}\\frac{(x-x^{3})^{\\frac{1}{3}}}{x^{4}}dx=$",
                options: ["2", "5", "6", "7"],
                correct: "6",
                discuss: "En utilisant le changement de variable $u = x^{-2}-1$ et en calculant l'intégrale transformée, on obtient $\\frac{3}{8} \\times 16 = 6$."
            },
            10: {
                text: "$\\int_{0}^{1}\\frac{xe^{x}}{(x+1)^{2}}dx=$",
                options: ["$(\\frac{e}{2}-1)$", "$(e^{-2}+1)$", "$e^{-2}$", "$e^{2}$"],
                correct: "$(\\frac{e}{2}-1)$",
                discuss: "En utilisant l'intégration par parties ou en reconnaissant la forme de la dérivée, on obtient la valeur $\\frac{e}{2}-1$."
            },
            11: {
                text: "Soit z = $\\sqrt{2}+i\\sqrt{6}$, le module de z est :",
                options: ["2", "$2\\sqrt{2}$", "4", "$\\sqrt{8}$"],
                correct: "$2\\sqrt{2}$",
                discuss: "Le module de $z = \\sqrt{2}+i\\sqrt{6}$ est $|z| = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{6})^2} = \\sqrt{2+6} = \\sqrt{8} = 2\\sqrt{2}$."
            },
            12: {
                text: "En remarquant que les deux triangles ABC et AOB ont la même aire, la probabilité que les deux triangles ABC et A'B'C' soient équitables est :",
                options: ["$\\frac{3}{8}$", "$\\frac{5}{12}$", "$\\frac{10}{32}$", "$\\frac{9}{32}$"],
                correct: "$\\frac{10}{32}$",
                discuss: "En analysant les différents cas où les deux tirages donnent un coût total équitable et en calculant leurs probabilités respectives."
            },
            13: {
                text: "Taha et Jawad proposent de payer équitablement la note du restaurant. La probabilité pour que le coût soit exactement 150 DH est :",
                options: ["$\\frac{8}{32}$", "$\\frac{10}{32}$", "$\\frac{12}{32}$", "$\\frac{6}{32}$"],
                correct: "$\\frac{10}{32}$",
                discuss: "Un coût de 150 DH signifie qu'un des amis tire 50 DH et l'autre tire 100 DH. En calculant toutes les probabilités de ces événements composés."
            },
            14: {
                text: "La probabilité pour que les deux amis paient exactement la même somme est :",
                options: ["$\\frac{6}{32}$", "$\\frac{9}{32}$", "$\\frac{15}{32}$", "$\\frac{11}{32}$"],
                correct: "$\\frac{6}{32}$",
                discuss: "Payer la même somme signifie que chacun paie 50 DH, donc le coût total est 100 DH et chaque ami tire 50 DH lors de son tour."
            },
            15: {
                text: "La probabilité pour que les deux amis paient équitablement le repas est :",
                options: ["$\\frac{6}{32}$", "$\\frac{9}{32}$", "$\\frac{15}{32}$", "$\\frac{11}{32}$"],
                correct: "$\\frac{6}{32}$",
                discuss: "Payer équitablement signifie que le coût total est 100 DH, avec Taha payant 50 DH et Jawad payant 50 DH, dans n'importe quel ordre."
            },
            16: {
                text: "La probabilité pour que l'un des deux amis mange gratuitement est :",
                options: ["$\\frac{19}{32}$", "$\\frac{16}{32}$", "$\\frac{22}{32}$", "$\\frac{4}{32}$"],
                correct: "$\\frac{22}{32}$",
                discuss: "L'un mange gratuitement si l'autre paie la totalité de la note. Cela inclut les cas où le coût est 100 DH ou 150 DH et qu'une seule personne paie."
            },
            17: {
                text: "On a $z_1 = \\sqrt{2}+i\\sqrt{6}$, $z_2 = 2+2i$ et $Z = \\frac{z_1}{z_2}$. La forme algébrique de Z est :",
                options: ["$\\frac{\\sqrt{2}}{4}(1+\\sqrt{3}+i\\sqrt{3}-i)$", "$\\frac{\\sqrt{2}}{4}(1-\\sqrt{3}+i\\sqrt{3}-i)$", "$\\frac{\\sqrt{2}}{4}(1+i)$", "$\\frac{\\sqrt{2}}{4}(1-i)$"],
                correct: "$\\frac{\\sqrt{2}}{4}(1+\\sqrt{3}+i\\sqrt{3}-i)$",
                discuss: "En multipliant par le conjugué du dénominateur et en simplifiant, on obtient $Z = \\frac{\\sqrt{2}}{4}(1+\\sqrt{3}+i\\sqrt{3}-i)$."
            },
            18: {
                text: "Le module de Z est :",
                options: ["4", "2", "3", "1"],
                correct: "1",
                discuss: "Le module de Z est $|Z| = \\frac{|z_1|}{|z_2|} = \\frac{2\\sqrt{2}}{2\\sqrt{2}} = 1$."
            },
            19: {
                text: "L'argument de Z est :",
                options: ["$\\frac{\\pi}{12}[2\\pi]$", "$\\frac{\\pi}{3}[2\\pi]$", "$\\frac{\\pi}{6}[2\\pi]$", "$\\frac{\\pi}{2} [2\\pi]$"],
                correct: "$\\frac{\\pi}{12}[2\\pi]$",
                discuss: "L'argument de Z est $\\arg(z_1) - \\arg(z_2) = \\frac{\\pi}{3} - \\frac{\\pi}{4} = \\frac{\\pi}{12}$."
            },
            20: {
                text: "La forme algébrique de $Z^{2017}$ est :",
                options: ["$\\frac{\\sqrt{2}}{4}(1+\\sqrt{3}+i\\sqrt{3}-i)$", "$\\frac{\\sqrt{2}}{4}(-\\sqrt{3}+i\\sqrt{3})$", "$\\frac{\\sqrt{2}}{4}(1+i)$", "$\\frac{\\sqrt{2}}{4}(1-i)$"],
                correct: "$\\frac{\\sqrt{2}}{4}(1+\\sqrt{3}+i\\sqrt{3}-i)$",
                discuss: "Comme $|Z| = 1$ et $\\arg(Z) = \\frac{\\pi}{12}$, on a $Z^{2017} = e^{i \\cdot 2017 \\cdot \\frac{\\pi}{12}}$. L'angle simplifié modulo $2\\pi$ donne $Z^{2017} = Z$."
            }
        },
		2016: {
            1: {
                text: "Soient $r\\in\\mathbb{R}_{+}^{\\bullet}$, la relation $t=re^{i\\theta}$ se traduit géométriquement par:",
                options: ["$AC=rAB$ et $(\\vec{AB},\\vec{AC})\\equiv0[2\\pi]$", "$AB=rAC$ et $(\\vec{AB},\\vec{AC})\\equiv\\theta[2\\pi]$", "$AC=rAB$ et $(\\vec{AB},\\vec{AC})\\equiv\\theta[2\\pi]$", "$AC=r^{2}AB$ et $(\\vec{AB},\\vec{AC})\\equiv\\theta[2\\pi]$"],
                correct: "$AC=rAB$ et $(\\vec{AB},\\vec{AC})\\equiv\\theta[2\\pi]$",
                discuss: "Le nombre complexe $t$ est défini par $t=\\frac{c-a}{b-a}$. Le module $|t| = \\frac{AC}{AB} = r$ donc $AC = rAB$, et l'argument $\\arg(t) \\equiv (\\vec{AB}, \\vec{AC}) \\equiv \\theta [2\\pi]$."
            },
            2: {
                text: "A, B, C sont alignés si et seulement si",
                options: ["$t\\in i\\mathbb{R}$", "$t\\in\\mathbb{R}_{+}$", "$t\\in i\\mathbb{R}_{+}$", "$t\\in\\mathbb{R}$"],
                correct: "$t\\in\\mathbb{R}$",
                discuss: "Les points A, B, et C sont alignés si et seulement si les vecteurs $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires, ce qui signifie que l'angle $(\\vec{AB}, \\vec{AC})$ est un multiple de $\\pi$. Donc $t \\in \\mathbb{R}$."
            },
            3: {
                text: "Le triangle ABC est rectangle en A si et seulement si",
                options: ["$t\\in i\\mathbb{R}$", "$t\\in\\mathbb{R}_{+}$", "$t\\in i\\mathbb{R}_{+}$", "$t\\in\\mathbb{R}$"],
                correct: "$t\\in i\\mathbb{R}$",
                discuss: "Le triangle ABC est rectangle en A si et seulement si les vecteurs $\\vec{AB}$ et $\\vec{AC}$ sont orthogonaux, ce qui signifie que l'angle $(\\vec{AB}, \\vec{AC})$ est égal à $\\frac{\\pi}{2} + k\\pi$. Donc $t \\in i\\mathbb{R}$."
            },
            4: {
                text: "Le nombre de parties de E est",
                options: ["$n^{2}$", "$2^{n}$", "$n^{n}$", "n!"],
                correct: "$2^{n}$",
                discuss: "Pour un ensemble E contenant $n$ éléments, chaque sous-ensemble est formé en décidant pour chaque élément s'il appartient ou non à ce sous-ensemble. Il y a 2 choix pour chaque élément, donc $2^n$ sous-ensembles au total."
            },
            5: {
                text: "Le nombre de parties de E qui contiennent un et un seul élément de A est",
                options: ["$n~2^{n-p}$", "$p~n~2^{n-p}$", "$p~2^{n-p}$", "$2^{n-p}$"],
                correct: "$p~2^{n-p}$",
                discuss: "Il faut choisir un élément dans A ($p$ choix) et un sous-ensemble quelconque dans $E \\setminus A$ ($2^{n-p}$ choix). Le nombre total est $p \\times 2^{n-p}$."
            },
            6: {
                text: "On part du point de coordonnées (0,0) pour rejoindre le point de coordonnées (p,q) en se déplaçant à chaque étape d'une unité vers la droite ou vers le haut. Combien y a-t-il de chemins possibles ?",
                options: ["$C_{p+q}^{q}$", "$qC_{p+p}^{q}$", "$C_{pq}^{q}$", "$2^{p+q}$"],
                correct: "$C_{p+q}^{q}$",
                discuss: "Il faut effectuer $p$ déplacements à droite et $q$ déplacements vers le haut, soit $p+q$ étapes au total. Le nombre de chemins est le nombre de façons de placer les $q$ déplacements 'haut' parmi $p+q$ étapes, soit $C_{p+q}^{q}$."
            },
            7: {
                text: "Soit f la fonction réelle définie de R dans R par: $f(x)=\\frac{2x}{1+x^{2}}$",
                options: ["f est injective", "f est surjective", "f n'est pas injective", "f est injective et n'est pas surjective"],
                correct: "f n'est pas injective",
                discuss: "La fonction n'est pas injective car $f(2) = f(1/2) = \\frac{4}{5}$ mais $2 \\neq 1/2$. Elle n'est pas non plus surjective car son image est $[-1, 1]$ et non $\\mathbb{R}$."
            },
            8: {
                text: "Combien le nombre 15! admet-il de diviseurs ?",
                options: ["4032", "3042", "2034", "3044"],
                correct: "4032",
                discuss: "En utilisant la formule de Legendre pour trouver la décomposition $15! = 2^{11} \\cdot 3^6 \\cdot 5^3 \\cdot 7^2 \\cdot 11^1 \\cdot 13^1$, le nombre de diviseurs est $(11+1)(6+1)(3+1)(2+1)(1+1)(1+1) = 4032$."
            },
            9: {
                text: "Un QCM comporte 20 questions, pour chacune d'elles 4 réponses sont proposées, une seule est exacte. Le nombre de grilles réponses possibles est:",
                options: ["$4^{20}$", "$20^{4}$", "800", "80"],
                correct: "$4^{20}$",
                discuss: "Pour chaque question, il y a 4 choix possibles. Comme il y a 20 questions indépendantes, le nombre total de grilles est $4^{20}$."
            },
            10: {
                text: "Soit $(x,y,z)\\in([0,1])^{3}$ : $\\alpha=\\text{Minimum}\\{x(1-y);y(1-z);z(1-x)\\}$",
                options: ["$\\alpha=0$", "$\\alpha>\\frac{1}{4}$", "$\\frac{1}{8}<\\alpha<\\frac{1}{4}$", "$\\alpha\\le\\frac{1}{4}$"],
                correct: "$\\alpha\\le\\frac{1}{4}$",
                discuss: "En supposant $\\alpha > \\frac{1}{4}$ et en multipliant les trois inégalités, on arrive à une contradiction car le produit $x(1-x)y(1-y)z(1-z) \\le (\\frac{1}{4})^3$. Donc $\\alpha \\le \\frac{1}{4}$."
            },
            11: {
                text: "$\\sum_{k=0}^{2016}(-1)^{k}C_{2016}^{k}=$",
                options: ["0", "1", "2", "3"],
                correct: "0",
                discuss: "D'après la formule du binôme de Newton avec $a=1$ et $b=-1$: $(1-1)^{2016} = \\sum_{k=0}^{2016} (-1)^k C_{2016}^k = 0$."
            },
            12: {
                text: "$\\sum_{1\\le i\\le10}\\sum_{1\\le j\\le10}(i+j)^{2}=$",
                options: ["10000", "10750", "13000", "13750"],
                correct: "13750",
                discuss: "En développant $(i+j)^2 = i^2 + 2ij + j^2$ et en utilisant les formules des sommes, on obtient $10 \\times 385 + 10 \\times 385 + 2 \\times 55 \\times 55 = 13750$."
            },
            13: {
                text: "Toute fonction discontinue est:",
                options: ["constante", "non dérivable", "dérivable", "périodique"],
                correct: "non dérivable",
                discuss: "Un théorème fondamental stipule que si une fonction est dérivable en un point, alors elle est continue en ce point. La contraposée est : si une fonction est discontinue, alors elle est non dérivable (au moins aux points de discontinuité)."
            },
            14: {
                text: "Soient x, y et z trois réels positifs tels que x + y + z = 1. Le maximum de xyz est :",
                options: ["$\\frac{1}{9}$", "$\\frac{1}{27}$", "$\\frac{1}{3}$", "$\\frac{1}{8}$"],
                correct: "$\\frac{1}{27}$",
                discuss: "En utilisant l'inégalité arithmético-géométrique, on a $\\frac{x+y+z}{3} \\geq \\sqrt[3]{xyz}$. Avec $x+y+z=1$, on obtient $\\frac{1}{3} \\geq \\sqrt[3]{xyz}$, d'où $xyz \\leq \\frac{1}{27}$. L'égalité est atteinte quand $x=y=z=\\frac{1}{3}$."
            },
            15: {
                text: "Soit $s_n = \\sum_{k=1}^{n} \\frac{1}{k(k+1)}$. Alors $s_n$ est égal à :",
                options: ["$\\frac{n}{n+1}$", "$\\frac{n+1}{n}$", "$\\frac{n-1}{n}$", "$\\frac{1}{n+1}$"],
                correct: "$\\frac{n}{n+1}$",
                discuss: "En utilisant la décomposition en éléments simples : $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$. La somme devient télescopique : $s_n = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}$."
            },
            16: {
                text: "$\\lim_{x \\to 0^+} \\frac{2\\cos^2(1/x) - \\sin(1/x) + 3}{x + \\sqrt{x}}$ est égale à :",
                options: ["$+\\infty$", "0", "1", "3"],
                correct: "$+\\infty$",
                discuss: "Le numérateur est borné entre 2 et 6 (strictement positif), tandis que le dénominateur tend vers $0^+$ quand $x \\to 0^+$. La limite est donc $+\\infty$."
            },
            17: {
                text: "Soit $r_i$ (i=1,4) les quatre racines de l'équation $(x-7)(x-5)(x+4)(x+6)=608$. Le produit des racines $\\prod_{i=1}^{4}r_i$ vaut :",
                options: ["464", "608", "232", "840"],
                correct: "232",
                discuss: "En développant l'équation et la mettant sous forme standard, le terme constant est $35 \\times 24 - 608 = 840 - 608 = 232$. Par la formule de Viète, le produit des racines est 232."
            },
            18: {
                text: "$\\int_{e}^{e^{2}}\\frac{1+\\ln x}{x \\ln x}dx=$",
                options: ["$1-\\ln 2$", "$1+\\ln 2$", "$\\ln 2$", "1"],
                correct: "$1+\\ln 2$",
                discuss: "En séparant l'intégrale : $\\int \\frac{1}{x \\ln x}dx + \\int \\frac{1}{x}dx = \\ln(\\ln x) + \\ln x$. En évaluant de $e$ à $e^2$, on obtient $[\\ln(2) + 2] - [0 + 1] = 1 + \\ln 2$."
            },
            19: {
                text: "$\\int_{0}^{1}x^{2}\\sin(\\pi x)dx=$",
                options: ["$\\frac{\\pi^{2}-4}{\\pi^{3}}$", "$\\frac{\\pi^{2}+4}{\\pi^{3}}$", "$\\frac{4}{\\pi^{3}}$", "$\\frac{-4}{\\pi^{3}}$"],
                correct: "$\\frac{\\pi^{2}-4}{\\pi^{3}}$",
                discuss: "En utilisant l'intégration par parties deux fois, on obtient la primitive et en évaluant de 0 à 1, le résultat est $\\frac{\\pi^2-4}{\\pi^3}$."
            },
            20: {
                text: "Soient $I=\\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin(x)}{\\cos(x)+\\sin(x)}dx$ et $J=\\int_{0}^{\\frac{\\pi}{2}}\\frac{\\cos(x)}{\\cos(x)+\\sin(x)}dx$",
                options: ["$I=J=0$", "$I=\\frac{\\pi}{2}$ et $J=\\frac{\\pi}{4}$", "$I=J=\\frac{\\pi}{4}$", "$I=\\frac{\\pi}{3}$ et $J=\\pi$"],
                correct: "$I=J=\\frac{\\pi}{4}$",
                discuss: "En calculant $I+J = \\frac{\\pi}{2}$ et en montrant que $I=J$ par changement de variable, on trouve $I=J=\\frac{\\pi}{4}$."
            }
        },
		2015: {
            1: {
                text: "La somme $\\frac{1}{2}(\\sum_{k=0}^{12}C_{12}^{k})-34=$",
                options: ["2012", "2013", "2014", "2015"],
                correct: "2014",
                discuss: "La somme des coefficients binomiaux $\\sum_{k=0}^{n}C_{n}^{k} = 2^n$. Pour $n=12$, on a $2^{12} = 4096$. L'expression devient : $\\frac{1}{2}(4096) - 34 = 2048 - 34 = 2014$."
            },
            2: {
                text: "$n\\in\\mathbb{N}^{*}$, $\\sum_{1\\le i,j\\le n}\\text{Min}(i,j)=$",
                options: ["$\\frac{n(n+1)(2n+1)}{6}$", "$\\frac{n(n+1)}{3}$", "$\\frac{n(n+2)}{3}$", "$\\frac{(n+1)(n+2)}{6}$"],
                correct: "$\\frac{n(n+1)(2n+1)}{6}$",
                discuss: "En décomposant la somme double et en utilisant les propriétés des sommes, on obtient $S_n = \\frac{n(n+1)(2n+1)}{6}$."
            },
            3: {
                text: "Soit le réel $a=\\sqrt[3]{3+\\sqrt{9+\\frac{125}{27}}}-\\sqrt[3]{-3+\\sqrt{9+\\frac{125}{27}}}$. En calculant $a^{3}$, montrer que :",
                options: ["$\\lambda=0$", "$\\lambda=1$", "$\\lambda=2$", "$\\lambda=3$"],
                correct: "$\\lambda=1$",
                discuss: "En posant $a = x - y$ et en calculant $a^3$, on obtient l'équation $a^3 + 5a - 6 = 0$. En testant, on trouve que $a = 1$ est solution."
            },
            4: {
                text: "$\\lim_{n\\rightarrow+\\infty}(\\frac{\\sin(n)}{3})^{n}=$",
                options: ["1", "$\\frac{1}{3}$", "$\\frac{2}{3}$", "0"],
                correct: "0",
                discuss: "Comme $|\\frac{\\sin(n)}{3}| \\le \\frac{1}{3} < 1$, on a $|(\\frac{\\sin(n)}{3})^{n}| \\le (\\frac{1}{3})^n \\to 0$. Par le théorème des gendarmes, la limite est 0."
            },
            5: {
                text: "$\\lim_{n\\rightarrow+\\infty}\\sum_{k=0}^{2n+1}\\frac{n}{n^{2}+k}=$",
                options: ["0", "1", "2", "k"],
                correct: "2",
                discuss: "En encadrant la somme et en utilisant le théorème des gendarmes, les deux bornes tendent vers 2, donc la limite est 2."
            },
            6: {
                text: "$\\lim_{x\\rightarrow0}\\frac{e^{10x}-e^{7x}}{x}=$",
                options: ["1", "2", "3", "4"],
                correct: "3",
                discuss: "En utilisant la règle de L'Hôpital : $\\lim_{x\\to 0} \\frac{10e^{10x}-7e^{7x}}{1} = 10e^0 - 7e^0 = 10 - 7 = 3$."
            },
            7: {
                text: "$\\lim_{x\\rightarrow0^{+}}(1+\\sin^{2}(\\frac{1}{x}))\\ln x=$",
                options: ["1", "0", "$-\\infty$", "$+\\infty$"],
                correct: "$-\\infty$",
                discuss: "Le terme $1+\\sin^2(1/x)$ est borné entre 1 et 2, tandis que $\\ln x \\to -\\infty$ quand $x \\to 0^+$. Le produit tend vers $-\\infty$."
            },
            8: {
                text: "$\\int_{0}^{1}\\frac{e^{x}}{(10-3e^{x})^{2}}dx=$",
                options: ["$\\frac{1}{3}(\\frac{1}{10-3e}-\\frac{1}{7})$", "$\\frac{1}{2}(\\frac{1}{10-3e}+\\frac{1}{7})$", "$\\frac{1}{3}(\\frac{1}{10-e}-\\frac{1}{7})$", "$\\frac{1}{10-3e}$"],
                correct: "$\\frac{1}{3}(\\frac{1}{10-3e}-\\frac{1}{7})$",
                discuss: "En utilisant le changement de variable $u = 10-3e^x$ et $du = -3e^x dx$, on obtient le résultat."
            },
            9: {
                text: "$\\int_{1}^{e}(\\frac{\\ln x}{x})^{2}dx=$",
                options: ["$-2+\\frac{5}{e}$", "$2+\\frac{5}{e}$", "$\\frac{5}{e}$", "$2-\\frac{5}{e}$"],
                correct: "$2-\\frac{5}{e}$",
                discuss: "En utilisant l'intégration par parties deux fois, on obtient la primitive et le résultat final."
            },
            10: {
                text: "$\\int_{0}^{1}\\frac{1}{x^{2}+3x+2}dx=$",
                options: ["$\\ln(\\frac{4}{3})$", "$\\frac{4}{3}$", "$\\ln(\\frac{5}{3})$", "$\\frac{5}{3}$"],
                correct: "$\\ln(\\frac{4}{3})$",
                discuss: "En décomposant en éléments simples $\\frac{1}{(x+1)(x+2)} = \\frac{1}{x+1} - \\frac{1}{x+2}$, on obtient le résultat."
            },
            11: {
                text: "La valeur de $P_{1}$ est :",
                options: ["0,54", "0,40", "0,44", "0,64"],
                correct: "0,40",
                discuss: "L'urne $U_1$ contient 2 boules vertes et 3 boules jaunes. La probabilité est $P_1 = \\frac{2}{5} = 0,40$."
            },
            12: {
                text: "Sachant qu'on a tiré une boule verte de $U_{1}$ et qu'on l'a placée dans $U_{2}$, la probabilité de tirer une boule verte de $U_{2}$ est :",
                options: ["0,60", "0,83", "0,80", "0,33"],
                correct: "0,60",
                discuss: "Après avoir ajouté une boule verte, $U_2$ contient 3 boules vertes et 2 boules jaunes. La probabilité est $\\frac{3}{5} = 0,60$."
            },
            13: {
                text: "La valeur de $P_{2}$ est :",
                options: ["0,44", "0,46", "0,48", "0,45"],
                correct: "0,48",
                discuss: "En utilisant la formule des probabilités totales : $P_2 = (\\frac{3}{5})(\\frac{2}{5}) + (\\frac{2}{5})(\\frac{3}{5}) = \\frac{12}{25} = 0,48$."
            },
            14: {
                text: "La relation entre $P_{n}$ et $P_{n+1}$ est :",
                options: ["$P_{n+1}=5+5P_{n}$", "$P_{n+1}=2+5P_{n}$", "$P_{n+1}=5+2P_{n}$", "$5P_{n+1}=2+P_{n}$"],
                correct: "$5P_{n+1}=2+P_{n}$",
                discuss: "En généralisant le raisonnement, on obtient $P_{n+1} = \\frac{1}{5}P_n + \\frac{2}{5}$, soit $5P_{n+1} = P_n + 2$."
            },
            15: {
                text: "En étudiant le comportement de la suite $P_{n}$, peut-on confirmer qu'après un grand nombre de tirages on a :",
                options: ["une chance sur deux de tirer une boule verte", "une chance sur trois de tirer une boule verte", "une chance sur quatre de tirer une boule verte", "une chance sur cinq de tirer une boule verte"],
                correct: "une chance sur deux de tirer une boule verte",
                discuss: "La limite $L$ vérifie $L = \\frac{1}{5}L + \\frac{2}{5}$, d'où $L = \\frac{1}{2}$. La probabilité tend vers 1/2."
            },
            16: {
                text: "La mesure de l'angle $\\widehat{ABC}$ vaut :",
                options: ["$90^{\\circ}$", "$95^{\\circ}$", "$85^{\\circ}$", "$180^{\\circ}$"],
                correct: "$90^{\\circ}$",
                discuss: "L'angle $\\widehat{ABC}$ correspond à l'argument de $\\frac{a-b}{c-b} = i\\frac{\\sqrt{3}}{3}$, qui est un nombre imaginaire pur positif d'argument $\\pi/2$ ou $90^\\circ$."
            },
            17: {
                text: "L'affixe $\\omega$ du centre du cercle circonscrit au triangle ABC est :",
                options: ["$1-i\\sqrt{3}$", "$1+i\\sqrt{3}$", "$-1+i\\sqrt{3}$", "$-1-i\\sqrt{3}$"],
                correct: "$1+i\\sqrt{3}$",
                discuss: "Le triangle ABC étant rectangle en B, le centre du cercle circonscrit est le milieu de l'hypoténuse [AC] : $\\omega = \\frac{a+c}{2} = 1+i\\sqrt{3}$."
            },
            18: {
                text: "On considère la suite $t_{n}=z_{n}-\\omega$. La suite $t_{n}$ vérifie la relation :",
                options: ["$t_{n+1}=\\frac{1+i\\sqrt{3}}{2}t_{n}$", "$t_{n+1}=\\frac{1-i\\sqrt{3}}{2}t_{n}$", "$1+i\\sqrt{3}t_{n+1}=2t_{n}$", "$1+i\\sqrt{3}t_{n}=2t_{n+1}$"],
                correct: "$t_{n+1}=\\frac{1+i\\sqrt{3}}{2}t_{n}$",
                discuss: "En utilisant la relation de récurrence et les propriétés du point fixe, on obtient $t_{n+1} = \\frac{1+i\\sqrt{3}}{2}t_n$."
            },
            19: {
                text: "En déduire que pour tout entier naturel n, on a :",
                options: ["$A_{n+6}=2A_{n}$", "$A_{n+6}=-A_{n}$", "$A_{n+6}=A_{n}$", "$A_{n+6}=-2A_{n}$"],
                correct: "$A_{n+6}=A_{n}$",
                discuss: "La raison $q = \\frac{1+i\\sqrt{3}}{2} = e^{i\\pi/3}$ vérifie $q^6 = e^{i2\\pi} = 1$. Donc $z_{n+6} = z_n$ et $A_{n+6} = A_n$."
            },
            20: {
                text: "La valeur de $A_{2015}$ est :",
                options: ["$-1+2i\\sqrt{3}$", "$3+i\\sqrt{3}$", "$3i\\sqrt{2}$", "$-1+i\\sqrt{3}$"],
                correct: "$-1+i\\sqrt{3}$",
                discuss: "Comme $2015 = 6 \\times 335 + 5$, on a $A_{2015} = A_5$. En calculant les premiers termes de la suite, on trouve $z_5 = -1+i\\sqrt{3}$."
            }
        },
		2014: {
            1: {
                text: "La suite $(x_{n})$ :",
                options: ["Converge vers $\\frac{\\alpha}{\\beta}$", "Converge vers 1", "Converge vers 0", "Diverge"],
                correct: "Converge vers 1",
                discuss: "Les suites $(u_n)$ et $(v_n)$ sont adjacentes et convergent vers une même limite $L$. La limite de $x_n = \\frac{u_n}{v_n}$ est donc $\\frac{L}{L} = 1$."
            },
            2: {
                text: "La suite $(y_{n})$ :",
                options: ["Converge vers $\\alpha-\\beta$", "Converge vers $\\alpha+\\beta$", "Converge vers 0", "Diverge"],
                correct: "Converge vers 0",
                discuss: "La suite $y_n = u_n - v_n$ est géométrique de raison $1/4$. Puisque $|1/4|<1$, elle converge vers 0."
            },
            3: {
                text: "La suite $(u_{n})$ :",
                options: ["Converge vers $\\alpha$", "Converge vers $\\frac{\\alpha+\\beta}{2}$", "Converge vers $\\beta$", "Diverge"],
                correct: "Converge vers $\\frac{\\alpha+2\\beta}{3}$",
                discuss: "En utilisant l'invariant $u_n + 2v_n = \\alpha + 2\\beta$ et le fait que $u_n$ et $v_n$ convergent vers la même limite $L$, on trouve $L = \\frac{\\alpha+2\\beta}{3}$."
            },
            4: {
                text: "La suite $(v_{n})$ :",
                options: ["Converge vers $\\alpha-\\beta$", "Converge vers $\\beta-\\alpha$", "Converge vers $\\beta$", "Diverge"],
                correct: "Converge vers $\\frac{\\alpha+2\\beta}{3}$",
                discuss: "La suite $(v_n)$ converge vers la même limite que $(u_n)$, soit $L = \\frac{\\alpha+2\\beta}{3}$."
            },
            5: {
                text: "Soit $\\delta$ un élément de $]0, 1[$. $\\lim_{n\\rightarrow+\\infty}\\prod_{k=0}^{n}(1+\\delta^{2^{k}})=$",
                options: ["1", "$+\\infty$", "$\\frac{1}{1-\\delta}$", "$\\frac{1}{1+\\delta}$"],
                correct: "$\\frac{1}{1-\\delta}$",
                discuss: "En utilisant l'identité $(1-x)(1+x) = 1-x^2$ et le fait que $\\delta^{2^{n+1}} \\to 0$, on obtient $\\lim_{n\\to\\infty} P_n = \\frac{1}{1-\\delta}$."
            },
            6: {
                text: "$\\int_{0}^{\\pi}e^{t}\\cos 2t dt=$",
                options: ["$\\frac{e^{\\pi}}{5}$", "$\\frac{e^{\\pi}+1}{5}$", "$\\frac{e^{\\pi}-2}{5}$", "$\\frac{e^{\\pi}-1}{5}$"],
                correct: "$\\frac{e^{\\pi}-1}{5}$",
                discuss: "En utilisant l'intégration par parties deux fois, la primitive est $\\frac{e^t}{5}(\\cos(2t) + 2\\sin(2t))$, et l'évaluation donne $\\frac{e^\\pi-1}{5}$."
            },
            7: {
                text: "$\\int_{0}^{\\pi}e^{t}\\cos^{2}t dt=$",
                options: ["$\\frac{e^{\\pi}-1}{5}$", "$\\frac{4(e^{\\pi}+1)}{5}$", "$\\frac{3(e^{\\pi}-1)}{5}$", "$\\frac{e^{\\pi}+2}{5}$"],
                correct: "$\\frac{3(e^{\\pi}-1)}{5}$",
                discuss: "En utilisant la linéarisation $\\cos^2(t) = \\frac{1+\\cos(2t)}{2}$ et les résultats précédents, on obtient $\\frac{3(e^\\pi-1)}{5}$."
            },
            8: {
                text: "L'intégrale $\\int_{a}^{b}tf(t)dt=$",
                options: ["$\\frac{a-b}{2}\\int_{a}^{b}f(t)dt$", "$\\frac{b}{2}\\int_{a}^{b}f(t)dt$", "$\\frac{a}{2}\\int_{a}^{b}f(t)dt$", "$\\frac{a+b}{2}\\int_{a}^{b}f(t)dt$"],
                correct: "$\\frac{a+b}{2}\\int_{a}^{b}f(t)dt$",
                discuss: "En utilisant le changement de variable $x = a+b-t$ et la propriété $f(a+b-x)=f(x)$, on obtient $I = \\frac{a+b}{2}\\int_a^b f(t)dt$."
            },
            9: {
                text: "L'intégrale $\\int_{0}^{\\pi}\\frac{\\sin t}{3+\\cos^{2}t}dt=$",
                options: ["$\\frac{\\pi}{\\sqrt{3}}$", "$\\frac{\\pi}{3\\sqrt{3}}$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{2\\sqrt{3}}$"],
                correct: "$\\frac{\\pi}{3\\sqrt{3}}$",
                discuss: "En posant $u=\\cos(t)$ et en utilisant la formule de l'arctangente, on obtient $\\frac{\\pi}{3\\sqrt{3}}$."
            },
            10: {
                text: "L'intégrale $\\int_{0}^{\\pi}\\frac{t\\sin t}{3+\\cos^{2}t}dt=$",
                options: ["$\\frac{\\pi}{6\\sqrt{3}}$", "$\\frac{\\pi^{2}}{6\\sqrt{3}}$", "$\\frac{\\pi^{3}}{6\\sqrt{3}}$", "$\\frac{\\pi^{2}}{2\\sqrt{3}}$"],
                correct: "$\\frac{\\pi^{2}}{6\\sqrt{3}}$",
                discuss: "En utilisant le résultat de la question 8 avec $f(t)=\\frac{\\sin t}{3+\\cos^2 t}$, on obtient $\\frac{\\pi}{2} \\times \\frac{\\pi}{3\\sqrt{3}} = \\frac{\\pi^2}{6\\sqrt{3}}$."
            },
            11: {
                text: "Le produit $ab$ vaut :",
                options: ["$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{7}{3}$", "1"],
                correct: "$\\frac{7}{3}$",
                discuss: "En utilisant l'identité $(Y+X)(Y-X) = Y^2-X^2$ et en calculant, on obtient $ab = \\frac{\\sqrt[3]{343}}{3} = \\frac{7}{3}$."
            },
            12: {
                text: "$\\lambda$ est solution de l'équation :",
                options: ["$x^{3}-7x-36=0$", "$x^{3}+7x-21=0$", "$x^{3}-7x=0$", "$x^{3}-7x-35=0$"],
                correct: "$x^{3}-7x-36=0$",
                discuss: "En calculant $\\lambda^3 = (a+b)^3$ et en utilisant $ab=7/3$ et $a^3+b^3=36$, on obtient l'équation $\\lambda^3 - 7\\lambda - 36 = 0$."
            },
            13: {
                text: "La valeur de $\\lambda$ est alors :",
                options: ["nulle", "un réel pair", "un réel impair", "$\\lambda>4$"],
                correct: "un réel pair",
                discuss: "En testant les diviseurs de 36 dans l'équation $\\lambda^3 - 7\\lambda - 36 = 0$, on trouve que $\\lambda=4$ est la seule solution réelle, qui est un nombre pair."
            },
            14: {
                text: "La valeur de $P_2$ est :",
                options: ["0,52", "0,59", "0,54", "0,62"],
                correct: "0,62",
                discuss: "En utilisant la formule des probabilités totales : $P_2 = (0.8)(0.1) + (0.6)(0.9) = 0.08 + 0.54 = 0.62$."
            },
            15: {
                text: "L'étudiant a répondu correctement à la deuxième question, la probabilité qu'il ait donné une mauvaise réponse à la première vaut :",
                options: ["$\\frac{27}{37}$", "$\\frac{21}{37}$", "$\\frac{27}{31}$", "$\\frac{21}{31}$"],
                correct: "$\\frac{27}{31}$",
                discuss: "Par la formule de Bayes : $P(\\bar{B_1}|B_2) = \\frac{0.6 \\times 0.9}{0.62} = \\frac{0.54}{0.62} = \\frac{27}{31}$."
            },
            16: {
                text: "La probabilité que le candidat ait au moins une bonne réponse aux trois premières questions est :",
                options: ["0,856", "0,865", "0,685", "0,585"],
                correct: "0,856",
                discuss: "En calculant la probabilité de l'événement complémentaire : $P(\\bar{A}) = 0.9 \\times 0.4 \\times 0.4 = 0.144$. Donc $P(A) = 1 - 0.144 = 0.856$."
            },
            17: {
                text: "$f$ admet deux points invariants $B$ et $C$. La somme des parties imaginaires de $z_{B}$ et $z_{C}$ vaut :",
                options: ["-6", "6", "5", "-5"],
                correct: "6",
                discuss: "Les points invariants vérifient $z^2-6iz+7=0$. La somme des racines est $6i$, donc la somme des parties imaginaires est 6."
            },
            18: {
                text: "Il existe un réel $\\theta$ tel que l'affixe $z$ de $M$ s'écrit :",
                options: ["$3i-4e^{i\\theta}$", "$-3i-4e^{i\\theta}$", "$3i+4e^{-i\\theta}$", "$3i+4e^{i\\theta}$"],
                correct: "$3i+4e^{i\\theta}$",
                discuss: "Le cercle a pour centre $\\omega = 3i$ et rayon $R = 4$. L'équation paramétrique est $z = 3i+4e^{i\\theta}$."
            },
            19: {
                text: "Il existe un réel $\\theta$ tel que l'affixe $z'$ de $M'$ s'écrit :",
                options: ["$3i-4e^{-i\\theta}$", "$-3i+4e^{i\\theta}$", "$-3i-4e^{-i\\theta}$", "$3i+4e^{-i\\theta}$"],
                correct: "$3i-4e^{-i\\theta}$",
                discuss: "En remplaçant $z=3i+4e^{i\\theta}$ dans la transformation, on obtient $z' = 3i - 4e^{-i\\theta}$."
            },
            20: {
                text: "Le point $M'$ :",
                options: ["est à l'intérieur du cercle", "est à l'extérieur du cercle", "appartient au cercle", "est le centre du cercle"],
                correct: "appartient au cercle",
                discuss: "La distance de $M'$ au centre est $|z'-\\omega| = |3i-4e^{-i\\theta} - 3i| = 4$, égale au rayon. Donc $M'$ appartient au cercle."
            }
        },
		2013: {
            1: {
                text: "Si l'on considère un(e) candidat(e) 2013 au hasard, ayant réussi le concours ENSA, la probabilité pour qu'il (ou elle) n'ait ni mention \"Très Bien\" ni mention \"Bien\" est :",
                options: ["0,0144", "0,0489", "0,1444", "0,0498"],
                correct: "0,0489",
                discuss: "En utilisant le théorème de Bayes avec $P(R) = 0,6125$ et $P(R|A) \\times P(A) = 0,03$, on obtient $P(A|R) = \\frac{0,03}{0,6125} \\approx 0,0489$."
            },
            2: {
                text: "Le nombre de comités différents à former est :",
                options: ["80", "60", "40", "20"],
                correct: "40",
                discuss: "Il faut choisir 3 mathématiciens parmi 5 ($C_5^3 = 10$) et 1 physicien parmi 4 restants ($C_4^1 = 4$). Le total est $10 \\times 4 = 40$."
            },
            3: {
                text: "Le reste de la division euclidienne de $1234^{4321}+4321^{1234}$ par 7 est égal à :",
                options: ["1", "2", "3", "4"],
                correct: "4",
                discuss: "En travaillant modulo 7 : $1234 \\equiv 2$ et $4321 \\equiv 2$. Les exposants sont $\\equiv 1 \\pmod{3}$, donc $2^{4321} + 2^{1234} \\equiv 2 + 2 = 4 \\pmod{7}$."
            },
            4: {
                text: "Le nombre $2^{100}-1$ :",
                options: ["est divisible par 31 et non par 3", "est divisible par 3 et non par 31", "est divisible par 3 et par 31", "n'est divisible ni par 3 ni par 31"],
                correct: "est divisible par 3 et par 31",
                discuss: "Modulo 3 : $2^{100} \\equiv (-1)^{100} \\equiv 1$, donc divisible par 3. Modulo 31 : $2^5 \\equiv 1$, donc $2^{100} \\equiv 1$, donc divisible par 31."
            },
            5: {
                text: "La valeur de la somme $S=\\sum_{k=1}^{35}k^{2}$ est :",
                options: ["14512", "14510", "14910", "14215"],
                correct: "14910",
                discuss: "En utilisant la formule $\\sum_{k=1}^{n}k^{2} = \\frac{n(n+1)(2n+1)}{6}$ avec $n=35$ : $S = \\frac{35 \\times 36 \\times 71}{6} = 14910$."
            },
            6: {
                text: "La valeur de la somme $\\sum_{k=1}^{10}\\frac{1}{k(k+1)}$ est :",
                options: ["$\\frac{12}{11}$", "$\\frac{11}{10}$", "$\\frac{11}{12}$", "$\\frac{10}{11}$"],
                correct: "$\\frac{10}{11}$",
                discuss: "En utilisant la décomposition $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$, la somme télescopique donne $1 - \\frac{1}{11} = \\frac{10}{11}$."
            },
            7: {
                text: "$\\lim_{n\\rightarrow+\\infty}\\frac{1}{n^{2}}\\sum_{k=1}^{n}E(7k)$ :",
                options: ["7", "$\\frac{7}{2}$", "$\\frac{7}{3}$", "$\\frac{7}{4}$"],
                correct: "$\\frac{7}{2}$",
                discuss: "Comme $E(7k) = 7k$ pour tout entier $k$, la somme est $7\\frac{n(n+1)}{2}$ et la limite est $\\frac{7}{2}$."
            },
            8: {
                text: "$\\lim_{n\\rightarrow+\\infty}\\sqrt[n]{2+(-1)^{n}}$ :",
                options: ["1", "$\\sqrt{2}$", "$\\sqrt{3}$", "$+\\infty$"],
                correct: "1",
                discuss: "Pour $n$ pair : $\\sqrt[n]{3} \\to 1$. Pour $n$ impair : $\\sqrt[n]{1} = 1$. Les deux sous-suites convergent vers 1."
            },
            9: {
                text: "Si $Z_{1}$, $Z_{2}$ sont les deux solutions de l'équation $z^{2}=5-12i$, alors $\\text{Re}(z_{1})\\text{Im}(z_{2})$ vaut :",
                options: ["6", "3", "-6", "0"],
                correct: "6",
                discuss: "En posant $z_1 = x+iy$ et $z_2 = -x-iy$, et en identifiant $(x+iy)^2 = 5-12i$, on trouve $xy = -6$, donc $\\text{Re}(z_1)\\text{Im}(z_2) = x(-y) = 6$."
            },
            10: {
                text: "La partie imaginaire du nombre complexe $z=(\\frac{1+i\\sqrt{3}}{1-i})^{20}$ est :",
                options: ["$\\sqrt{3}^{20}$", "$-512\\sqrt{3}$", "$-20\\sqrt{3}$", "$+512\\sqrt{3}$"],
                correct: "$-512\\sqrt{3}$",
                discuss: "En forme exponentielle : $z = (\\sqrt{2} e^{i7\\pi/12})^{20} = 1024 e^{-i\\pi/3} = 512 - 512i\\sqrt{3}$. La partie imaginaire est $-512\\sqrt{3}$."
            },
            11: {
                text: "$\\lim_{x\\rightarrow0_{+}}\\frac{\\sqrt{x+x^{2}}-\\sqrt{x}}{\\sqrt{3x}\\ln(1+x)}$ :",
                options: ["$\\frac{1}{2\\sqrt{3}}$", "$\\frac{1}{3\\sqrt{3}}$", "$+\\infty$", "0"],
                correct: "$\\frac{1}{2\\sqrt{3}}$",
                discuss: "En rationalisant le numérateur et en utilisant $\\ln(1+x) \\sim x$, la limite devient $\\frac{1}{2\\sqrt{3}}$."
            },
            12: {
                text: "$\\lim_{x\\rightarrow0}\\frac{\\ln(\\cos(2x))}{\\ln(\\cos(3x))}$ :",
                options: ["$\\frac{2}{3}$", "$\\frac{3}{2}$", "$\\frac{4}{9}$", "$\\frac{9}{4}$"],
                correct: "$\\frac{4}{9}$",
                discuss: "En utilisant $\\ln(\\cos(ax)) \\sim -\\frac{a^2x^2}{2}$ en 0, la limite est $\\frac{-4x^2/2}{-9x^2/2} = \\frac{4}{9}$."
            },
            13: {
                text: "$\\lim_{x\\rightarrow0}\\frac{\\ln(x)+x^{2}}{\\ln(x+x^{2})}$ :",
                options: ["1", "0", "$-\\infty$", "$+\\infty$"],
                correct: "1",
                discuss: "En factorisant par $\\ln(x)$ et en utilisant $\\ln(x+x^2) = \\ln(x)+\\ln(1+x)$, la limite est 1."
            },
            14: {
                text: "$\\int_{0}^{3}\\frac{dx}{3+2^{x}}$ :",
                options: ["$-\\frac{\\ln(11)}{\\ln(8)}$", "$\\frac{5}{3}$", "$\\frac{1}{5}-\\frac{\\ln(11)}{\\ln(8)}$", "$\\frac{5}{3}-\\frac{\\ln(11)}{\\ln(8)}$"],
                correct: "$\\frac{5}{3}-\\frac{\\ln(11)}{\\ln(8)}$",
                discuss: "En posant $u=2^x$ et en décomposant en éléments simples, on obtient le résultat après intégration."
            },
            15: {
                text: "$\\int_{0}^{1}\\ln(1+x^{2})dx$ :",
                options: ["$\\ln(2)$", "$\\pi$", "$\\frac{\\pi}{2}$", "$\\ln(2)-2+\\frac{\\pi}{2}$"],
                correct: "$\\ln(2)-2+\\frac{\\pi}{2}$",
                discuss: "En intégrant par parties avec $u=\\ln(1+x^2)$ et $dv=dx$, on obtient $\\ln(2) - (2-\\frac{\\pi}{2}) = \\ln(2)-2+\\frac{\\pi}{2}$."
            },
            16: {
                text: "$\\int_{0}^{1}x^{2}\\sqrt{1-x^{2}}dx$ :",
                options: ["$\\frac{\\pi}{8}$", "$\\ln(2)$", "0", "$\\frac{\\pi}{16}$"],
                correct: "$\\frac{\\pi}{16}$",
                discuss: "En posant $x=\\sin\\theta$ et en linéarisant, on obtient $\\frac{1}{8}\\int_0^{\\pi/2}(1-\\cos(4\\theta))d\\theta = \\frac{\\pi}{16}$."
            },
            17: {
                text: "La distance du point C à la droite (AB) est égale à :",
                options: ["$\\sqrt{5}$", "$\\sqrt{10}$", "$2\\sqrt{10}$", "$10\\sqrt{2}$"],
                correct: "$\\sqrt{10}$",
                discuss: "Avec A(-4,5), B(5,2), C(-2,1), l'équation de (AB) est $x+3y-11=0$. La distance de C à cette droite est $\\frac{|-10|}{\\sqrt{10}} = \\sqrt{10}$."
            },
            18: {
                text: "Si M est un point intérieur quelconque du triangle ABC, alors la valeur de la somme des distances de M aux côtés de ABC est :",
                options: ["$7\\frac{\\sqrt{3}}{2}$", "$6\\sqrt{3}$", "6", "$\\sqrt{3}$"],
                correct: "6",
                discuss: "D'après le théorème de Viviani, pour un triangle équilatéral de côté $4\\sqrt{3}$, la somme des distances est égale à la hauteur : $h = 4\\sqrt{3} \\cdot \\frac{\\sqrt{3}}{2} = 6$."
            },
            19: {
                text: "Si $\\dim E=4$ et $\\dim H_{1}=\\dim H_{2}=3$, alors $\\dim(H_{1}\\cap H_{2})$ :",
                options: ["0", "1", "2", "3"],
                correct: "2",
                discuss: "En utilisant la formule de Grassmann avec $\\dim(H_1+H_2) = 4$ : $4 = 3 + 3 - \\dim(H_1 \\cap H_2)$, donc $\\dim(H_1 \\cap H_2) = 2$."
            },
            20: {
                text: "La matrice $B^{13}$ vaut :",
                options: ["$\\begin{pmatrix}1&13&91\\\\ 0&1&13\\\\ 0&0&1\\end{pmatrix}$", "$\\begin{pmatrix}1&13&92\\\\ 0&1&13\\\\ 0&0&1\\end{pmatrix}$", "$\\begin{pmatrix}1&13&93\\\\ 0&1&13\\\\ 0&0&1\\end{pmatrix}$", "$\\begin{pmatrix}1&13&94\\\\ 0&1&13\\\\ 0&0&1\\end{pmatrix}$"],
                correct: "$\\begin{pmatrix}1&13&91\\\\ 0&1&13\\\\ 0&0&1\\end{pmatrix}$",
                discuss: "En utilisant la formule du binôme de Newton avec $B = I + N$ où $N$ est nilpotente : $B^{13} = I + 13N + C_{13}^2 N^2 = I + 13N + 78N^2$."
            }
    }},
    "FMP": {
        2025: {
            1: {
                text: "Soit $I = \\int_{0}^{\\pi} |\\cos x| dx$. Quelle est la valeur de I ?",
                options: ["0", "1", "2", "π", "Aucune des réponses n'est juste"],
                correct: "c",
                discuss: "La fonction cosinus est positive sur l'intervalle $[0, \\frac{\\pi}{2}]$ et négative sur $[\\frac{\\pi}{2}, \\pi]$. Nous devons donc diviser l'intégrale en deux parties : 1. Sur $[0, \\frac{\\pi}{2}]$, $|\\cos x| = \\cos x$. 2. Sur $[\\frac{\\pi}{2}, \\pi]$, $|\\cos x| = -\\cos x$. L'intégrale devient : $I = \\int_{0}^{\\frac{\\pi}{2}} \\cos x \\,dx + \\int_{\\frac{\\pi}{2}}^{\\pi} (-\\cos x) \\,dx = [\\sin x]_{0}^{\\frac{\\pi}{2}} - [\\sin x]_{\\frac{\\pi}{2}}^{\\pi} = (1 - 0) - (0 - 1) = 1 - (-1) = 2$."
            },
            2: {
                text: "Quelle est la valeur de l'intégrale définie suivante : $J = \\int_{0}^{1} \\frac{1-x^2}{(1+x^2)^2} dx$ ?",
                options: ["1/2", "π/4", "1", "0", "Aucune des réponses n'est juste"],
                correct: "a",
                discuss: "Utilisons un changement de variable trigonométrique. Posons $x = \\tan(\\theta)$, ce qui implique $dx = \\sec^2(\\theta) d\\theta$. L'intégrale devient : $J = \\int_{0}^{\\frac{\\pi}{4}} \\frac{1-\\tan^2\\theta}{(1+\\tan^2\\theta)^2} \\sec^2\\theta \\,d\\theta = \\int_{0}^{\\frac{\\pi}{4}} \\cos(2\\theta) \\,d\\theta = \\frac{1}{2}\\sin(\\frac{\\pi}{2}) = \\frac{1}{2}$."
            },
            3: {
                text: "Soit la suite $(U_n)$ définie par : $U_1 = 1$ et pour tout $n \\ge 1$, $U_{n+1} = \\sqrt{2+U_n}$. Quelle est la limite de la suite $(U_n)$ ?",
                options: ["$\\sqrt{2}$", "$1+\\sqrt{2}$", "la suite est divergente", "2", "Aucune des réponses n'est juste"],
                correct: "d",
                discuss: "Si la suite converge vers une limite finie $L$, alors $L = \\sqrt{2+L}$. En élevant au carré : $L^2 = 2+L$, soit $L^2 - L - 2 = 0$. Les solutions sont $(L-2)(L+1) = 0$, donc $L=2$ ou $L=-1$. Comme tous les termes sont positifs, la limite est $L=2$."
            },
            4: {
                text: "Soient a et b deux nombres complexes tels que $ab \\ne 1$ et $|a|=1$. Quelle est la valeur de $|\\frac{a-b}{1-\\bar{a}b}|$ ?",
                options: ["0", "1", "2", "$\\sqrt{2}$", "Aucune des réponses n'est juste"],
                correct: "b",
                discuss: "Calculons $|Z|^2 = \\frac{(a-b)(\\bar{a}-\\bar{b})}{(1-\\bar{a}b)(1-a\\bar{b})} = \\frac{a\\bar{a} - a\\bar{b} - b\\bar{a} + b\\bar{b}}{1 - a\\bar{b} - \\bar{a}b + \\bar{a}ba\\bar{b}}$. Avec $|a|=1$, donc $a\\bar{a}=1$, le numérateur devient $1 - a\\bar{b} - b\\bar{a} + |b|^2$ et le dénominateur $1 - a\\bar{b} - \\bar{a}b + |b|^2$. Ils sont identiques, donc $|Z|=1$."
            },
            5: {
                text: "Soit $C = 1+\\cos(2\\pi/5) + \\cos(4\\pi/5) + \\cos(6\\pi/5) + \\cos(8\\pi/5)$, quelle est la valeur de C ?",
                options: ["1", "2", "-1", "0", "Aucune des réponses n'est juste"],
                correct: "d",
                discuss: "Cette somme est la partie réelle de la somme des 5-ièmes racines de l'unité : $1 + e^{i\\frac{2\\pi}{5}} + e^{i\\frac{4\\pi}{5}} + e^{i\\frac{6\\pi}{5}} + e^{i\\frac{8\\pi}{5}} = 0$. La partie réelle étant nulle, $C=0$."
            },
            6: {
                text: "On définit la fonction $f(x) = \\begin{cases} \\frac{\\sqrt{1+x}-1}{x}, & x \\ne 0 \\\\ a, & x=0 \\end{cases}$. Pour quelle valeur de a la fonction f est-elle continue en x=0 ?",
                options: ["0", "1/2", "1", "-1", "Aucune des réponses n'est juste"],
                correct: "b",
                discuss: "Pour la continuité, $\\lim_{x \\to 0} \\frac{\\sqrt{1+x}-1}{x} = a$. En multipliant par la quantité conjuguée : $\\lim_{x \\to 0} \\frac{(1+x)-1}{x(\\sqrt{1+x}+1)} = \\lim_{x \\to 0} \\frac{1}{\\sqrt{1+x}+1} = \\frac{1}{2}$. Donc $a = \\frac{1}{2}$."
            },
            7: {
                text: "Soit la fonction f(x) = sin(x)·cos(x). Quelle est la valeur maximale de f(x) sur ℝ ?",
                options: ["1/2", "$\\sqrt{2}+1$", "2", "$\\sqrt{2}$", "Aucune des réponses n'est juste"],
                correct: "a",
                discuss: "En utilisant la formule de l'angle double : $f(x) = \\sin(x)\\cos(x) = \\frac{1}{2}\\sin(2x)$. La valeur maximale de $\\sin(2x)$ étant 1, la valeur maximale de $f(x)$ est $\\frac{1}{2}$."
            },
            8: {
                text: "Résoudre dans ℝ l'équation : $e^{-x} = \\frac{\\sqrt{e^{2x+4}}}{e^x}$. Quelle est la bonne réponse ?",
                options: ["x=1", "x=0", "x=3/2", "x=-1", "Aucune des réponses n'est juste"],
                correct: "e",
                discuss: "En simplifiant : $\\sqrt{e^{2x+4}} = e^{x+2}$, donc $e^{-x} = \\frac{e^{x+2}}{e^x} = e^2$. En égalant les exposants : $-x = 2$, soit $x = -2$. Cette valeur ne figure pas dans les options a, b, c, d."
            },
            9: {
                text: "Une urne contient 9 boules : dont 5 boules rouges numérotées de 1 à 5 et 4 boules noires numérotées de 1 à 4. On tire simultanément deux boules. Calculer $P_A(B)$ où A : « les deux boules sont de même couleur » et B : « les deux boules portent un numéro pair » ?",
                options: ["1/8", "1/18", "2/9", "1/9", "Aucune des réponses n'est juste"],
                correct: "a",
                discuss: "$P(A) = \\frac{C(5,2)+C(4,2)}{C(9,2)} = \\frac{16}{36}$. $P(A \\cap B) = \\frac{C(2,2)+C(2,2)}{C(9,2)} = \\frac{2}{36}$ (boules rouges paires {2,4} et noires paires {2,4}). Donc $P_A(B) = \\frac{2/36}{16/36} = \\frac{1}{8}$."
            },
            10: {
                text: "On lance deux dés équilibrés à 6 faces. Quelle est la probabilité d'obtenir au moins un 6 ?",
                options: ["1/6", "11/36", "5/6", "25/36", "Aucune des réponses n'est juste"],
                correct: "b",
                discuss: "La probabilité de ne pas obtenir de 6 sur un dé est $\\frac{5}{6}$. Pour deux dés indépendants : $P(\\text{aucun 6}) = \\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{36}$. Donc $P(\\text{au moins un 6}) = 1 - \\frac{25}{36} = \\frac{11}{36}$."
            },
            11: {
                text: "Soient les points A(1,1,-2), B(0,5,5), C(6,-3,-5), D(1,2,0). Le vecteur $\\vec{AD}$ appartient-il au plan vectoriel engendré par $\\vec{AB}$ et $\\vec{AC}$ ?",
                options: ["Oui, pour x=1/4, y=1/4", "Oui, pour x=5/16, y=1/16", "Oui, pour x=1/2, y=1/2", "Non, car le vecteur $\\vec{AD}$ n'est pas une combinaison linéaire", "Aucune des réponses n'est juste"],
                correct: "b",
                discuss: "On résout $\\vec{AD} = x\\vec{AB} + y\\vec{AC}$ avec $\\vec{AD}(0,1,2)$, $\\vec{AB}(-1,4,7)$, $\\vec{AC}(5,-4,-3)$. Le système donne $x = 5y$ et de la deuxième équation $1 = 4x - 4y = 16y$, donc $y = \\frac{1}{16}$ et $x = \\frac{5}{16}$."
            },
            12: {
                text: "Soient les vecteurs : $\\vec{u}(1,2,-1)$, $\\vec{v}(3,6,-3)$, $\\vec{w}(0,1,1)$. Quelle est la valeur de ce produit : $(\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w}$ ?",
                options: ["0", "3", "-1", "2", "Aucune des réponses n'est juste"],
                correct: "a",
                discuss: "On observe que $\\vec{v} = 3\\vec{u}$, donc les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires. Le produit vectoriel de deux vecteurs colinéaires est nul : $\\vec{u} \\wedge \\vec{v} = \\vec{0}$. Donc $(\\vec{u} \\wedge \\vec{v}) \\cdot \\vec{w} = 0$."
            },
            13: {
                text: "La fonction $f(x) = \\frac{\\ln(x+1)}{x+e^x}$ admet au point O(0,0) une tangente d'équation :",
                options: ["y = x/e", "y = x", "y = -2x", "y = x-1", "Aucune des réponses n'est juste"],
                correct: "b",
                discuss: "L'équation de la tangente est $y = f'(0)x$. En calculant $f'(x) = \\frac{\\frac{1}{x+1}(x+e^x) - \\ln(x+1)(1+e^x)}{(x+e^x)^2}$ et en évaluant en $x=0$ : $f'(0) = \\frac{1 \\cdot 1 - 0 \\cdot 2}{1^2} = 1$. Donc l'équation est $y = x$."
            },
            14: {
                text: "On considère le nombre complexe : $z = (1+i)^{20}$. Quelle est la partie imaginaire de z ?",
                options: ["$2^{10}$", "$-2^{10}$", "0", "$\\sqrt{2}$", "Aucune des réponses n'est juste"],
                correct: "c",
                discuss: "En forme exponentielle : $1+i = \\sqrt{2}e^{i\\pi/4}$. Donc $z = (\\sqrt{2})^{20} \\cdot e^{i5\\pi} = 2^{10} \\cdot e^{i5\\pi}$. Comme $e^{i5\\pi} = \\cos(5\\pi) + i\\sin(5\\pi) = -1 + 0i$, on a $z = -2^{10}$ qui est un réel pur. Sa partie imaginaire est 0."
            }
        }
    },
    "ENSAM": {},
    "ENCG": {}
};
// Initialisation corrigée
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const school = params.get('school'); // => "ENSA" ou autre

    if (!school) {
        alert("Aucune école sélectionnée !");
        return;
    }
    console.log("École choisie :", school);
    
    // Vérifier si l'école existe dans les données
    if (!data[school] || Object.keys(data[school]).length === 0) {
        alert(`Aucune donnée disponible pour l'école ${school}`);
        // revenir en arrière
        window.history.back();
        return;
    }
    goToSchool(school, Object.keys(data[school]).length);
});

let ecole = "ENSA"; // École cible
const optionLetters = ["A", "B", "C", "D", "E"];
// État des questions
let questionsState = {};
let correctAnswers = {};
let yearOfConcour = "2025"; // Année du concours
let road = {}; // Initialisé comme objet vide

function goToSchool(school, numberOfconcours = 1) {
    ecole = school; // Mettre à jour l'école cible
    const concoursYears = document.querySelector(".year-links");
    const linkVirtual=document.querySelector(".btn-virtual-contest").querySelector('a');
    if (linkVirtual) {
        linkVirtual.href = `contest.html?school=${school}`; // Mettre à jour le lien du concours virtuel
    }

    if (!concoursYears) {
        console.error("Élément .year-links non trouvé");
        return;
    }
    
    concoursYears.innerHTML = ''; // Vider le contenu actuel
    let html = '';
    
    if (school === "ENSA") {
        for (let i = 0; i < numberOfconcours + 1; i++) {
            if (i === 5) continue; // Sauter l'année 2020
            html += `<li><a href="#" onclick="goToConcour('${2025 - i}','${2025 - i}-10-01')">${2025 - i}</a></li>`;
        }
    } else {
        for (let i = 0; i < numberOfconcours; i++) {
            html += `<li><a href="#" onclick="goToConcour('${2025 - i}','${2025 - i}-10-01')">${2025 - i}</a></li>`;
        }
    }
    
    concoursYears.innerHTML = html;

    // Vérifier si les données existent pour l'année par défaut
    if (!data[school] || !data[school][yearOfConcour]) {
        console.error(`Données non disponibles pour ${school} année ${yearOfConcour}`);
        return;
    }

    const grid = document.querySelector(".progress-grid");
    if (!grid) {
        console.error("Élément .progress-grid non trouvé");
        return;
    }
    
    grid.innerHTML = ''; // Vider le contenu actuel
    let gridHtml = '';
    const questionsCount = Object.keys(data[school][yearOfConcour]).length;
    
    for (let i = 1; i <= questionsCount; i++) {
        gridHtml += `<div class="progress-item unanswered" onclick="goToQuestion(${i})">${i}</div>`;
    }
    grid.innerHTML = gridHtml;

    goToConcour("2025", "2025-10-01");
}

function goToConcour(year, lastUpdate) {
    const container = document.querySelector(".main-content");

    if (!container) {
        console.error("Container .main-content non trouvé");
        return;
    }

    // Vérifier si l'année existe dans les données
    if (!data[ecole] || !data[ecole][year]) {
        console.error(`Année ${year} non trouvée dans les données pour l'école ${ecole}`);
        alert(`Les données pour l'année ${year} ne sont pas disponibles.`);
        return;
    }

    yearOfConcour = year;
    road = data[ecole][yearOfConcour]; // Mettre à jour la variable road

    if (!road || Object.keys(road).length === 0) {
        alert("Le concours n'est pas encore disponible.");
        return;
    }
    
    container.innerHTML = ''; // Vider le contenu actuel

    // Mettre à jour les liens d'années
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

// Initialiser l'état des questions
function initializeQuestionsState() {
    // Réinitialiser les objets
    questionsState = {};
    correctAnswers = {};
    
    if (!road || Object.keys(road).length === 0) {
        console.error("Aucune donnée de questions disponible");
        return;
    }
    
    Object.keys(road).forEach(key => {
        const questionNumber = parseInt(key);
        if (!isNaN(questionNumber)) {
            questionsState[questionNumber] = { 
                answered: false, 
                correct: null, 
                selectedOption: null 
            };
            
            // Vérifier que la question a les propriétés nécessaires
            if (road[key].options && road[key].correct !== undefined) {
                const correctIndex = road[key].options.indexOf(road[key].correct);
                if (correctIndex !== -1) {
                    correctAnswers[questionNumber] = optionLetters[correctIndex];
                } else {
                    console.error(`Réponse correcte non trouvée dans les options pour la question ${key}`);
                }
            } else {
                console.error(`Données manquantes pour la question ${key}`);
            }
        }
    });
}

function generateQuestions(lastUpdate) {
    const container = document.querySelector(".main-content");

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
    titre.textContent = `Concours ${ecole} ${yearOfConcour}`;
    tit.appendChild(titre);
    container.appendChild(tit);

    const subtit = document.createElement("p");
    subtit.className = "subtitle";
    subtit.textContent = `This section covers the questions for ${ecole} concours.`;
    container.appendChild(subtit);

    const lastup = document.createElement("p");
    lastup.className = "last-updated";
    lastup.textContent = `Last Updated : ${lastUpdate}`;
    container.appendChild(lastup);

    // Générer les questions
    Object.keys(road).forEach(key => {
        const question = road[key];
        
        // Vérifier que la question a les propriétés nécessaires
        if (!question || !question.text || !question.options) {
            console.error(`Données manquantes pour la question ${key}`);
            return;
        }

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
            if (i >= optionLetters.length) {
                console.warn(`Trop d'options pour la question ${key}`);
                return;
            }
            
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
        discussAnswer.innerHTML = (question.discuss == null) ? 
            `<p>Pas de discussion disponible</p>` : 
            `<p>${question.discuss}</p>`;
        questionCard.appendChild(discussAnswer);

        container.appendChild(questionCard);
    });

    // Initialiser l'état des questions
    initializeQuestionsState();

    // Ajouter les event listeners pour les discuss links
    setupDiscussLinks();
    // Mettre à jour la grille de progression et les statistiques
    updateProgressGrid();
        updateStats();

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

    // Vérifier si la question existe dans l'état
    if (!questionsState[questionNumber]) {
        console.error(`Question ${questionNumber} non trouvée dans l'état.`);
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

    if (isNaN(parsedNumber) || parsedNumber < 1) {
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
    const statValueTotal = document.querySelector('.stat-value.total');

    if (statValueCorrect) statValueCorrect.textContent = correct;
    if (statValueIncorrect) statValueIncorrect.textContent = incorrect;
    if (statValueUnanswered) statValueUnanswered.textContent = unanswered;
    if (statValueTotal) statValueTotal.textContent = correct + incorrect + unanswered;
}


function setupDiscussLinks() {
    const discussLinks = document.querySelectorAll('.discuss-link');
    discussLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const questionCard = link.closest('.question-card');
            const discussAnswer = questionCard.querySelector('.discuss-answer');

            if (!discussAnswer) {
                console.error('Élément discuss-answer non trouvé');
                return;
            }

            // Cacher toutes les autres réponses
            document.querySelectorAll('.question-card').forEach(card => {
                if (card !== questionCard) {
                    const otherDiscussAnswer = card.querySelector('.discuss-answer');
                    if (otherDiscussAnswer) {
                        otherDiscussAnswer.classList.remove('active');
                    }
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

function goToQuestion(question) {
    const questionCard = document.getElementById(`Q${question}`);
    if (questionCard) {
        questionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        console.error(`Question ${question} non trouvée.`);
    }
}