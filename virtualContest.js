
// ------------------------database------------------------
const data = {
    "ENSA": {
        2025: {
            1: {
                text: "Le nombre complexe: La valeur de $Z = (-1 + i\\sqrt{3})^{2010} + (-1 - i\\sqrt{3})^{2010}$ est:",
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
        2021: {},
        2020: {}
    },
    "FMP":{},
    "ENSAM":{},
    "ENCG":{}
};


// -----------------------------------------------------------------



// -------------------------------------------------------------
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

let questions = {};
let tableAllQuestions = [];
function getRandamQuestions(ecole, count = 20) {
    if (!data || !data[ecole]) {
        console.error(`École ${ecole} non trouvée dans les données`);
        return {};  // Retourner un objet vide au lieu d'undefined
    }

    // Vider le tableau avant de le remplir
    tableAllQuestions.length = 0;

    for (let annee in data[ecole]) {
        // PROBLÈME: data[ecole][annee] est un objet, pas un tableau
        // Il faut parcourir chaque question individuellement
        for (let questionId in data[ecole][annee]) {
            tableAllQuestions.push(data[ecole][annee][questionId]);
        }
    }

    if (tableAllQuestions.length === 0) {
        console.error("Aucune question disponible.");
        return {};
    }

    // Mélanger les questions algorithme de Fisher-Yates
    for (let i = tableAllQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableAllQuestions[i], tableAllQuestions[j]] = [tableAllQuestions[j], tableAllQuestions[i]];
    }

    // Retourner un objet avec des clés numériques (1, 2, 3...)
    // au lieu d'un tableau avec des indices (0, 1, 2...)
    const selectedQuestions = tableAllQuestions.slice(0, count);

    const questionsObj = {};
    selectedQuestions.forEach((question, index) => {
        questionsObj[index + 1] = question; // Clés commencent à 1
    });

    return questionsObj;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const school = params.get('school'); // => "ENSA" ou autre

    if (!school) {
        alert("Aucune école sélectionnée !");
        return;
    }

    console.log("École choisie :", school);

    // Maintenant, tu peux l'utiliser :
    questions = getRandamQuestions(school); // Exemple
    generateQuestionNumbers();
    loadQuestion();
    updateNavButtons();
    updateQuestionStatus();
});

// ----------------------------------------------------------
// Fonction pour générer les numéros de questions (manquante)
function generateQuestionNumbers() {
    const questionNumbersContainer = document.getElementById('questionGrid');
    questionNumbersContainer.innerHTML = ''; // Vider le conteneur avant de le remplir
    let html = '';
    // Générer les numéros de questions dynamiquement
    for (let i = 1; i <= Object.keys(questions).length; i++) {
        html += `<div class="question-number" onclick="goToQuestion(${i})">${i}</div>`;
    }
    questionNumbersContainer.innerHTML = html;
}


function loadQuestion() {

    const question = questions[currentQuestion];
    if (!question) {
        document.getElementById('questionText').textContent = `Cette question n'existe pas dans les données.`;

        // Afficher des options vides
        ['A', 'B', 'C', 'D'].forEach(letter => {
            const div = document.createElement('div');
            div.className = 'option';
            div.onclick = () => selectOption(div, letter);

            div.innerHTML = `
                <input type="radio" name="answer" value="${letter}">
                <span class="option-text">Option ${letter}</span>
            `;

            optionsContainer.appendChild(div);
        });
        return;
    } 

        document.getElementById('questionTitle').textContent = `QUESTION ${currentQuestion}`;
        // CORRECTION: Vérifier si question.text existe
        document.getElementById('questionText').textContent = question.text || 'Texte de question non disponible';

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
// --------------------------------------------------------
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
// --------------------------------------------------------------------
function updateQuestionStatus() {
    const questionNumbers = document.querySelectorAll('.question-number');
    let answeredCount = 0;
    if (!questionNumbers || questionNumbers.length === 0) {
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
// -------------------------------------------------------
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
// ------------------------------------------------------------

// ----------------------------------------------------------
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
    const percentage = Math.round(((score.correct - score.wrong) / totalQuestions) * 100);

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
        window.location.href = 'virtualContest.html'; // Rediriger vers la page d'accueil du contest
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
    }, 2000);
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
    if (!contestStarted || contestEnded) return;
    if (document.visibilityState === 'hidden') {
        // L'utilisateur a quitté l'onglet ou réduit la fenêtre
        alert("🚨 Attention ! Vous avez quitté la fenêtre. Le test va être réinitialisé.");
        location.reload(); // ou bien resetTimer(); ou resetContest();
    }
});

