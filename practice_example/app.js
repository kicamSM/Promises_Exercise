// function wait3seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000)
//     })
// }

// wait3seconds()
//     .then(() => console.log("ALL DONE!!"))
//     .catch(() => console.log("ERROR!!"))

//     console.log("Still Waiting")



// const h1 = document.getElementById('h1');
// setTimeout(function () {
//     const h1 = document.getElementById('h1');
//     h1.style.color = 'orange'
//     setTimeout(function () {
//         h1.style.color = 'blue'
//         setTimeout(function () {
//             h1.style.color = 'red'
//         }, 2000)
//     }, 2000)

// }, 2000)

// function changeColor(id, color) {
//     // const el = document.getElementById(id)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const el = document.getElementById(id)
//             el.style.color = color;
//             resolve()
//         }, 1000)
//     })
// }

// changeColor('h1', 'teal')
// .then(() => changeColor('h1', 'orange'))
// .then(() => changeColor('h1', 'pink'))
// .then(() => changeColor('h1', 'yellow'))
// .then(() => changeColor('h1', 'blue'))
// .then(() => changeColor('h1', 'red'))
// .then(() => changeColor('h1', 'gray'))

// let mockAjaxRequest = new Promise(function (resolve, reject) {
//     let probSuccess = 0.5;
//     let requestTime = 1000;

//     setTimeout(function () {
//         let randomNum = Math.random();
//         if (randomNum < probSuccess) {
//             let data = "here's your data";
//             resolve(data); 
            
//         } else {
//             reject("sorry, your request failed");

//         }
//     }, requestTime);
// });

// function mockAjaxRequest() {
//     return new Promise(function (resolve, reject) {
//     let probSuccess = 0.5;
//     let requestTime = 1000;

//     setTimeout(function () {
//         let randomNum = Math.random();
//         if (randomNum < probSuccess) {
//             let data = "here's your data";
//             resolve(data); 
            
//         } else {
//             reject("sorry, your request failed");

//         }
//     }, requestTime);
// })
// };

// mockAjaxRequest()
// .then(data => {
//     console.log(data);
//     return mockAjaxRequest()
// })
// .then (data => console.log(data))
// .catch(err => console.log(err))


// this is what axios does 
// let request = new XMLHttpRequest();

// request.onload = function () {
//     if (request.readyState !== 4) return;

//     if (request.status >= 200 && request.status < 300) {
//     console.log("IT WORKED!!", request)

//     } else {
//     console.log("ERROR!!!")
// bad status code 
// }
// }

// request.onerror = function () {
//     console.log("NETWORK ERROR!!")
//     request = null;
// network error like no internet
// }

// request.open('GET', 'https://swapi.dev/api/planets/1/');

// request.send();

// function getComputedStyle(url) {
//     const request = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         request.onload = function () {
//             // check for for is necessary 
//             if (request.readyState !== 4) return;

//             if(request.status >= 200 && request.status < 300) {
//                 resolve(request.response)
//             } else {
//                 reject(request.status)
//             }
//             }
//             request.onerror = function () {
//                 request = null;  
//                 reject('NETWORK ERROR!!')   
//             };
//             request.open('Get', url);
//             request.send();
//     })
// }

// get('https://swapi.dev/api/planets/1/')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     // note this needs an install to work