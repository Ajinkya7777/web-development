const fruits = ["apple", "mango", "kiwi"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let index in fruits) {
  console.log(index + "---->" + fruits[index]);
}
