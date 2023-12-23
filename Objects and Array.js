// // OBJECTS ::
// // It has a pair of key:value . 

// let obj_name =
// {
//     key : "value1", 
//     key2 : "value2", 
//     key3: "value3"
// }
// console.log(obj_name.key)
// console.log(obj_name.key2)
// console.log(obj_name.key3)


// let entry1 = 
// {
//     name :"Dipti Kamble",
//     number : "9075803630" ,
//     email : "diptik1408@gmail.com"
// }

// console.log(entry1.name)
// console.log(entry1.number)
// console.log(entry1.email)




// //ARRAY ::
// // It is a collection of similar entities.
// //Array always starts with the 0th index .

// let arr1 =[1,2,3,4,5,6,7,8,9]

// //here, 1-9 are the elements in array. And the index number of 1 will be 0 and that of 9 will be 8.

// console.log(arr1.length)


// //ARRAY OF AN OBJECT  :

// let obj_name1 = 
// [
//     {name1 :"name1",  stud_roll : 1},
//     {name2 : "name2",  stud_roll : 2},
//     {name3 : "name3",  stud_roll : 3}
// ]

// console.log(obj_name1.name1)
// // console.log(fsd.stud_roll)


// //REASSIGNMENT IN ARRAY  :     same can be done with objects

// let arr2 =  [1,2,3,4,5,6,"str1",true,10,"str2"]

// console.log(arr2.length)
// console.log(arr2)

// console.log(arr2[6])

// //for reassigment :
// arr2[6]="newvalue"
// console.log(arr2)
// console.log(arr2[6])


// //ARRAY ITERATION :: Each and every element la access karu shakto

// let arr = [1,2,3,4,5,6,"str1",true,10,"str2"]

// for (let i=0 ; i < arr.length ; i++)

// {
//     console.log(arr[i])
// }


// //METHODS IN ARRAY :: 

// //1.Push() : add karte trailing(end) portion nantar 

// // let numbers = [1,2,3,4,5,6,7,8,9]
// // let sq_numbers=[]
// // sq_numbers.push(4)

// // console.log(sq_numbers)

// //2.Pop (): Remove the element from the end of array 

// let arr4 = [1,2,3,4,5,6,7,8,9]
// arr4.pop(7)

// console.log(arr4)

// //3.shift () :

// let arr5 = [1,2,3,4,5,6,7,8,9]
// arr5.shift(1)

// console.log(arr5)

// //4.unshift() :
// let arr6 = [1,2,3,4,5,6,7,8,9]
// arr6.unshift(555) 

// console.log(arr6)


// // 2-D ARRAY ::  

// let number = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
            
// for(let i=0 ; i<number.length ; i++)
// {
//     for (let j=0 ; j<number[i].length ; j++)
//     {
//         console.log (number[i][j])
//     }
// }


// // FOR-OF LOOP  :: Especially for array 
// //  let numbers = [11,12,13,14,15]

// //  for (let number of numbers )
// //  {
// //     console.log(number)
// //  }


//  // 5.FOR EACH  :: It is a method of array

//  //syntax : numbers.foreach( () => {} )

//  //Example :    
//     //  let numbers = [1,2,3,4,5]
//     //  numbers.forEach((number) =>
//     //  {
//     //     console.log(number)
//     //  })


//      //2-D ARRAY USING FOR OF 
//     //  let numbers =  [[1,2,3],
//     //                  [4,5,6],
//     //                  [7,8,9]]
    
//     // for (let element of numbers)
//     // {      //console.log(element)
//     //     for(let number of element)
//     //     {
//     //         console.log(number)
//     //     }
//     // }


//     //6. slice() ::
//     let numbers =  [[11,2,3],
//                     [4,5,6],
//                     [7,8,9]]
//     for (let element of numbers)
//     {      //console.log(element)
//         for(let number of element)
//         {
//             console.log(number)
//         }
//     }
//     console.log(numbers.slice(0,3))

//     //7. IndexOf()  :
      
