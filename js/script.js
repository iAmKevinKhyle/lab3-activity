document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const contactForm = document.getElementById("contact-form");
  const cvsuPin = document.getElementById("cvsu-pin");
  const loader = document.querySelector(".loader");
  
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;

    const yearLevel = document.querySelector(".year-level:checked");
    const interests = document.querySelectorAll(".interest:checked");

    let errors = [];

    if (fullname === "") {
      errors.push("Full Name is required.");
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      errors.push("Email is required.");
    } else if (!email.match(emailPattern)) {
      errors.push("Enter a valid email address.");
    }

    if (course === "") {
      errors.push("Please select a course.");
    }

    if (!yearLevel) {
      errors.push("Please select your year level.");
    }

    if (interests.length === 0) {
      errors.push("Select at least one field of interest.");
    }

    if (errors.length > 0) {
      showMessage(errors.join("\n"));
    } else {
      showMessage("Registration Successful! 🎉", false);

      form.reset();
    }
  });

  let loaded = false;

  cvsuPin?.addEventListener("load", function () {
    loaded = true;
    loader.style.display = "none";

    
    setTimeout(() => {
      if (!loaded) {
        loader.style.display = "flex";
      }
    }, 8000);
  })

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value;

    let errors = [];

    if (fullname === "") {
      errors.push("Full Name is required.");
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      errors.push("Email is required.");
    } else if (!email.match(emailPattern)) {
      errors.push("Enter a valid email address.");
    }

    if (message === "") {
      errors.push("Message is required.");
    }

    if (errors.length > 0) {
      showMessage(errors.join("\n"));
    } else {
      showMessage("Message has been sent successfully! 🎉", false);

      contactForm.reset();
    }
  });

  const showMessage = (message, isError = true) => {
    const msg = document.createElement("div");
    msg.className = isError ? "form-error" : "form-success";
    msg.innerText = message;

    document.body.appendChild(msg);

    setTimeout(() => msg.remove(), 3000);
  };
});
