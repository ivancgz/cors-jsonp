// const request = new XMLHttpRequest()
// request.open('GET', 'http://qq.com:8888/friends.json')
// request.onreadystatechange = ()=>{
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.response)
//     }
// }
// request.send()

// const { resolve } = require("path/posix")

// window.xxx = (data)=>{
//     console.log(data)
// }

function jsonp(url) {
    return new Promise((resolve, reject)=>{
        const random = 'ivanJSONPCallbackName' + Math.random()
        window[random] = (data)=>{
            resolve(data)
        }
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        script.onload = ()=>{
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)                
    })
}
// script.onload = ()=>{
//     console.log(window.xxx)
// }

jsonp('http://qq.com:8888/friends.js')
    .then((data)=>{
        console.log(data)
    })