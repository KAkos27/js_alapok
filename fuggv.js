export function udvozles() {
  console.log("Na csumi");
}

let nev = "Jenő";
let szam = "0";

console.log(szam + " típusa: " + typeof szam);
console.log(`${szam} típusa: ${typeof szam}`);
console.log(nev + " típusa " + typeof nev);

export function elagazas() {
  if (szam === 0) {
    console.log(`A(z) ${szam} nulla`);
  } else if (szam % 2 === 0) {
    console.log(`A(z) ${szam} páros`);
  } else if (szam % 2 === 1) {
    console.log(`A(z) ${szam} páratlan`);
  } else {
    console.log(`A(z) ${szam} nem egy szám`);
  }
}

export function ciklus1() {
  let i = 0;
  while (i < 10) {
    console.log("Szép nap van");
    i++;
  }
}

export function ciklus2() {
  for (let i = 0; i < 10; i++) {
    console.log("Szép nap van");
  }
}
