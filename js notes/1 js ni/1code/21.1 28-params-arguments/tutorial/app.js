// Arrays, Functions and Objects
// params - when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined
const bob = 'Bob';
const susy = 'Susy';
const anna = 'Anna';

function greet(name, second) {
  console.log(second);

  console.log('Hello there ' + name);
}

// greet bob
greet(4);
// greet anna
greet(anna, 'Bob');
// greet susy
greet('Susy');
