//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

localStorage.setItem("first name", "Aaryan")
localStorage.setItem("last name", "Panda")
localStorage.setItem("age", 19)
localStorage.setItem("country", "India")
localStorage.setItem("state", "Odisha")
console.log(localStorage)




//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

localStorage.getItem("first name")
localStorage.getItem("last name")
localStorage.getItem("age")
localStorage.getItem("country")
localStorage.getItem("state")
console.log(localStorage)




//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

localStorage.removeItem("state")
console.log(localStorage)




//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

localStorage.clear()
console.log(localStorage)





//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};


var myStringUser = JSON.stringify(user)
console.log(myStringUser)
