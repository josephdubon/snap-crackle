// Kenze Academy Assessment - SnapCrackle

// Write a function named snapCrackle that takes one parameter: maxValue
function snapCrackle(maxValue) {
    // Create finalString 
    let finalString = ""
    // This function should loop through 1 up to maxValue(inclusive)
    for (let i = 1; i <= maxValue; i++) {
        // If a number is both odd and a multiple of 5 concatenate "SnapCrackle, " to the end of the string.
        if (i % 2 != 0 && i % 5 === 0) {
            finalString += "SnapCrackle, "
        }
        // If a number is odd, concatenate "Snap, " to the end of the string.
        else if (i % 2 != 0) {
            finalString += "Snap, "
        }
        // If a number is a multiple of 5, concatenate "Crackle, " to the end of the string.
        else if (i % 5 === 0) {
            finalString += "Crackle, "
        }
        // If a number is neither odd or a multiple of 5, concatenate the number and ", " to the end of the string.
        else {
            finalString += i + ", "
        }
    }
    // This function should console.log() the final string after maxValue iterations of the loop.
    console.log(finalString)
}

snapCrackle(12)
// should display the string 
// Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12,