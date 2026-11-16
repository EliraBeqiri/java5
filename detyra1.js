const cmimiLibri = 12.50;
const sasiaLibrave = 3;
const cmimiFletores = 1.80;
const sasiaFletoreve = 4;

let kostoLibrave = cmimiLibri * sasiaLibrave;
let kostoFletoreve = cmimiFletores * sasiaFletoreve;

let totali = kostoLibrave + kostoFletoreve;

console.log("Libra:" ,kostoLibrave , "€");
console.log("Fletore:" , kostoFletoreve , "€");
console.log("Totali pa transport:" , totali , "€");

totali += 2.50;

console.log("Transporti: 2.5 €");
console.log("Totali me transport:" , totali, "€");
