const collage = {
    name: 'ABC',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(collage);
// console.log(collage.name);
// console.log(collage.unique);
// console.log(collage.unique.color);
// console.log(collage.unique.result);
// collage.unique.result.merit = 'top top top'
// console.log(collage.unique.result.merit);
console.log(collage.events[1]);
collage.events[1] = '26 March'
console.log(collage.events[1]);
console.log(collage);

delete collage.class;
console.log(collage);

