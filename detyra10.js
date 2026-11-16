const pjesmarres = 45;
const cmimiPerPerson = 12;

const salla = 180;
const materialet = 95;
const reklama = 60;

let teArdhurat = pjesmarres * cmimiPerPerson;
let shpenzimet = salla + materialet + reklama;
let diferenca = teArdhurat - shpenzimet;

console.log("----- RAPORTI FINANCIAR -----");
console.log("Te ardhurat:" , teArdhurat , "€");
console.log("Shpenzimet totale:" , shpenzimet , "€");
console.log("Diferenca:" , diferenca , "€");

shpenzimet += 25;
diferenca = teArdhurat - shpenzimet;

console.log("--- Pas shpenzimeve te paparashikuara (25 €) ---");
console.log("Shpenzimet totale:" , shpenzimet , "€");
console.log("Diferenca e re:" , diferenca , "€");
console.log("--------------------------------");
