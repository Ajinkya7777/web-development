// how to clone array
//how to concatenate two arrays

let array1 = ["i1", "i2"];
let array2 = ["i1", "i2"];
//let array2 = array1.slice(0).concat(['i3','i4']);
//let array2 = [].concat(array1, ["i3", "i4"]);

// new way --> spread operator

let oneMoreArray = ["i3", "i4"];
let oneMOreArray = [...array1, ...oneMoreArray];

array1.push("i3");

console.log(array1 === array2);
console.log(array1);
console.log(array2);
