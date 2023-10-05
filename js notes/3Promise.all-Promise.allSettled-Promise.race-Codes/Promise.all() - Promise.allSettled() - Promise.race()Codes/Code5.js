const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1");
    },2000)
})
const p2 = "Normal string";
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise3");
    },2000)
})
Promise.all([p1, p2,p3]).then((prMsgs) => {
  console.log(prMsgs);
}).catch((err)=>{
    console.log(err);
})