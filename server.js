const express = require("express");
const app = express();

const usersArray = [
  { name: "corgiX", email: "corgiX@gmail.com", age: 18, id: 1 },
  { name: "Hura", email: "hura@gmail.com", age: 19, id: 2 },
];

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("halo");
});

app.get("/users", (req, res) => {
  res.send({ name: "corgiX", age: 18 });
});

app.post("/addUser", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  const isEmailExist = usersArray.find((user) => user.email === newUser.email);
  if (isEmailExist) {
    throw new Error("User is already existed");
  }
  usersArray.push(newUser);
  res.send(usersArray);
});

app.delete("/deleteUser/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const toDeleteUser = usersArray.find((user) => user.id === userId);
  if (toDeleteUser) {
    const toDeleteUserIndex = usersArray.indexOf(toDeleteUser);
    usersArray.splice(toDeleteUserIndex, 1);
    res.send(usersArray);
  } else {
    throw new Error("This user is not registered");
  }
});

app.listen(3000, () => {
  console.log("express is listening on port 3000");
});
