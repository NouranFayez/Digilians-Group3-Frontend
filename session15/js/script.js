
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

// let myPromise = (val) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                     if(typeof val == 'number') resolve(val*2)
//                         else reject('invalid')
//                 } , 3000)
//         })
//     }
/// handle promise with then , catch
// myPromise(20).then((result)=>{
//     // console.log(result)
//     return result
// }).then((data)=>{
//     console.log(data*100)
// })
// .catch(err=>{
//     console.log(err)
// })


/// handle promise with async await

// let myPromise = (val) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//                     if(typeof val == 'number') resolve(val*2)
//                         else reject('invalid')
//                 } , 3000)
//         })
//     }

//     let promiseResult = async ()=>{
//        try{
//          let result =await myPromise("sdfghjk")
//         let data = await result * 10
//         console.log(result)
//         console.log(data)
//        }
//        catch(err){
//         console.log(err)
//        }
//     }

//     promiseResult()




// try {
//     console.log(firstName)

   
// }
// catch (err) {
//     console.log(err)
// }


//  let lastName = "Ahmed"
//     console.log(lastName)




// let getApiData =  ()=>{
//     let url =  fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(url)
//    url.then((res)=>{
//     console.log(res)
//     return res.json()
//    }).then((data)=>{
//     console.log(data)
//    })
//    .catch(err=>{
//     console.log(err)
//    })
// }

// getApiData()



// let getApiData = async ()=>{
//     let url = await fetch('https://jsonplaceholder.typicode.com/users')
//     let apidata = await url.json()
//     console.log(apidata)
// }

// getApiData()


let handleUsers = async ()=>{
      let url = await fetch('https://jsonplaceholder.typicode.com/users')
    let apidata = await url.json()
    console.log(apidata)
    apidata.forEach(element => {
        console.log(element.name)
    });
}



// all posts = https://jsonplaceholder.typicode.com/posts?_limit=10

// all users = https://jsonplaceholder.typicode.com/users

