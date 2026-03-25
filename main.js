import {LinkedList} from './script.js';

const mailList = LinkedList();

mailList.append('dog')
mailList.append('cat')
mailList.append('parrot')
mailList.append('hamster')
mailList.append('snake')
mailList.append('turtle')

console.log(mailList.toString());
console.log(mailList.size());
console.log(mailList.pop())
console.log(mailList.toString());