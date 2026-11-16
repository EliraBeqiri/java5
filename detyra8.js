const fletetTotale = 157;
const fletePerStudent = 6;

let grupet = parseInt(fletetTotale / fletePerStudent);
let mbetja = fletetTotale % fletePerStudent;
let kontrolli = (grupet * fletePerStudent) + mbetja;

console.log("Fletet totale:" , fletetTotale);
console.log("Grupet e plota:" , grupet);
console.log("Fletet e mbetura:" , mbetja);
console.log("Kontrolli:" , "(" + grupet + "*"  + fletePerStudent +") + " + mbetja + "=" , kontrolli);

