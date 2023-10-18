/* var n1 = 10, n2 = 20, n3 = "5";
console.log(n1+n2);
console.log(n3+n1);
console.log(n3-n1); */

/* let a = 1,
    b = 1;
console.log(a);
if (a == 1) {
    let b = 0;
    console.log(a)
    console.log(b)
}
console.log(b) */

/* vvv Attention à l'ordre de déclaration des var, prend du dernier au premier.*/
/* var a = 2;
var b = a + 4;
var a = 4;
console.log(a, b, a); */

/* var a = 1;
var b = 3;
var a = b;
var b = a;
console.log(a, b, a, b) */

/* var a = 1;
var b = 3;
var c = a + b;
var a = 5;
var c = b - a;
console.log(a, b, c, a, c) */

/* var a = 2
var b = a + 3;
var a = a + 5;
var b = a - 4;
console.log(a, b, a, b) */

/* vvvvvvvvvvvvvvvvvvvv Exo 1 vvvvvvvvvvvvvvvvvvvv */

/* var nom = "Fourcroy";
var prenom = "Vincent";
alert("Bonjour, je m'appelle " + prenom + " " + nom); */

/* vvvvvvvvvvvvvvvvvvvv Exo 2 vvvvvvvvvvvvvvvvvvvv */
/* var nom = prompt("Entrez votre nom");
var prenom = prompt("Entrez votre prénom");
alert("Bonjour, je m'appelle " + prenom + " " + nom); */

/* vvvvvvvvvvvvvvvvvvvv Exo 3 vvvvvvvvvvvvvvvvvvvv */

/* var nb1 = parseInt(prompt("Saisissez votre premier chiffre"));
var nb2 = parseInt(prompt("Saisissez votre second chiffre"));
var multi = nb1 * nb2;
var sous = nb1 - nb2;
var addi = nb1 + nb2;
var divis = nb1 / nb2;
alert("Le résultat de la multiplication de " +nb1 +" x " +nb2 +" est " +multi +" . ");
alert("Le résultat de la soustraction de " +nb1 +" - " +nb2 +" est " +sous +" . ");
alert("Le résultat de l'addition de " +nb1 +" + " +nb2 +" est " +addi +" . ");
alert("Le résultat de la division de " +nb1 +" / " +nb2 +" est " +divis +" . "); */

/* vvvvvvvvvvvvvvvvvvvv Exo 4 vvvvvvvvvvvvvvvvvvvv */

/* var nb1 = parseInt(prompt("Saisissez un chiffre"));
var carre = Math.pow(nb1, 2)
var carre = nb1 * nb1;
alert("Le résultat de " +nb1 + " au carré est " +carre+ "."); */

/* vvvvvvvvvvvvvvvvvvvv Exo 5 vvvvvvvvvvvvvvvvvvvv */

/* var nb1 = parseInt(prompt("Saisissez un prix HT"));
var nb2 = parseInt(prompt("Saisissez le nombre d'articles"));
var nb3 = nb1 * nb2;
var nb4 = 20;
var TTC = nb3 + (nb4 / 100 * nb3);
alert("Le prix TTC est de " +TTC +" . "); */

/* vvvvvvvvvvvvvvvvvvvv Exo 6 vvvvvvvvvvvvvvvvvvvv */

/* var nb1 = parseInt(prompt("Saisissez une longueur"));
var nb2 = parseInt(prompt("Saisissez une largeur"));
var nb3 = nb1 * nb2;
alert("La surface du rectangle est de " +nb3 +" cm². "); */

/* vvvvvvvvvvvvvvvvvvvv Exo 7 vvvvvvvvvvvvvvvvvvvv */

/* var a = 5;
var b = 10;
var temp = a;
a = b;
b = temp;
alert("La nouvelle valeur de " + a +" est " + b); */

/* vvvvvvvvvvvvvvvvvvvv Exo 8 vvvvvvvvvvvvvvvvvvvv */

/* let noteMath = parseInt(prompt("Entrez la note en mathématiques :"));
let noteInfo = parseInt(prompt("Entrez la note en informatique :"));
let noteFrancais = parseInt(prompt("Entrez la note en français :"));
let moyenne = (noteMath * 3 + noteInfo * 5 + noteFrancais *2) /10;
alert("La moyenne de l'élève est de : " +moyenne); */
