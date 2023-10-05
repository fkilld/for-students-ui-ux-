const obj = Promise.race([]);
console.log(obj);
setTimeout(()=>{
      console.log(obj);
},2000);