let pr = new Promise((resolve,reject)=>{
    resolve("Data Retrieved");
    reject("Call Failure");
})
 
pr.then((msg)=>{
   console.log("Success-"+msg);
})
.catch((err)=>{
    console.log("Error-"+err); //err.message
})
.finally(()=>{
    console.log("Finishing process");
})