// Truthy and Falsy
// "",'',``,0 ,-0 ,NaN ,false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = '';

if (text) {
  console.log('hey the value Truthy');
} else {
  console.log('hey the value Falsy');
}

// if (bool1) {
//   console.log(`Hey it works!`);
// }
// if (bool2) {
//   console.log(`Hey it also works!`);
// }
