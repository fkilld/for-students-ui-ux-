// we can use this way as well  async and then
async function name() {}
name().then(() => {}).catch
// try catch
const cSqr = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * a)
    }, 2000)
  })
}
;(async function () {
  try{
 let res = await cSqr(2)
  console.log(res)
  let res1 = await cSqr(res)
  console.log(res1)
  let res2 = await cSqr(res1)
  console.log(res2)
  }catch(err){
    // handler err
  }
 
})() 