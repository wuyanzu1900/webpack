const { SyncHook, AsyncSeriesHook } = require('tapable')
const hook = new SyncHook()
const asyncHook = new AsyncSeriesHook()

// on
hook.tap('hook1' , () =>{
    console.log(1)
})
// emit
hook.call();
// 异步串行
asyncHook.tapPromise('xxx',() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve()
        },4000)
    })
})
asyncHook.tapPromise('xxx',() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve()
        },3000)
    })
})
asyncHook.promise().then(() =>{
    console.log('async complete')
})