const BASE_URL = "http://localhost:3000/";

function getName() {
  const studentId = document.querySelector("#stuId").value;
  const url = BASE_URL + "student_name?id=" + studentId;

  axios.get(url).then((res) => {
    let studentName = res.data.name;
    if (studentName !== null) {
      result.textContent = "The student name is: " + studentName;
      result.style.color = "black";
    } else {
      result.textContent = "No student found!";
      result.style.color = "red";
    }
  });
}

function getSkill() {
  const studentId = document.querySelector("#stuId").value;
  const url = BASE_URL + "student_skill?id=" + studentId;

  axios.get(url).then((res) => {
    let studentSkill = res.data.skill;
    if (studentSkill !== null) {
      result.textContent = "The student skill is: " + studentSkill;
      result.style.color = "black";
    } else {
      result.textContent = "No student found!";
      result.style.color = "red";
    }
  });
}

const result = document.querySelector("#result");

const getNameButton = document.querySelector("#getName");
getNameButton.addEventListener("click", getName);

const getNameSkill = document.querySelector("#getSkill");
getNameSkill.addEventListener("click", getSkill);
