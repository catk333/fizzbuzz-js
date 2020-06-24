

// Here, we create our main function.
function fizzbuzz() {

     console.log(" Welcome to Fizz Buzz")
    
     for (i=1;i<=100;i++) {

         let result = ""
    
        
         
         if (i % 3 === 0){

             result = "Fizz";
            }
         
         if ( i % 5 === 0){
            result = (result +"Buzz")
            }
    
    
        if ( i % 7 === 0){
             result = (result + "Bang")
            }

        if ( i % 11 === 0){
                result = "Bong"
            }

       if ( i % 13 === 0){
              const firstB = result.search("B");
              if (firstB === -1){
                  result = result + "Fezz";
              } else {
                    resultFirstSplit = result.slice(0,firstB) 
                    resultSecondSplit = result.slice(firstB)
                    resultIfB = "Fezz"
                    result = resultFirstSplit + resultIfB + resultSecondSplit 
              }
       }
     if (result === "") {
            result= i
            }
        

         console.log(result)
        }   
    


    
}

// Now we run the main function...
fizzbuzz();
