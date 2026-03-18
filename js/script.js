const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target));
  const yearlevel = document.querySelector(".year-level:checked");

  const interest = document.querySelectorAll(".interest");
  const interestArr = [];
  interest.forEach((value) =>
    value.checked ? interestArr.push(value.value) : "",
  );

  formData.level = yearlevel ? yearlevel.value : "";
  formData.interest = interestArr;

  if (formData.fullname === "") {
    alert("Fullname cannot be empty.");
    return;
  }
  if (formData.email === "") {
    alert("Email cannot be empty.");
    return;
  }
  if (formData.course === "") {
    alert("Please select a course.");
    return;
  }
  if (formData.level === null || formData.level === "") {
    alert("Please select your grade level.");
    return;
  }
  if (formData.interest.length <= 0) {
    alert("Please select atleast one Interest.");
    return;
  }

  alert("Registration Succesfull!");
  registrationForm.submit();
});
