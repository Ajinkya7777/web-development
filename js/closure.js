function func() {
  let count = 1;
  function myfunc() {
    if (count == 1) {
      console.log("hi, you called me");
      count++;
    } else {
      console.log("you have already called me");
    }
  }
  return myfunc;
}

const callme = func();
callme();
callme();

const callme2 = func();
callme2();
callme2();
