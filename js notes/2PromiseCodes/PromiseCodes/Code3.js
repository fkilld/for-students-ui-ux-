function fetchData(){
    const pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data={pCode:1001,pName:'Orange'};
            resolve(data);
         },2000)
      
    })
    return pr;
}
 
console.log("Program starts here....");
fetchData().then((data)=>{
    console.log(data);
    console.log("Program ends here....");
})
.catch((err)=>{
    console.log("Error-"+err);
})
