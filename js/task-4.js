const formElem = document.querySelector(".login-form");

console.log(formElem.element);
// const formData = new FormData(formElem);

// const data = {
//     email: formElem.element.email.value,
//     password: formElem.element.password.value,
// }
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
        email: formElem.elements.email.value,
        password: formElem.elements.password.value,
    };
    // const email = formElem.element.email.value;
    // const password = formElem.element.password.value;

  if (data.email === "" || data.password === "") {
    return alert("All form fields must be filled in");
  } else {
    // const email = formElem.element.email.value;
      // const password = formElem.element.password.value;
      const newDataObj = {};
      newDataObj.email = data.email;
      newDataObj.password = data.password;

      console.log(newDataObj);
      form.reset();
  }
}

formElem.addEventListener("submit", handleFormSubmit);
