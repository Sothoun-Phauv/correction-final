const express = require("express");
const { readFileSync } = require("fs");
const app = express();
const PORT = 3000;
app.listen(PORT);
app.use(express.static("public"));

let students = JSON.parse(readFileSync("students.json"));

app.get("/student_name", (req, res) => {
  let id = req.query.id;
  let username = null;
  for (let student of students) {
    if (student.id === parseInt(id)) {
      username = student.name;
    }
  }
  res.send({ name: username });
});

app.get("/student_skill", (req, res) => {
  let id = req.query.id;
  let skill = null;
  for (let student of students) {
    if (student.id === parseInt(id)) {
      skill = student.favoriteSkill;
    }
  }
  res.send({ skill: skill });
});
