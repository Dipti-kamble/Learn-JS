//    FUNCTIONS ::
//        It consists of   :
//        1. Function name 
//        2. Function Body
//        3. Optional return
//        4. Function types 


//  There are 2 SYNTAX of functions in JS ::
   //1 SYNTAX :
   //  Using function Keyword
   // These is defined from the starting of JS.

   //2 SYNTAX :
   //  Arrow Functions  / FAT arrow function / ES function / Module Function

   // This functions are firstly Described in ES6 -2015














    // (NO ARGS & NO RETURNS)

   //EXAMPLE 1 : Using function keyword 

    // function fun_name()
    // {
    //     console.log("I'm a function !")
    //     alert ("I'm a function !")
    // }
    // fun_name()

    //EXAMPLE 2. Using FAT arrow Functions 

    // let fun_name=() =>
    // {
    //     console.log("I'm an arrow function")
    // }
    // fun_name()

    

    // ARGS BUT NO RETURN

    //EXAMPLE 1 : Using FAT Arrow Function

    // let  sum5=(num1 , num2) =>
    // {
    //     let addition = num1 + num2
    //     console.log(addition)
    // }

    // sum5(50 , 50)

    // EXAMPLE 2 : Using function Keyword

    // function sum5 (num1 , num2)
    // {
    //     console.log(num1+num2)
    // }
    // sum5(20 , 20)

    // ARGS AND RETURN :
     
    // EXAMPLE 1 : Using FAT arrow function

    //    let sum5 =(num1 , num2) =>
    //    {
    //     let addition=num1 + num2
    //     return addition 
    //    }
    //    let ans = sum5(50 , 20)
    //    console.log(ans)
    //    alert(ans)

      //  console.log(sum5(25 , 25))

        let sum5 = (num1 , num2)=>
        {
        
            return num1 + num2
        }
        
        console.log(sum5(20 ,15))


        // EXAMPLE 2 : Using Function keyword
        
        function sum6(num1 , num2)
        {
            return num1 + num2
        }
        
        console.log(sum6(200 ,15))

        //NO ARGS BUT RETURN 
        
        // Example 1 : Using FAT arrow function

        let fun1 =() =>
        {
            return "something"
        }
       console.log(fun1())

       // EXAMPLE 2 : Using function keyword

       function fun2()
       {
        return "anything"

       }
       console.log(fun2())


       // NESTED FUNCTION 
//  Function chya aat madhe ajun ek function

// SYNTAX :
    let func =()=>
    {
        let fun2 =()=>
        {
            console.log("this is a nested function")
        }
        fun2()   //function calling
    }
     func()


