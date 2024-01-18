document.getElementById("subscribe-btn").addEventListener('click', function(event){
  event.preventDefault();

  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  var errorMessageContainer = document.getElementById("error-message");

  if(isValidEmail(email)){
    window.location.href = 'success.html';
  }else{
    errorMessageContainer.textContent = 'Valid email required';
    document.getElementById('email').style.borderColor = 'red';
  }
});

function isValidEmail(email){
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}