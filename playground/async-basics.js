console.log("Starting App");

setTimeout(() => {
  console.log("Inside of CallBack");
}, 2000);

setTimeout(() => {
  console.log("Second callBack");
}, 0);

console.log("Finishing Up");
