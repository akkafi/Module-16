const address = "andorKilla";
const part = address.slice(2,5);
// console.log(part);

const sentence = "I am a good and hardWorking person";
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Rahim,Kahim,Jahim,Mahim,Tahim,Ohim,IamSingel';
const friends = friendsStr.split(',');
console.log(friends);

const realFriend = [ 'Rahim', 'Kahim', 'Jahim', 'Mahim', 'Tahim', 'Ohim', 'IamSingel' ];
// console.log(realFriend.join())
// const myRealFd = realFriend.join();
// console.log(typeof myRealFd)
console.log(realFriend.join(''))
console.log(realFriend.join(' '))
console.log(realFriend.join('-'))