function splitOddEven(numbers) {
    let result = [
        numbers.filter(num => num % 2 !== 0), // Odd numbers
        numbers.filter(num => num % 2 === 0)  // Even numbers
    ];
    
    console.log("Even numbers:", result[1]);
    console.log("Odd numbers:", result[0]);
}

// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// Call the function
splitOddEven(numbers);
