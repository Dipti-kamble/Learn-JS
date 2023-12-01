//STATEMENTS :

  // 1. Conditional Statements   :

       // if , else , if-else , if-else-if , if-else-if-ladder , nested-if , switch case , ternary statement  

  // 2. Looping Statements  :




  //1. If :
    
           // GREATEST OF 2 NOS.

//   let q = 300
//   let r = 50
  
//   if (q>r)
//   {
//           console.log("A is greater")
//   }
//     console.log("Program completed")


 //2. if-else :
  
 //let q1 = 30
 //let r1 = 50 

 //if(q1 > r1)
 //{
    console.log("Q is greater")
 //}
// else {
    console.log("R is greater")
 //}


 //3. Nested If :

  let q2 = 300
  let r2 = 40
  let s2 =50

  if(q2 > r2) 
  {
    if(q2 > s2)
    {
        console.log("Q is greater than R & S")
    }
  }


  //4. If-else-if :

  //GREATEST OF 3 NOS.  :
   
     let q3 = 300
     let r3 = 400
     let s3 = 500


     if(q3 > r3)
     {
        if(q3 > s3)
        {
            console.log("Q is greater than R & S")
        }
        else 
        {
            console.log("S is greater than Q & R")
        }
     }

     else if (r3 > s3)
     {
        console.log("R is greater than Q & S")
     }
     else 
     {
        console.log("S is greater than Q & R")
     }


     // GREATEST OF 4 NOS. :

     let p= 400
     let q = 300
     let r =200
     let s = 100
      
    if (p > q)
    {
         if(p > r)
         {
            if( p > s)
            {
                console.log("P is greater")
            }
            else
            {
                console.log("S is greater")
            }
         }
         else if (r > s)
         {
            console.log("R is greater")
         }
         else
         {
            console.log("S is greater")
         }
    }


    else if(q > r)
    {
       if( q > s)
       {
           console.log("Q is greater")
       }
       else
       {
           console.log("S is greater")
       }
    }
    else if (r > s)
    {
       console.log("R is greater")
    }
    else
    {
       console.log("S is greater")
    }


    //GREATEST OF 5 NOS ::

     let p1 = 50
     let q1 = 400
     let r1 = 3000
     let s1 = 20000
     let t1 = 100000

     if (p1 > q1)
     {
        if(p1 > r1)
        {
            if(p1 > s1)
            {
                if (p1 > t1)
                {
                    console.log("P is greater than Q , R , S ,T")
                }
                else
                {
                    console.log("T is greater than P , Q , R ,S")
                }
            }
            
            else if (s1 > t1)
            {
                console.log("S is greater than P , Q , R ,T")
            }
            else
            {
                console.log("T is greater than P , Q , R ,S")
            }
        }
        else if (r1 > s1)
        {
            if(r1 > t1)
            {
                console.log("R is greater than P , Q , S ,T")
            }
            else
            {
                console.log("T is greater than P , Q , R , S")
            }
        }

        else if (s1 > t1)
            {
                console.log("S is greater than P , Q , R ,T")
            }
            else
            {
                console.log("T is greater than P , Q , R ,S")
            }
    }   

        else if(q1 >r1)
        {
            if(q1 > s1)
            {
                if (q1 > t1)
                {
                    console.log("Q is greater than P,R,S,T")
                }
                else 
                {
                    console.log("T is greater than P , Q , R ,S")
                }
            }
            else if (s1 > t1)
            { 
                console.log("S is greater than P , R , Q , T")
            }
            else 
            {
                console.log("T is greater than P , Q , R ,S")
            }
        }

       
        else if ( r1 > s1)
        {
             if(r1 > t1)
                {
                   console.log("R is greater than P , Q , S, T")    
                }
             else 
                {
                   console.log("T is greater than P , Q , R ,S ") 
                }
        }        

                else if (s1 > t1)
                {
                    console.log("S is greater than P , Q , R ,T")
                }
                else
                {
                    console.log("T is greater than P , Q , R ,S")
                }
        

                // Same using logical operator

                if (p1 > q1 && p1 > r1 && p1 > s1 && p1 > t1) 
                    {
                         console.log("P is greater of All in Logical !")
                    } 
                     else if (q1 > r1 && q1 > s1 && q1 > t1) 
                     {
                         console.log("Q is greater of All in Logical !")
                     } 
                     else if (r1 > s1 && r1 > t1) 
                     {
                         console.log(" R is greater of All in Logical !")
                     } 
                     else if (s1 > t1)
                        {
                         console.log("S is greater of All in Logical !")
                        }
                        else
                        { 
                            console.log("T  is greater of All in Logical !")
                        }



        // WAP to find the entered year is leap year or not

        // leap comes in every 4 years )| ( once in every 400 years | not in every 100 years

        let year = 2004

        if(year % 100 == 0 )
     {
                if( year % 400 == 0)
        {
            console.log("Entered year is a leap year")
        }
        else
        {
            console.log("Entered year is not a leap year")
        }
    }

        else if ( year % 4 ==0)
        {
            console.log("Entered year is a leap year")
        }
        else 
        {
            console.log("Entered year is not a leap year")
        }


        // Same in logical opeartors

          if ((year % 400 == 0) || (year % 100 != 0 && year % 4 ==0))
          {
            console.log("Entered year is a leap year in logical OR")
          }
          else
          {
            console.log("Entered year is not a leap year in logical OR")
          }



          //SWITCH - CASES :

          //Syntax :

          // switch(option)
           // {
            //   case(option)
            //   break;
            //   case(option)
            //   break;
            //   .
            //   .
            //   .
            //   .
            //   deafault : default statement
           //  }

           //Example ::

           let choice ="4"
           
           switch(choice)
           {
            case "1" : console.log("This is first switch")
            break;
            case "2" : console.log("This is second switch")
            break;
            case "3" : console.log("This is Third switch")
            break;
            case "4" :console.log("This is fourth switch")
            break;
            default :console.log("Nothing matched to this case")
           }


           