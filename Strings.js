// STRINGS ::

//  Anything which is written in "  " and '  ' is a String.

// To convert any data type into a string we have :

//    string()
//    to.string()

// PROPERTIES OF STRING :
// 1. LENGTH : Here it will count the length of the string . It even count the spaces given in the middle  of the characters.

// EXAMPLE :
         let str = "Hello World !"

         str.length 
         console.log(str.length)
 

// METHODS OF STRING :
//  Convert String into ::
//1. .toUpperCase :

let str1 ="dipti" 

 let Name =str1.toUpperCase()
 console.log(Name)

 //2. .toLowerCase :

 let str2 ="KAMBLE"

 let Name1 =str2.toLowerCase()
 console.log(Name1)

 //3. .concat()

 let str3 = "Web"
 let str4 = "Sync"

    let string = str3.concat(str4)
    console.log(string)

//4. .trim()   

let stat = "     string method "

console.log(stat.length)

stat= stat.trim()
console.log(stat.length)
console.log(stat)

  // Index of a string :
   let name1 = "Dipti kamble" 

   console.log(name1.length)

   //5. charAt()
    
   let char = "Character at "
    let newname = char.charAt(5 )
    console.log(newname)

    //6. indexof() 

    let ind = "Index Number" 

    let newname1 = ind.indexOf('x')

    console.log(newname1)


 //7. last indexOf()  

    let inde = "Occurence"
     
   let newname2= inde.lastIndexOf("c")

   inde.indexOf("c")

   console.log(newname2)

   //8. .slice()

   let sli = "Web Sync Solutions"

   let newstr = sli.slice(0,8)
   console.log(newstr)
   //console.log

   //9. .substr() 

   let sub = "Web Sync Solutions"

   let substr = sub.substring(0,7)

   console.log(substr)
   console.log(sub)

   //10. .replace()

   let newstr1 = "Payal Sapre"
   newstr1 = newstr1.replace("a","r")

   console.log(newstr1)

   //11. .replaceAll()

   let newstr2 = "Payal Sapre"
   newstr2 = newstr2.replaceAll("a","r")

   console.log(newstr2)

   //12. .splice 




   // EXAMPLE ::

   //Take user input (full_name)
   //separate first_name , middle_name, last_name

   //Dipti Dilip Kamble

//    let full_name =prompt("Enter your full name !")

//    let name_divider = (str) =>
//    {
//     let first_name = str.slice(0,str.indexOf("  "))

//     let middle_name =str.slice(str.indexOf("  ") +1 ,str.lastIndexOf("  "))

//     let last_name = str.slice(str.lastIndexOf(" ") +1 , str.length)

//     console.log(first_name)
//     console.log(middle_name)
//     console.log(last_name)
//    }


//    name_divider(full_name)


   // Same Example using if/else 


   let full_name =prompt("Enter your full name !")

   let name_divider = (str) =>
   
   { if(str)

    {
        let first_name = str.slice(0,str.indexOf("  "))

    let middle_name =str.slice(str.indexOf("  ") +1 ,str.lastIndexOf("  "))

    let last_name = str.slice(str.lastIndexOf(" ") +1 , str.length)

    console.log(first_name)
    console.log(middle_name)
    console.log(last_name)
   }
   else{ console.log("Please pass a string first !")}
   
  }

  name_divider(full_name)



// Same Example using if/else  using some condition

//  let full_name =prompt("Enter your full name !")

//  let name_divider = (str) =>
 
  
//   {
//     if(str.indexOf("  ") == -1)
//     {
//         console.log("Please Enter full name in the format of First name middle name and last name")
//     }
//     else
//     {
//         str=str.trim()

//         let first_name = str.slice(0,str.indexOf("  "))

//         let middle_name =str.slice(str.indexOf("  ") +1 ,str.lastIndexOf("  "))
    
//         let last_name = str.slice(str.lastIndexOf(" ") +1 , str.length)
    
//         console.log(first_name)
//         console.log(middle_name)
//         console.log(last_name)

//     }
//   }

// name_divider(full_name)

    
