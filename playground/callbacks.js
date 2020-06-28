var getUser = (id, callback) => {
  var userData = {
    id: id,
    name: "Darsh",
  };
  callback(userData);
};

getUser(8, (userData) => {
  console.log(userData);
});
