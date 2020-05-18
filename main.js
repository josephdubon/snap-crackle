// Kenze Academy Assessment - SnapCrackle


// If a number is both odd and a multiple of 5 concatenate "SnapCrackle, " to the end of the string.

// If a number is neither odd or a multiple of 5, concatenate the number and ", " to the end of the string.











// Write a function named snapCrackle that takes one parameter: maxValue
function snapCrackle(maxValue) {
    // This function should loop through 1 up to maxValue(inclusive)
    for (let i = 1; i >= maxValue; i++) {
        // If a number is odd, concatenate "Snap, " to the end of the string
        if (i % 2 != 0) {
            console.log(i + "Snap, ")
        }




        // This function should console.log() the final string after maxValue iterations of the loop
        console.log("Something is not right.")
    }
}

// snapCrackle(12) should display the string 
// Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12,
snapCrackle(12)