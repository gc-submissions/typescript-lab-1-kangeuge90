// Complete this in a file named mountains.ts.
// Declare an interface called Mountain that contains the following properties:
// name - string
// height - number

interface Mountain {
    name: string;
    height: number;
}

// Declare an array called mountains which is an array of type Mountain.

export const mountains : Mountain[] = [ 
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

export function findNameOfTallestMountain(mountains : Mountain[]) : string ?? "" {
    // Internet Solution 1--------------------------------
    // Math.max.apply(Math, array.map(function(o) { return o.y; }))
    // Internet Solution 1 END----------------------------

    const tallest = mountains.reduce((op, item) => op = op > mountains.height ? op : mountains.height, 0);

}

// Call findNameOfTallestMountain, passing it your mountains array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log 
// the variable. (Hint: It will print “Everest”.)

const tallestMountain = findNameOfTallestMountain(mountains)
console.log(tallestMountain)

// Export the Mountain interface and the findNameOfTallestMountain function.