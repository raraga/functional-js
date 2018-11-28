import fs from 'fs' // Allows use to use FS NameSpace from Node to read file.

const output = fs.readFileSync('data.txt', 'utf8')
    .trim() // Removes any line breaks or at the start and end of a string.
    .split('\n') // Method for string object. Turns into an Array. \n is a line break.
    .map(line => line.split('\t')) // Now we have an array of arrays.
    .reduce((customers, line)=> {
        customers[line[0]] = []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[4]
        })
        return customers
    }, {})
console.log('output', JSON.stringify(output, null,2)) // We must include a return here because it will returned undefined otherwise.
// Our output will be whatever we receive in the final iteration of .reduce()