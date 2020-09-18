const { SyncHook, AsyncSeriesHook } = require('tapable')
const Plugin = require('./plugin')
class Webpack {
    constructor(){
        // 生命周期
        this.hook = {
            emit: new AsyncSeriesHook(),
            done: new SyncHook()
        }
    }
    run() {
        setTimeout(() =>{
            this.hook.emit.promise()
        },1000)
        setTimeout(() =>{
            this.hooks.done.call()
        },2000)
    }
}
let options = {
    plugin:[ new Plugin()]
}
let complier = new Webpack();
for(let p of options.plugin) {
    // 插件
    p.apply(complier)
}
complier.run()