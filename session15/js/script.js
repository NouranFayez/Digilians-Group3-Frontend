
/// setTimeOut() setInterval()
// setTimeout(()=>{
//     console.log('javascript')
// } , 3000 )

// setInterval(()=>{
//     console.log('js')
// } , 1000)

// callBack function


// let myFunc = (val , cb)=>{
//     setTimeout(()=>{
//         if(typeof val == 'number') cb(val*2 , true)
//             else cb('invalid' , false)
//     } , 3000)

// }
// myFunc(20 , (res , flag)=>{
//     console.log(res)
//     console.log(flag)
// })

// let arr = [3, 5, 10]
// arr.forEach((elem , i , ar)=>{

// })


/// create promise 

// let date = new Date()
// console.log(date)
// promise ==> pending = waiting
// resolve - fulfilled = opetration succeeded
// reject = operation failed

let myPromise = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                    if(typeof val == 'number') resolve(val*2)
                        else reject('invalid')
                } , 3000)
        })
    }
/// handle promise with then , catch
myPromise(20).then((result)=>{
    // console.log(result)
    return result
}).then((data)=>{
    console.log(data*100)
})
.catch(err=>{
    console.log(err)
})


/// handle promise with async await