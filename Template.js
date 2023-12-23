// Template Literals ::

//  When you use the template to get the output
// Use Backticks (' ') to store this template 

let a90 = 10 
let b90 = 20 

// console.log("the value of a is " + a +"this is coole the value of b is" + b)

console.log(`the value of a is  a ${a90} this is cool the value of b is ${b90}`)

// console.log(`the value of a is ${a} the is cool the value of b is ${b}`)

// Built in date class

let date = new Date()

console.log(`${date}`)

//console.log(`${date.getDate()}`)

  date.setDate(23)

console.log(`${date.getDate()}`)
 
//date.setDate(23)

 console.log(`${date.getTime()}`)

date.setTime()

 date.setHours(13)

let greet_time = date.getHours()

console.log(greet_time)

if(greet_time < 12)
{
    console.log("good morning")
}
else if(greet_time > 12 && greet_time < 16)
{
    console.log("good afternoon")
}
else{
    console.log("good night")
}

// date.setDate(20)

//  console.log(`${date.getDate()}`)


//  console.log(date.setDate(20))





//SYNCHRONOUS AND ASYNCHRONOUS FUNCTIONS/PROGRAMMING

// Built-in intervals :
//1.setinterval() :

// setInterval(()=>{
//     console.log("Hello")
// },1000)

setInterval(()=>{
    let date2 = new Date()
    document.getElementById("time").innerHTML = date2.toLocaleTimeString()
    
},1000)

// setTimeout(() => {
//         console.log("hello world")
//      }, 2000)
    
    //  setInterval(() => { 

    //     setTimeout(()=>{
    //         console.log("hello world")
    //     },2000)
    
    // },1000)
    

    //ARRAY SORTING :

    let nums = [4,1,5,3,6,7,8,9,10,2]
 
    //Ascending array
    
    nums.sort((prevIndex , nextIndex) => {
        console.log(`the prev index is : ${prevIndex} and the next index is : ${nextIndex} `)
        return prevIndex - nextIndex
    })

    //Descending Array 

    nums.sort((prevIndex , nextIndex) => {
        console.log(`the prev index is : ${prevIndex} and the next index is : ${nextIndex} `)
        return nextIndex - prevIndex
    })
