

// Here, we create our main function.
function fizzbuzz() {

     console.log(" Welcome to Fizz Buzz")
    
     for (i=1;i<=20;i++) {

         let result = ""
        
         if (i % 15 === 0){
            result = "FizzBuzz";
         }
         else if (i % 3 === 0){
             result = "Fizz";

         }
         else if ( i % 5 === 0){
            result ="Buzz";
         }
         else {
             result= i
         }
         console.log(result)

    }

    
}

// Now we run the main function...
fizzbuzz();