//-----------------------------Désactiver le clic droit et les raccourcis clavier
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function (e) {
    if (!contestStarted || contestEnded) return;
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        alert("Fonction désactivée.");
        return false;
    }
};



// ------------------------Empêcher copier, couper, coller via événements
document.addEventListener('copy', e => {
    if (!contestStarted || contestEnded) return;
    e.preventDefault();
    alert("❌ Copie interdite !");
});
document.addEventListener('cut', e => {
    if (!contestStarted || contestEnded) return;
    e.preventDefault();
    alert("❌ Coupe interdite !");
});

document.addEventListener('paste', e => {
    if (!contestStarted || contestEnded) return;
    e.preventDefault();
    alert("❌ Collage interdit !");
});

// ------------------------------------------ Désactiver sélection de texte
document.addEventListener('selectstart', e => { if (!contestStarted || contestEnded) return; e.preventDefault(); });





// -------------------------StopContest--------------------
function stopContest() {
    if (!contestStarted || contestEnded) {
        alert('Le contest n\'a pas encore commencé ou est déjà terminé.');
        return;
    }

    const answeredCount = Object.keys(answers).length;
    
    // Créer une confirmation personnalisée avec timeout
    showConfirmWithTimeout(
        `Êtes-vous sûr de vouloir arrêter le contest ?\n\nQuestions répondues: ${answeredCount}/20\n\nVotre progression sera perdue si vous continuez.`,
        5000, // 2 secondes
        (confirmed) => {
            if (confirmed) {
                document.getElementById('timerContainer').classList.remove('time-critical');
                endContestWithResults(true);
            }
            // Si pas confirmé (timeout ou annulation), on ne fait rien
        }
    );
}

function showConfirmWithTimeout(message, timeoutMs, callback) {
    // Créer l'overlay
    const overlay = document.createElement('div');
    overlay.classList.add('contest-overlay');

    // Créer la modal
    const modal = document.createElement('div');
    modal.classList.add('contest-modal');

    // Ajouter le message
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('modal-title');
    titleDiv.textContent = '⚠️Confirmation d\'arrêt du contest';
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('modal-text');
    messageDiv.textContent = message;

    // Créer le compteur
    const countdownDiv = document.createElement('div');
    countdownDiv.style.cssText = `
        margin-bottom: 20px;
        font-weight: bold;
        color: #ff6b6b;
        font-size: 16px;
    `;

    // Créer les boutons
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('modal-buttons');

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirmer';
    confirmBtn.classList.add('modal-btn' , 'secondary');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Annuler';
    cancelBtn.classList.add('modal-btn', 'primary');


    // Assembler la modal
    
    modal.appendChild(titleDiv);
    modal.appendChild(messageDiv);
    modal.appendChild(countdownDiv);
    buttonsDiv.appendChild(confirmBtn);
    buttonsDiv.appendChild(cancelBtn);
    modal.appendChild(buttonsDiv);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Variables pour le timeout
    let timeLeft = Math.ceil(timeoutMs / 1000);
    let timeoutId;
    let intervalId;
    let resolved = false;

    // Fonction pour nettoyer et fermer la modal
    function cleanup(result) {
        if (resolved) return;
        resolved = true;
        
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        document.body.removeChild(overlay);
        callback(result);
    }

    // Mettre à jour le compteur
    function updateCountdown() {
        countdownDiv.textContent = `Auto-annulation dans ${timeLeft} seconde${timeLeft > 1 ? 's' : ''}`;
        timeLeft--;
    }

    // Initialiser le compteur
    updateCountdown();
    intervalId = setInterval(() => {
        if (timeLeft >= 0) {
            updateCountdown();
        }
    }, 1000);

    // Timeout automatique
    timeoutId = setTimeout(() => {
        cleanup(false); // false = annulé par timeout
    }, timeoutMs);

    // Event listeners
    confirmBtn.addEventListener('click', () => cleanup(true));
    cancelBtn.addEventListener('click', () => cleanup(false));
    
    // Fermer avec Escape
    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            cleanup(false);
            document.removeEventListener('keydown', handleKeyDown);
        }
    }
    document.addEventListener('keydown', handleKeyDown);

    // Fermer en cliquant sur l'overlay
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            cleanup(false);
        }
    });
}