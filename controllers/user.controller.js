const user = require("../utlis/user.json");

module.exports.randomUser = (req, res) => {
  // generate random user id
  let userId = [];
  user.map((data) => userId.push(data._id));

  // use user random function
  function randomData(random) {
    return random[Math.floor(Math.random() * random.length)];
  }
  const userSingleId = randomData(userId);

  // user random filter
  const userFilter = user.filter((user) => user._id === userSingleId);
  res.send(userFilter);
};

module.exports.getAll = (req, res) => {
  const limitData = req.query;
  const allData = user.slice(0, limitData?.limit);

  res.send(allData);
};

module.exports.userPost = (req, res) => {
  const data = req.body;

  const userObjKey = Object.keys(data);
  const myObjKey = Object.keys(user[0]);

  const newData = [...user, data];
  let updateKey;
  if (JSON.stringify(myObjKey) !== JSON.stringify(userObjKey)) {
    updateKey =
      "Your object key is not match. Check your object key and try again.";
  } else {
    updateKey = newData;
  }

  res.send(updateKey);
};

module.exports.userSingleDataUpdate = (req, res) => {
  const { id } = req.params;
  const filterUserUpdateData = user.find((update) => update._id === id);

  const updatedUser = Object.assign(filterUserUpdateData, req.body);
  // console.log(updatedUser);

  res.send(updatedUser);
};

module.exports.deleteSingleUser = (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  // const deleteSingleUser = user.find((deleteData) => deleteData._id === id);
  // console.log(deleteSingleUser);

  // const newData = Object.assign(deleteSingleUser) !== Object.assign(userData);

  // const newData = deleteSingleUser.filter((data) => data === userData);
  // console.log(newData);
  // console.log(newData);

  const index = user.findIndex((user) => user.id == id);
  console.log(index);

  if (Number(index) !== Number(-1)) {
    user.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("User not found");
  }

  // res.send(deleteSingleUser);
};
