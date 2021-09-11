import * as _ from "lodash";

export const getNumberToText = (number: number): string => {
  const nb = parseFloat(number.toString()); // nb typeOf "string"
  const getNumber = _.has(numbers, nb); // true || false -> !getNumber (20+1)
  const testes = numbers[number]; // return object's value "string"
  const text = testes;

  // if (!getNumber) {
  //   const quotient = Math.floor(testes / 10);
  //   const reste = nb % 10;
  //   text = `${testes / quotient}${reste === 1}?"-et-" : "-"${testes / reste}`;
  // }

  // console.log(typeof testes);

  //const megaTest = _.invertBy(testes);

  //console.log(megaTest);

  //if(getNumber)

  //const text = "";
  //const test = _.invertBy(numbers);
  //const test = _.invoke(numbers, numbers[1]);
  //console.log(test);

  //const inventaire = _.invert(numbers)
  //console.log("Valeur getNumber = ", getNumber);
  //if(getNumber)  _.invertBy(numbers)
  //const text = inventaire.[number];
  //console.log("valeur getNumber[0] = ", getNumber[0]);

  //console.log("valeur text = ", text);

  return text;
};

const numbers = {
  1: "un",
  2: "deux",
  3: "trois",
  4: "quatre",
  5: "ciq",
  6: "six",
  7: "sept",
  8: "huit",
  9: "neuf",
  10: "dix",
  11: "onze",
  12: "douze",
  13: "treize",
  14: "quatorze",
  15: "quize",
  16: "seze",
  17: "dix-septe",
  18: "dix-huit",
  19: "dix-neuf",
  20: "vingt",
  30: "trente",
  40: "quarante",
  50: "cinquante",
  60: "soixante",
  70: "spetente",
  80: "quatre-vingt",
  90: "nonente",
  100: "cent",
  1000: "mille",
  100000: "cent-mille",
  1000000: "million",
  1000000000: "milliard",
};
