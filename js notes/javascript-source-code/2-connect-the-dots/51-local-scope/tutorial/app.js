// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let name = 'bobo';

function calculate() {
  const name = 'john';
  const age = 25;
  // code goes here
  becomesGlobal = 'global variable';
}

calculate();
console.log(becomesGlobal);

if (true) {
  const name = 'john';
}

{
  const name = 'john';
  const special = 'special';
}
console.log(special);

console.log(`my name is ${name} and I'm awesome`);
