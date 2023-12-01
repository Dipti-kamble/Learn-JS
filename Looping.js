// LOOPING STATEMENTS ::

// 1 . WHILE
// 2 . DO-WHILE
// 3 . FOR
// 4 . FOR EACH
// 5 . FOR OF
// 6 . FOR IN

// 1. While loop :
 
// SYNTAX :
     // while(condition)
     //{
    //     statement/code
    //     updation 
    //  }

    // Example 1 :

    let a = 0 
    while(a <= 10)
    {
        console.log(a)
        a++
    }


    //Example 2 :

    let b = 15
    while(b >= 0)
    {
        console.log(b)
        b--
    }

    //Example 3 :  Odd and Even Number

     let num = 6

     if(num % 2 != 0)
     {
          console.log(num + " is a odd number")
     }
     else
     {
         console.log(num + " is a even number")
     }

     if(num % 2 == 0)
     {
         console.log(num + " is a even number")
     }
     else 
     {
         console.log(num + " is a odd number")
     }
     if (num % 2 == 1)
     {
         console.log(num + " is a odd number")
     }
     else 
     {
         console.log(num + " is a even number")
     }


    // Example 4 : Infinity Loop 

    // let c = 0 
    
    // while (c = 100)
    // {
    //     if(c % 2 = = 0)
    //     {
    //       console.log(c + " is even number")
    //     }
    //     else 
    //     {
    //         console.log(c + " is  odd number")
    //     }
    // }
    
    // c++ 


    //Example 5 :: FACTORIAL OF A NUMBER 
    
    let no = 6
    let fact = 1

    while( no != 0)
    {
        fact = fact * no
        no--
    }
    console.log(fact)
    

    // Example 6 :: ARMSTRONG NUMBER 

       // LHS = RHS i.e., Sum of cube of digit on the right hand side should be equals to the original number on left hand side  
     

       // Ex : 153 = 1 + 125 + 27

           let n  = 153;

 let d;

 let org = n
 let sum = 0

 while(n != 0){

     d = n % 10

     sum = sum + (d * d * d)

     // updation
     n = n / 10
      n = parseInt(n)
}

 console.log(sum)

     if(org == sum)
     {
          console.log(sum + " is a armstrong number !")
     }
     else
      {
          console.log(sum + " is not a armstrong number !")
      }
    
      sum = sum + (d * d * d)
    
      sum = 27 + 8
    
      sum = 35 + 1
    
      sum = 36
    
      d = num % 10
    
      console.log(d)
    

