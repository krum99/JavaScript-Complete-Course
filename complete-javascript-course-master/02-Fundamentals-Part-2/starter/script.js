// function calcAge1(birth) {
//   return 2026 - birth;
// }

// const age1 = calcAge1(1999);

// const calcAge2 = function calcAge2(birth) {
//   return 2026 - birth;
// };

// const age2 = calcAge2(1999);

// const calcAge3 = (birth) => 2026 - birth;

// const age3 = calcAge3(1999);

// console.log(age1, age2, age3);

// const ageUntilRetirement = (birthYeah, firstName) => {
//   const age = 2026 - birthYeah;
//   const retirement = 65 - age;

//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(ageUntilRetirement(1999, 'Krum'));

const friends = [1, '23', 'string'];

// add elements
console.log(friends);
console.log(friends.length);

const newLength = friends.push('one more element');
console.log(friends);
console.log(newLength);

friends.unshift('first');
console.log(friends);

// remove elements
console.log(friends.pop());
console.log(friends.shift());

console.log(friends);

console.log(friends.indexOf('23')); //return index of element

console.log(friends.includes(1));
console.log(friends.includes(10));
