var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers.");
      }
    }, 1500);
  });
};

asyncAdd(9, 7)
  .then(
    (response) => {
      console.log(response);
      return asyncAdd(response, "10");
    },
    (errorMessage) => {
      console.log(errorMessage);
    }
  )
  .then(
    (res) => {
      console.log("Chaining promises: ", res);
    },
    (errorMessage) => {
      console.log(errorMessage);
    }
  );

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Hey, It Worked.");
//     reject("Unable to fulfill promise");
//   }, 2500);
// });

// somePromise.then(
//   (message) => {
//     console.log("Success: ", message);
//   },
//   (errorMessage) => {
//     console.log("Error: ", errorMessage);
//   }
// );
