"using strict"

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayHello = function() {
        alert("Hello " + this.firstName + " " + this.lastName);
    }
}

let fName = prompt("Enter first name");
let lName = prompt("Enter last name");

let me = new Person(fName, lName);
// let me = new Person("Amy", "Smith");
// console.log("Person is " + me.firstName);
me.sayHello();