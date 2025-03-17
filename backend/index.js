const express = import("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/todo", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  res.send("Hello World!");
});

app.get("/completed", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
