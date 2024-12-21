const input = document.getElementById("input");

function reverseString(str) {
  console.log(str.split("").reverse().join(""));
  return str.split("").reverse().join("");
}

function checkPalindrome() {
  const value = input.value;
  const reverse = reverseString(value);
  if (reverse === value) {
    alert("P A L I N D R O M E");
  } else {
    alert("Not Today...!");
  }
}
