// Define a function to add the class "Button" to elements with class "fsSubmitButton"
function addButtonClass() {
  // Select all elements with class "fsSubmitButton"
  var elements = document.querySelectorAll('.fsSubmitButton');

  // Loop through each element and add class "Button"
  elements.forEach(function(element) {
    element.classList.add('Button');
  });
}

// Add an event listener to the window's "load" event
window.addEventListener('load', addButtonClass);