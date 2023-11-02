/* 
Challenge: Use ChatGPT to generate and solve an algo problem

1. Ask ChatGPT to give you the FizzBuzz problem. Specify you do NOT
want the solution! 
2. Attempt to solve it yourself 
3. If you solve, ask ChatGPT for advice on how to improve it
4. If you don't solve, ask ChatGPT for help! 

*/ 

/* FizzBuzz Problem:

Write a program that prints the numbers from 1 to 100. But for multiples of three, instead of the number, print "Fizz", and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

That's the classic FizzBuzz problem. Best of luck solving it! */

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';

        console.log(output || i);
    }
}
console.log(fizzBuzz())

/* Prompt: How can I improve my solution so that it's more succinct and efficient?  */

/* Response: 
Your solution to the FizzBuzz problem is already quite good. The logic is clear, and it's easy to follow.

However, if you're looking to make it a tad more succinct without sacrificing readability, you might consider the following: 
*/ 

/* The efficiency improvement here is minor since the complexity remains O(n). However, the solution is somewhat more concise. */ 


