//Sukurkite modulį (t.y. file'ą - multi.js),
//kuriame būtų viena eksportuota (default) funkcija -
//multiplikacija. Ji priims du skaičius kaip
//parametrus ir grąžins šiuos skaičius sudaugintus.
//Pagrindiniame JS file'e (script.js) importuokite
//ir panaudokite šį modulį.

//Įkelti šitą užduotį į github repositoriją,
//sukurti github Pages ir įkelti link'ą į chat'ą

// import { pakeltiSkaiciu } from "./maths.js";

import sudaugintiSkaiciai from "./multi.js"; // not {User}, just User

// new sudaugintiSkaiciai(5, 3);

let resultatas = sudaugintiSkaiciai(2, 5);

console.log(resultatas);

// document.querySelector("input").addEventListener("click", () => {
//   let skaicius = pakeltiSkaiciu(12);
//   alert(skaicius);
// });

// function pakeltiSkaiciu(skaicius) {
//     return skaicius * skaicius;
// }

//pakeitimas

