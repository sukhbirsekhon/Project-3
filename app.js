// The String Counter Script that counts the number of string occurrences in the text file
const fs = require('fs')
const prompt = require('prompt-sync')();

// Take the input/word from the user 
const input = prompt('Hello! What is the string you are looking for?');

// Read the file and throw error if something goes wrong in reading the file
fs.readFile('Input.txt', (err, data) => {
    if (err) throw err;

    // Call the countString function that counts the number of word occurrences by giving the raw data of file and user input
    countString(data, input)
})

function countString(data, input) {
    // Conver the raw file data to string
    const raw = data.toString();

    // Remove periods from the file and convert everything to lowercase to keep it clean and simple
    const render = raw.replace(/\./g, '').toLowerCase();

    // If the rendered text includes the word that user is looking for then count the occurrences
    if(render.includes(input)) {
        // Create a simple regex for a user input
        matchRegularExpression = new RegExp(input, 'g' );

        // Count the word occurrences in the text file
        const count = render.match(matchRegularExpression).length;
        console.log("Your string '" + input + "' occurs " + count + " times in the text file.");
    }
    // If the rendered text doesn't include the word that user is looking for then tell user that there word is not in the text file
    else{
        console.log('The string you specified is not in the text file.')
    }
    
}
