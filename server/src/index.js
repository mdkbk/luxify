const express = require("express");
const app = express();
const { registerNewUser } = require("./controllers/users");
const port = 4000;

app.post("/register", registerNewUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
