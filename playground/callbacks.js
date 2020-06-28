var getUser = (id, callback) => {
  var userData = {
    id: id,
    name: "Darsh",
  };

  setTimeout(() => {
    callback(userData);
  }, 3000);
};

getUser(8, (userData) => {
  console.log(userData);
});
