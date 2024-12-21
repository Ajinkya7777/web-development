// array destructuring

const myArray = ["value1", "value2", "value3", "value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];

// console.log(myVar1);
// console.log(myVar2);

let myNewArray1 = myArray.slice(2);
console.log(myNewArray1);
let [myvar1, myvar2, ...myNewArray2] = myArray;
console.log(myvar1);
console.log(myvar2);
console.log(myNewArray2);

// nested destructring

const users = [
  { userId: 1, firstName: "harry", gender: "male" },
  { userId: 2, firstName: "mary", gender: "female" },
  { userId: 3, firstName: "jerry", gender: "female" },
];

const [user1, user2, user3] = users;

console.log(user1);

//here we are destructuring by each object
const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users;
console.log(user1firstName, userId);
console.log(user3gender);
