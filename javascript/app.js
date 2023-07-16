// ====== Name ======

const userName = document.getElementById("username");
const userNameError = document.getElementById("username-error");

userName.addEventListener("keyup", () => {
  validateName();
})

function validateName() {
  if (/^[A-Za-z\s\'\.]{1,50}$/.test(userName.value)) {
    userName.classList.add("border-green-400")
    userName.classList.remove("border-red-700")
    userNameError.classList.add("hidden")
    userNameError.classList.remove("block")
    return true
  }
  else {
    userName.classList.add("border-red-700")
    userName.classList.remove("border-green-400")
    userNameError.classList.remove("hidden")
    userNameError.classList.add("block")
    return false;
  }
}


// ====== Email ======

const email = document.getElementById("useremail");
const emailError = document.getElementById("email-error");

email.addEventListener("keyup", () => {
  validateEmail(email);
})

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    email.classList.add("border-green-400")
    email.classList.remove("border-red-700")
    emailError.classList.add("hidden")
    emailError.classList.remove("block")
    return true
  }
  else {
    email.classList.add("border-red-700")
    email.classList.remove("border-green-400")
    emailError.classList.remove("hidden")
    emailError.classList.add("block")
    return false;
  }


}


// ====== Phone Number ======

const phone = document.getElementById("userphone");
const phoneError = document.getElementById("phone-error");

phone.addEventListener("keyup", () => {
  validatePhone(phone);
})

function validatePhone(phoneNumber) {
  if (/^(013|014|015|016|017|018|019)\d{8}$/.test(phone.value)) {
    phone.classList.add("border-green-400");
    phone.classList.remove("border-red-700");
    phoneError.classList.add("hidden");
    phoneError.classList.remove("block");
    return true;
  }
  else {
    phone.classList.add("border-red-700");
    phone.classList.remove("border-green-400");
    phoneError.classList.remove("hidden");
    phoneError.classList.add("block");
    return false;
  }
}


// ====== Degree ======


const degree = document.getElementById("userdegree");

degree.addEventListener("keyup", () => {
  validateDegree();
})

function validateDegree() {
  if (degree.value !== "") {
    degree.classList.add("border-green-400")
    degree.classList.remove("border-gray-300")
  }
  else {
    degree.classList.remove("border-green-400")
    degree.classList.add("border-red-700")
  }
}



// ====== Message ======

const message = document.getElementById("message");

message.addEventListener("keyup", () => {
  validateMessage();
})

function validateMessage() {
  if (message.value !== "") {
    message.classList.add("border-green-400")
    message.classList.remove("border-gray-300")
  }
  else {
    message.classList.remove("border-green-400")
    message.classList.add("border-red-700")
  }
}


// ====== Submit Button ======

const userForm = document.getElementById("user-form")
const scriptURL = 'https://script.google.com/macros/s/AKfycby_4ZZN3IEkSmvUgHb9V-xNHco9ZHu0LKaXeWD1kMvwPu990nVPvYTOjUNfJ5y-SZmy/exec'
const form = document.forms['contactform']

userForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (userName.classList.contains("border-green-400") && phone.classList.contains("border-green-400") &&
    email.classList.contains("border-green-400") && degree.classList.contains("border-green-400") &&
    message.classList.contains("border-green-400")) {
    
      Swal.fire(
        'Thank You!',
        'Your response has been succesfully submitted.',
        'success'
      )

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
  }
})