const sentences = 'I am learning web dev.';
// const result = '.ved'

let revers = '';
for(let sentence of sentences){
    // console.log(sentence);
    revers = sentence + revers;
    
}
// console.log(revers);

let rev = ''
for (let i = 0; i < sentences.length; i++){
    // console.log(i)
    // console.log(sentences[i])
    const letter = sentences[i];
    rev = letter + rev;
}
// console.log(rev);

const reversed = sentences.split('').reverse().join('');
console.log(reversed)