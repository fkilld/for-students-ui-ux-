async function test(){
    throw new Error("Err Found");
}
const fn=test();
console.log(fn);