// Complete this in a file named mountains.ts.
// Declare an interface called Mountain that contains the following properties:
// name - string
// height - number

interface Mountain {
    name: string;
    height: number;
}

// Declare an array called mountains which is an array of type Mountain.
// Fill the array with the following mountains:

// name
// height
// Kilimanjaro
// 19341
// Everest
// 29029
// Denali
// 20310

const mountains : Mountain[] = [ 
    {
        name: "Killimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];


// Declare a function called findNameOfTallestMountain. It takes one parameter, an array of 
// Mountain objects. It returns a string, the name of the tallest mountain in the given array. 
// If the array argument is empty, return an empty string ("").


// Call findNameOfTallestMountain, passing it your mountains array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log 
// the variable. (Hint: It will print “Everest”.)

// Export the Mountain interface and the findNameOfTallestMountain function.