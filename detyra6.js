const minutaHene = 95;
const minutaMarte = 80;
const minutaMerkure = 115;

let totaliMinutave = minutaHene + minutaMarte + minutaMerkure;
let totaliOreve = totaliMinutave / 60;
let minutaMbetura = totaliMinutave % 60;

console.log("Totali i minutave:" , totaliMinutave);
console.log("Totali ne ore:" , totaliOreve);
console.log("Minutat qe mbeten pas ndarjes me 60:" , minutaMbetura);
