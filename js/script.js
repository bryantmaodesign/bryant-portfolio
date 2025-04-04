// hamburger menu 

$('.menu-toggle').click(function() {

  $('.site-nav').toggleClass('site-nav--open', 300);
  $(this).toggleClass('open');
  
})

// collapsible approach section

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//back to top button

topbutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// tooltip
var tooltip = document.getElementById("tooltip");

window.onmousemove = function(e){
  var x = e.clientX;
  var y = e.clientY;
  tooltip.style.top = (y+10)+"px";
  tooltip.style.left = (x+10)+"px";
}

// password protected 

document.getElementById('password').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent default form submission
    checkPassword(); // Call your form submission function here
  }
});

document.getElementById('password').addEventListener('focus', function() {
  clearErrorMessage(); // Clear error message on input focus
});

function checkPassword() {
  var passwordInput = document.getElementById('password').value;
  var correctPassword = '007'; // Replace with your desired password
  var redirectURL = 'case_instant match.html'; // Replace with the URL you want to redirect to after successful login
  var errorMessageElement = document.getElementById('error-message');

  if (passwordInput === correctPassword) {
    // Password is correct, redirect to the specified URL after successful login
    window.location.href = redirectURL;
  } else {
    // Incorrect password, display error on the page
    errorMessageElement.textContent = 'Incorrect password. Try again or go ask Bryant.';
  }
}

function clearErrorMessage() {
  var errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = ''; // Clear error message
}