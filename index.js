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

// Higher-order functions - filter() 

// In JavaScript, functions are values.
// .filter() accepts one argument. That one is another function. 
// Functions like these, that pass into other functions are called
// callback functions. Because the host function eventually calls back to it.


// .filter loops through the array and provides a boolean for each item.
const dogs = animals.filter((animal)=> { 
   // The function we are passing in filter is our callback function. 
   // When it is done, it returns our new filtered array (dogs)
   return animal.species === 'dog' 
})

// Quokka log
dogs

// Since functional programming often times writes in less lines, it promotes
// the idea of being composable. Essentially, being able to synergize well with
// each other and become modular.
// For example:
// const isDog = (animal) => {
//    return animal.species === 'dogs'


// Higher-order functions - map()
// Unlike filter(), map() doesn't return booleans. It returns a transformed object, the name in our case.

const names = animals.map((animal)=> {
   return animal.name
})

// ES6 can let us cut away some of the fat. The arrow function will implicitly return animal.name becasue it is on the same line.
const namesAgain = animals.map((animal)=>animal.name) // Great
// With only one parameter the arrow function parathesis are optional.
const namesMore = animals.map(x=>x.name) // Awesome 
// Quokka log
namesMore
// Quokka log
namesAgain

// Let's apply the same line logic multiple objects.
const namesMessage = animals.map(animal => animal.name + ' is a ' + animal.species)
// Our Quokka log
namesMessage


// Higher-order functions - reduce()

const orders = [
   { amount: 250 },
   { amount: 400 },
   { amount: 100 },
   { amount: 325 }
]

const totalAmount = orders.reduce((sum, order)=>sum + order.amount, 0)

// Quokka log
totalAmount

// Logging to show the iteration activity in the loop.
const totalAmount2 = orders.reduce((sum,order)=>{
   console.log("hello", sum, order)
   return sum + order.amount
}, 0)

// More reduce()



