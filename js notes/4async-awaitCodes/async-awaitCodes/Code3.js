let res = await cSqr(2);
console.log(res); 
const cSqr=(a)=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve(a*a);
         },2000)
     });
 }
async function showRes(){
    let res = await cSqr(2);
    console.log(res); 
} 
showRes();