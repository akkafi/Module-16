const person = {
    name: 'Sodor Uddin',
    age: 22,
    profession: 'Developer',
    salary: 30000,
    married: false,
    'fev places': ['bandorban', 'sundarban', 'malban', 'salban']
}
person.salary = 35000;
person['age'] = 23;
person["fev places"] = ["maldip", "Honcon", 'kuakata']
console.log(person);

const propName = 'profession';
person[propName] = 'devops';
console.log(person)