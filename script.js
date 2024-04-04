/*
//*1.Iterate through the numbers 1 to 10, and at each iteration print “i”
for(i=1;i<=10;){
    console.log(i);
    i++;
}
*/

/*
//*2.Iterate through the numbers 10 to 1, and at each iteration print “i”
for (let i = 10; i >=1; i--) {
    console.log(i);
  }
*/

/*
//*3.Convert numerical grades into letter grades (A, B, C, D, E, F)
let grade = prompt("Enter your numerical grade:");

if (!isNaN(grade)) {
  grade = parseInt(grade);
  let letterGrade;

  if (grade >= 90) {
    letterGrade = 'A';
  } else if (grade >= 80) {
    letterGrade = 'B';
  } else if (grade >= 70) {
    letterGrade = 'C';
  } else if (grade >= 60) {
    letterGrade = 'D';
  } else if (grade >= 50) {
    letterGrade = 'E';
  } else {
    letterGrade = 'F';
  }

  alert("Your grade is: " + letterGrade);
} else {
  alert("Please enter a valid numerical grade.");
}
*/

/*
//*4.A company has a list of employees and their salary in separate arrays. You are tasked with the job of printing our the name of each employee and the employee’s salary as a string in the format: “Employee name: Employee salary”
Example: let employees = [“Lara”, “Evee”, “Simi”]
                let salary = [1000, 2000, 120.90]

let employees = ["Lara", "Evee", "Simi", "cdjf"];
let salary = [1000, 2000, 120.90];

Check if the lengths of the arrays are equal
if (employees.length !== salary.length) {
    console.log("Error: Number of employees does not match number of salaries.");
} else {
    // Iterate through the arrays
    for (let i = 0; i < employees.length; i++) {
        // Print employee name and salary
        console.log("Employee name: " + employees[i] + ", Employee salary: " + salary[i]);
    }
}
*/

/*
//*5.Write a loop that displays from 1 to 10 except even numbers?
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
*/

/*
//*6.Write a program that count the odd and even numbers from the list of numbers containing 1 to 10
let number = prompt("Enter your number:");
if(number%2==0){
    console.log(number,"is an even number");
}else{
    console.log(number,"is an odd number");
}
*/

/*
//* 7.Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five, print “FizzBuzz”

let start = parseInt(prompt("Enter the start number:"));
let end = parseInt(prompt("Enter the end number:"));

for (let i = start; i <= end; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }
  console.log(output || i);
}
*/

/*
//*8.Write a program that uses a loop to calculate the sum of all numbers in an array.
let sum=0,i,num;
num=window.prompt("input number:");
num = parseInt(num);
for (i=1;i<=num;i++){
    sum+=num;
}
console.log(sum);
*/

//*9.primary number
//step1
// let n,x,i;
// n=window.prompt("Enter number:");
// i=2;
// x=n%i;
// while(x!=0){
//     i++;
//     x=n%i;
// }
// if(x==i){
//     console.log(n,"is primary number");
// }else
// console.log(n,"is primary number");
//step2
// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//           return false;
//       }
//   }
//   return num > 1;
// }
// let n=window.prompt("input n:");
// for (let i = 1; i <= n; i++) {
//   if (isPrime(i)) {
//       console.log(i, "is a prime number");
//   }
// }
/*
//*10.Write a program that finds the largest number in an array using a loop.
let numbers = [10, 5, 20, 15, 25];
let largest = numbers[0]; // Assume the first number is the largest initially

// Iterate over the array starting from the second element
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) { // If current number is larger than the assumed largest
        largest = numbers[i]; // Update the largest number
    }
}

console.log("The largest number is:", largest);
*/
