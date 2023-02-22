const addUser = async () => {
  const newUser = { name: "Captain", age: 20 };
  const response = await fetch("http://localhost:3000/addUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  console.log(await response.json());
};

addUser();
