var elFormInput = document.querySelector(".switch-form__input");

elFormInput.addEventListener("change", function() {
  
  if(elFormInput.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  
  
  
})