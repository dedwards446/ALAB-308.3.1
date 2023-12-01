/// Fizz Buzz

/**
 * Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
 */


for(let i=1;i<=100;i++){
    if((i % 3 ===0) && (i%5 === 0)){
        console.log('FIZZBUZZ');
    }else if(i % 5 ===0){
        console.log('BUZZ');
    }else if(i % 3 ===0){
        console.log('FIZZ');
    }else {
        console.log(i);
    }
}

/// Prime Time

/**
 * Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.
 */

let n = 13;
// Increment n until the next prime is found
n++;
while (true) {
    let isPrime = true;
    // Check if the number is prime
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    // If the number is prime, log it and break the loop
    if (isPrime) {
        console.log("The next prime after is:",n);
        break;
    }
    // Increment n to check the next number
    n++;
}

/**
 * Part 3
 */

/** 
 * Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
You can make the following assumptions:
There will only be 4 cells per row.
There will be no escaped characters other than “\n”.
*/
let csvString = ("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26")

 let word = "";
 let Cell1 = "";
 let Cell2 = "";
 let Cell3 = "";
 let Cell4 = "";
 for (let i = 0; i <= csvString.length; i++) {
   if (csvString[i] === "\n" || i === csvString.length) {
     Cell4 = word;
     console.log(Cell1, Cell2, Cell3, Cell4);
     word = "";
     Cell1 = "";
     Cell2 = "";
     Cell3 = "";
     Cell4 = "";
     continue;
   }
   if (csvString[i] != ",") {
     word += csvString[i];
   } else if (Cell1 === "") {
     Cell1 = word;
     word = "";
     continue;
   } else if (Cell2 === "") {
     Cell2 = word;
     word = "";
     continue;
   } else if (Cell3 === "") {
     Cell3 = word;
     word = "";
     continue;
   }
 }
// Split the CSV string into rows based on newline characters.
let rows = csvString.split("\n");
for (let i = 0; i < rows.length; i++) {
  // Split the current row into individual elements (id, name, occupation, age)
 // based on the comma delimiter and assign them to respective variables.
 let [cell1, cell2, cell3, cell4] = rows[i].split(",");
    console.log(cell1, cell2, cell3, cell4);
}

