const numbers = [1,2,3,4,5,,11,17,16,99]

let sum =0 
  
 for(number of numbers){
     if(number%2==1){
         sum+=number
     }
 }

 console.log(`sum of odd numbers is ${sum}`)