//     //  let nums = [1,2,3,4,5,6,7,8,9]
//     //  console.log(nums.indexOf(1))

//      //8.lastIndexof
      
//     //  let nums = [1,2,3,4,5,6,7,8,9]
//     //  console.log(nums.lastIndexOf(9))
//     //  console.log(nums.includes(10))

//      //9.splice() :

//      let nums = [1,2,3,4,5,6,7,8,9]
//      nums.splice(5,1,"dipti")
//      console.log(nums)





//      // MATH CLASS 

// // console.log(Math.PI)
// // console.log(Math.E)
// // console.log(Math.SQRT2)
// // console.log(Math.SQRT1_2)
// // console.log(Math.LN10)
// // console.log(Math.LOG10E)

// let list = 12   


//  console.log(Math.pow(list,4))

//  console.log(Math.sqrt(144))

//  let b90 = 1.1;

//  console.log(Math.floor(b90))
//  console.log(Math.ceil(b90))

//  console.log(Math.round(b90))

//  console.log((Math.random()*10)+1)

//  let dice = Math.floor((Math.random() * 6) + 1)

//  console.log(dice)





//  // // Array for , for of, forEach 



//Filter()

let numbers=[1,2,3,4,5,6,7,8,9,10]

let evenNumbers = numbers.filter((number)=>
{
    if (number % 2 == 0)
    {
        return number
    }
})
console.log(evenNumbers)


// map()

let displayArrayFunction = (e, i)=>
{
    console.log(e + 'is at'+ i)
}
numbers.map(displayArrayFunction)

console.log(evenNumbers)

// OBJECTS IN JS 
 //  SYNTAX ::
 // obj = {
//     key: value
//     key: value
//     key: value
//     key: value
//  }

// obj.key()

//EXAMPLE ::
 
let student =
{
    name:"Dipti",
    roll : 8 ,
    class1 : "FSD1",
    subject : "maths",
    attendance : ()=>
    {
        console.log("student is present")
    }
}

console.log(student.name)
console.log(student.roll)
console.log(student.class1)
console.log(student.subject)
student.attendance()


//OBJECT ITERATION 

//using forin

// for (let field in student)
// {
//     console.log(field)
// }

//or 
for (let field in student)
{
    console.log(field + ":" + student[field])
}

//DESTRUCTURE A ARRAY :

let [name,roll,class1,subject,attendace] = ["Dipti", 8 ,  "FSD1", "maths",()=>{console.log("present !")}]

console.log(name)
console.log(roll)
console.log(class1)
console.log(subject)
attendace()


//ARRAY OF AN OBJECT :: 

let classRoom = 
[
    { student_name: "student1", student_roll: 1, student_subject: "Maths", student_marks: 40 },
    { student_name: "student2", student_roll: 2, student_subject: "English", student_marks: 50 },
    { student_name: "student3", student_roll: 3, student_subject: "Science", student_marks: 70 },
    { student_name: "student4", student_roll: 4, student_subject: "Hindi", student_marks: 80 },
    { student_name: "student5", student_roll: 5, student_subject: "Maths", student_marks: 34 },
    { student_name: "student6", student_roll: 6, student_subject: "English ", student_marks: 22 },
    { student_name: "student7", student_roll: 7, student_subject: "Maths", student_marks: 30 },
    { student_name: "student8", student_roll: 8, student_subject: "Science", student_marks: 70 },
    { student_name: "student9", student_roll: 9, student_subject: "Hindi", student_marks: 66 },
    { student_name: "student10", student_roll: 10, student_subject: "Maths", student_marks: 95 }
]

let passStudent = classRoom.filter((student)=>{
    if(student.student_marks > 35){
        return student
    }
})

let failedStudent = classRoom.filter((student)=>{
    if(student.student_marks < 35){
        return student
    }
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

console.log(passStudent)
console.log(failedStudent)

// ARRAY SORT

let newArr = [0,5,6,4,3,7,2,1,9,10,8]

console.log(newArr)

