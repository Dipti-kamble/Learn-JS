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
    
    // let no = 6
    // let fact = 1

    // while( no != 0)
    // {
    //     fact = fact * no
    //     no--
    // }
    // console.log(fact)
    

    // Example 6 :: ARMSTRONG NUMBER 

       // LHS = RHS i.e., Sum of cube of digit on the right hand side should be equals to the original number on left hand side  
     

       // Ex : 153 = 1 + 125 + 27

           let n  = 153;

  let d;

  let org = n
  let sum = 0

 while(n != 0)
 {

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





      //2. DO-WHILE LOOP :

      //Syntax :
      //   do {  
      //          statements
      //      }
      //   while
      //      (condition)


      // Example ::

              let c= 10
              do{
                console.log(c)
                c++
              }
              while
              (c <= 20)

       
       
       //3.  FOR-LOOP ::

       // Syntax :
        
       // for(initialize ; condition ; updation)
       // {
       //     console.log(statement) 
       // }

       // Example 1 :

         for(let a1=0 ; a1<10 ; a1++)
         {
            console.log(a1)
         }

       // Example 2 :

         for(let a2=10 ; a2>0 ; a2--)
         {
            console.log(a2)
         }

        // Example 3 :

          for(let num1=5 ; num1<20 ; num1++)
          {
            if(num1 % 2 !=0)
            {
                console.log(num1 + " is a odd number")
            }
            else
            {
                console.log(num1 + " is a even number")
            }
          }

          // Example 4 :

            let fact = 1
             
            for(let nu=6  ; nu !=1 ; nu--)
            {
                fact= fact * nu
                
            }
            console.log(fact)

        
        // // Example 5 :

        let num1= 153
        let d1
        let org1 = num1
        let sum1=0 

        for(let num1= 153 ; num1 !=0 ;  num1=parseInt(num1/10) )
        {
            d1= num1 % 10
            sum1 = sum1 + (d1 * d1 * d1)
            
        }
        console.log(sum1)
        
        if(org1 == sum1)
        {
            console.log(sum1 + " is an armstrong number")
        }
        else
        {
            console.log(sum1 + " is not an armstrong number")
        }
            