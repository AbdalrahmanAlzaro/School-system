const arr = [1,2,3];
const arry = [1, 2, 3, "Abd"];
let arrry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


//question 5


// for loop 
function powerOfTwoForLoop(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Math.pow(2, arr[i]));
    }
    return result;
  }
  console.log(powerOfTwoForLoop(arr));
  



//forEach loop
function powerOfTwoForEach(arr) {
    let result = [];
    arr.forEach(function(num) {
      result.push(Math.pow(2, num));
    });
    return result;
  }
  console.log(powerOfTwoForEach(arr));
  



// Map
function powerOfTwoMap(arr) {
    return arr.map(function(num) {
      return Math.pow(2, num);
    });
  }
  console.log(powerOfTwoMap(arr));







 //question 6


 function evenOrOdd(arr) {
    return arry.map(function(num) {
      if (typeof num !== "number") {
        return "N/A";
      } else if (num % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    });
  }
  console.log(evenOrOdd(arr));  





  
 //question 7

 function fizzbuzz(arr) {
    return arrry.map(function(num) {
      if (num % 3 === 0 && num % 5 === 0) {
        return "Fizz Buzz";
      } else if (num % 3 === 0) {
        return "Fizz";
      } else if (num % 5 === 0) {
        return "Buzz";
      } else {
        return num;
      }
    });
  }
  console.log(fizzbuzz(arr));
  
