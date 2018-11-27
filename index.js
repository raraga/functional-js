const stuff = "This is our quokka stuff."
console.log(stuff)

sum = (numOne, numTwo) => {
   return numOne + numTwo; 
}

console.log(sum(16,10)); 

// Let's have some fun fun with functional programming.

const animals = [
   {name: 'James', species: 'fish'},   
   {name: 'Caro', species: 'dog'},   
   {name: 'Hamilton', species: 'dog'},   
   {name: 'Harold', species: 'fish'},   
   {name: 'Ursula', species: 'cat'},   
   {name: 'Jimmy', species: 'fish'}   
]
// Functions are values.
// .filter() accepts one argument. That one is another function. 
// Functions like these, that pass into other functions are called
// callback functions. Because the host function eventually calls back to it.


// .filter loops through the array and provides a boolean for each item.
const dogs = animals.filter((animal)=> { 
   // Dogs is our callback function. When it is done,
   // it returns our new filtered array (dogs)
   return animal.species === 'dog' 
})

