// // console.log('hello')

// // function sum(a){
// //     let x = 0
// //     for(let i = 0; i<=a; i++){
// //         x+=i
// //     }
// //     return x
// // }

// // console.log(sum(4)) // 10

// // a = [1,2,3,4,5,6]

// // function santa(){
// //     let date = new Date()
// //     if(date.getDate()===11 && date.getDate()===23){
// //         return true
// //     }else{
// //         return false
// //     }
// // }
// // console.log(santa())


// let x = [1,12,2,3,4,5]
// console.log(x.sort())
// console.log(x.reverse())

function circuitPower(){
    console.log('hellllo')
    let a = document.querySelector('.input_1').value;
    let b = document.querySelector('.input_2').value;
    console.log('aaaaaaaaaaaaa', a)
    return document.querySelector('.out').innerHTML = a*b
}
document.querySelector('button').onclick = circuitPower 


function age(){
    let a = document.querySelector('.age_input').value
    return document.querySelector('.age_out').innerHTML = a * 365
}

document.querySelector('.btn_age').onclick = age
// function calcAge(a){
//     return a * 365
// }

// console.log(calcAge(2))

// function getFirstValue(a){
//     return a[0]
// }

// console.log(getFirstValue([1,2,3,4])) // 1

// function findPerimeter(a,b){
//     return (a+b)*2
// }

// console.log(findPerimeter(10,20))


// function giveMeSomething(a){
//     return 'something'+' '+a
// }

// console.log(giveMeSomething('to me'))

function remainder(){
    let a = document.querySelector('.remainder_input_1').value
    let b = document.querySelector('.remainder_input_2').value
    return document.querySelector('.remainder').innerHTML = a > b ? a : b
}
document.querySelector('.remainder_btn').onclick = remainder
// console.log(remainder(4,9)) // 

// function points(a,b){
//     return (a*2)+(b*3)
// }

// console.log(points(7,5)) // 29

// function lessThen100(a,b){
//     return a+b<100 
// }

// console.log(lessThen100(12,38)) // true


function calculator(){
    let a = parseInt(document.querySelector('.calculator_input_1').value)
    let b = parseInt(document.querySelector('.calculator_input_2').value)
    console.log(typeof a);
    console.log(typeof b);
    let c = parseInt(document.querySelector('.calculator_input_3').value)
    return document.querySelector('.calculator').innerHTML = c ? (a+b)*c : a+b 
}
document.querySelector('.btn_calculator').onclick = calculator


