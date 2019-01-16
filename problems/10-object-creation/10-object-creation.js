/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let person = {
    Name: 'bob',
    Age: 7,
  };

  function Bug(Name, Age) {
      this.Name = Name;
      this.Age = Age;

  }

  class Animal{
      constructor(Name,Age){
        this.Name = Name;
        this.Age = Age;
      }
  }

let human = new Bug('smith', 35);
let Dog = new Animal('Scooby', 50);

console.log(person);
console.log(human);
console.log(Dog);

