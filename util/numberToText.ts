import * as _ from "lodash";

const getMillionsString = (quotient, reste) => {
  if (quotient === 1 && reste === 0) return "un-million";
  else if (quotient > 1) return `${convertNumberToText(quotient)}-millions${reste === 0 ? "" : `-${convertNumberToText(reste)}`}`;
  else return `un-million-${convertNumberToText(reste)}`;
};

const getMilliardsString = (quotient, reste) => {
  if (quotient === 1 && reste === 0) return "un-milliard";
  else if (quotient > 1) return `${convertNumberToText(quotient)}-milliards${reste === 0 ? "" : `-${convertNumberToText(reste)}`}`;
  else return `un-milliard-${convertNumberToText(reste)}`;
};

const getMilleString = (quotient, reste) => {
  if (quotient === 1 && reste === 0) return "mille";
  else if (quotient > 1) return `${convertNumberToText(quotient)}-mille${reste === 0 ? "" : `-${convertNumberToText(reste)}`}`;
  else return `mille-${convertNumberToText(reste)}`;
};

export const convertNumberToText = (number: number): string => {
  let text = "";
  console.log("type of nb =", typeof number);
  console.log(parseFloat(number.toString()));
  console.log("mm", typeof parseFloat(number.toString()));

  const nb = parseFloat(number.toString());
  const n = number.toString().length;

  switch (n) {
    case 1:
      text = firstNumbers(nb);
      break;
    case 2:
      if (nb > 19) {
        const quotient = Math.floor(nb / 10);
        const reste = nb % 10;
        if (reste === 0) text = nbTen(quotient * 10);
        if (reste === 1) text = `${nbTen(quotient * 10)}-et-${firstNumbers(reste)}`;
        if (reste > 1) text = `${nbTen(quotient * 10)}-${firstNumbers(reste)}`;
      } else text = nbTen(nb);

      break;
    case 3:
      if (nb >= 100 || nb <= 999) {
        const quotient = Math.floor(nb / 100);
        const reste = nb % 100;
        if (nb === 100) text = "cent";
        else if (quotient > 1) text = `${firstNumbers(quotient)}-cent${reste === 0 ? "s" : `-${convertNumberToText(reste)}`}`;
        else text = `cent-${convertNumberToText(reste)}`;
      }
      break;
    case 4:
      if (nb >= 1000 || nb <= 9999) {
        const quotient = Math.floor(nb / 1000);
        const reste = nb % 1000;
        text = getMilleString(quotient, reste);
      }
      break;
    case 5:
      if (nb >= 10000 || nb <= 99999) {
        const quotient = Math.floor(nb / 1000);
        const reste = nb - quotient * 1000;
        text = getMilleString(quotient, reste);
      }
      break;
    case 6:
      if (nb >= 100000 || nb <= 999999) {
        const quotient = Math.floor(nb / 1000);
        const reste = nb - quotient * 1000;
        if (quotient === 1 && reste === 0) return "cent-mille";
        else if (quotient > 1) return `${convertNumberToText(quotient)}-mille${reste === 0 ? "" : `-${convertNumberToText(reste)}`}`;
        else return `cent-mille-${convertNumberToText(reste)}`;
      }
      break;
    case 7:
      if (nb >= 1000000 || nb <= 1000000) {
        const quotient = Math.floor(nb / 1000000);
        const reste = nb % 1000000;
        text = getMillionsString(quotient, reste);
      }
      break;
    case 8:
      if (nb >= 10000000 || nb <= 10000000) {
        const quotient = Math.floor(nb / 1000000);
        const reste = nb % 1000000;
        text = getMillionsString(quotient, reste);
      }
      break;
    case 9:
      if (nb >= 100000000 || nb <= 100000000) {
        const quotient = Math.floor(nb / 1000000);
        const reste = nb % 1000000;
        text = getMillionsString(quotient, reste);
      }
      break;
    case 10:
      if (nb >= 1000000000 || nb <= 1000000000) {
        const quotient = Math.floor(nb / 1000000000);
        const reste = nb - quotient * 1000000000;
        text = getMilliardsString(quotient, reste);
      }
      break;
    case 11:
      if (nb >= 10000000000 || nb <= 10000000000) {
        const quotient = Math.floor(nb / 1000000000);
        const reste = nb - quotient * 1000000000;
        text = getMilliardsString(quotient, reste);
      }
      break;
    case 12:
      if (nb >= 100000000000 || nb <= 100000000000) {
        const quotient = Math.floor(nb / 1000000000);
        const reste = nb - quotient * 1000000000;
        text = getMilliardsString(quotient, reste);
      }
      break;
    case 13:
      if (nb >= 1000000000000 || nb <= 1000000000000) {
        const quotient = Math.floor(nb / 1000000000);
        const reste = nb - quotient * 1000000000;
        text = getMilliardsString(quotient, reste);
      }
      break;
    case 14:
      if (nb >= 10000000000000 || nb <= 10000000000000) {
        const quotient = Math.floor(nb / 1000000000);
        const reste = nb - quotient * 1000000000;
        text = getMilliardsString(quotient, reste);
      }
      break;
    case 15:
      if (nb >= 100000000000000 || nb <= 100000000000000) {
        const quotient = Math.floor(nb / 1000000000);
        const reste = nb - quotient * 1000000000;
        text = getMilliardsString(quotient, reste);
      }
      break;
    case 16:
      if (nb >= 1000000000000000 || nb <= 1000000000000000) {
        text = "Vraiment beaucoup 😥";
      }
      break;
  }
  return text;
};

function firstNumbers(number: number) {
  let nb;
  switch (number) {
    case 0:
      nb = "zéro";
      break;
    case 1:
      nb = "un";
      break;
    case 2:
      nb = "deux";
      break;
    case 3:
      nb = "trois";
      break;
    case 4:
      nb = "quatre";
      break;
    case 5:
      nb = "cinq";
      break;
    case 6:
      nb = "six";
      break;
    case 7:
      nb = "sept";
      break;
    case 8:
      nb = "huit";
      break;
    case 9:
      nb = "neuf";
      break;
  }
  return nb;
}

function nbTen(number) {
  let nbTen;
  switch (number) {
    case 10:
      nbTen = "dix";
      break;
    case 11:
      nbTen = "onze";
      break;
    case 12:
      nbTen = "douze";
      break;
    case 13:
      nbTen = "treize";
      break;
    case 14:
      nbTen = "quatorze";
      break;
    case 15:
      nbTen = "quinze";
      break;
    case 16:
      nbTen = "seize";
      break;
    case 17:
      nbTen = "dix-sept";
      break;
    case 18:
      nbTen = "dix-huit";
      break;
    case 19:
      nbTen = "dix-neuf";
      break;
    case 20:
      nbTen = "vingt";
      break;
    case 30:
      nbTen = "trente";
      break;
    case 40:
      nbTen = "quarante";
      break;
    case 50:
      nbTen = "cinquante";
      break;
    case 60:
      nbTen = "soixante";
      break;
    case 70:
      nbTen = "septante";
      break;
    case 80:
      nbTen = "quatre-vingt";
      break;
    case 90:
      nbTen = "nonante";
      break;
  }
  return nbTen;
}
