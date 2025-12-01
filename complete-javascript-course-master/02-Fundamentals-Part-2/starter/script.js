function calcAge1(birth) {
  return 2026 - birth;
}

const age1 = calcAge1(1999);

const calcAge2 = function calcAge2(birth) {
  return 2026 - birth;
};

const age2 = calcAge2(1999);

console.log(age1, age2);
