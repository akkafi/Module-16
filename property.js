const person = {
    name: 'Sodor Uddin',
    age: 22,
    profession: 'Developer',
    salary: 30000,
    married: false,
    'fev places': ['bandorban', 'sundarban', 'malban', 'salban']
}

// console.log(person);
console.log(person.profession);

//dot Notation
// dot symbol diye object ar property ar value access kora
const income = person.salary;
console.log(income)

//bracket Notation
// third [] bracket diye object ar property ar value access kora
console.log(person['age']);
const boyos = person['age'];
console.log(boyos)

// console.log(person."fev places")
console.log(person["fev places"]);

const keyName = 'profession';
console.log(person[keyName])