const cmimi1Tekst = "19.90";
const cmimi2Tekst = "8.50";
const sasia1 = 2;
const sasia2 = 3;

let cmimi1 = Number(cmimi1Tekst);
let cmimi2 = Number(cmimi2Tekst);

let totaliArtikulli1 = cmimi1 * sasia1;
let totaliArtikulli2 = cmimi2 * sasia2;


let shumaPorosise = totaliArtikulli1 + totaliArtikulli2;

let tarifa = shumaPorosise * 0.10;
let shumaFinale = shumaPorosise + tarifa;

let shumaFormatizuar = shumaFinale.toFixed(2);

console.log("Totali i artikullit 1:" , totaliArtikulli1 , "€");
console.log("Totali i artikullit 2:" , totaliArtikulli2, "€");
console.log("Shuma e porosise:" , shumaPorosise , "€");
console.log("Tarifa e sherbimit (10%):" , tarifa , "€");
console.log("Shuma finale :" , shumaFormatizuar , "€");
console.log("Tipi i vleres se formatizuar:" , typeof shumaFormatizuar);
