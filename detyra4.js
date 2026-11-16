const produkti1 = 35;
const sasia1 = 2;
const produkti2 = 24;
const sasia2 = 1;

const zbritja = 0.15;
let transporti = 4;

let cmimiParaZbritjes = (produkti1 * sasia1) + (produkti2 * sasia2);
console.log("Cmimi para zbritjes:" , cmimiParaZbritjes , "€");

let shumaZbritjes = cmimiParaZbritjes * zbritja;
console.log("Zbritja (15%): " , shumaZbritjes, "€");

let cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;
console.log("cmimi pas zbritjes:", cmimiPasZbritjes , "€");

console.log("Transporti :" , transporti, "€");

let vleraPerfundimtare = cmimiPasZbritjes + transporti;
console.log("Vlera perfundmitare: " , vleraPerfundimtare,"€");

