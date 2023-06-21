let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}


function validateForm() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var number = document.getElementById("numberInput").value;
  var subject = document.getElementById("subjectInput").value;
  var message = document.getElementById("messageInput").value;

  // Validate name (required field)
  if (name.trim() === "") {
      alert("Please enter your name.");
      return false;
  }

  // Validate email (required field and proper email format)
  if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
  }
  // Regular expression to validate email format
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  // Validate number (required field)
  if (number.trim() === "") {
      alert("Please enter your number.");
      return false;
  }

  // Validate subject (required field)
  if (subject.trim() === "") {
      alert("Please enter a subject.");
      return false;
  }

  // Validate message (required field)
  if (message.trim() === "") {
      alert("Please enter your message.");
      return false;
  }

  // If all validations pass, you can perform additional actions here,
  // such as submitting the form via AJAX or navigating to a different page.

  return true;
}