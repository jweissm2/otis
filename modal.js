document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("myModal");

  // Check if modal exists
  if (!modal) {
    // If modal doesn't exist, create it
    modal = document.createElement("div");
    modal.id = "myModal";
    modal.classList.add("modal");
    modal.setAttribute("tabindex", "-1");

    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.setAttribute("tabindex", "-1");

    var closeButton = document.createElement("span");
    closeButton.classList.add("Button", "close");
    closeButton.setAttribute("tabindex", "-1");
    modalContent.appendChild(closeButton);

    var modalImg = document.createElement("img");
    modalImg.id = "modalImage";
    modalImg.src = "";
    modalImg.alt = "Modal Image";
    modalImg.setAttribute("tabindex", "-1");

    modalContent.appendChild(modalImg);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
  }

  // Get modal content
  var modalContent = document.querySelector("#myModal > .modal-content");

  // Get all elements with class "modal-trigger"
  var triggers = document.getElementsByClassName("modal-trigger");

  // Loop through all modal triggers and attach click event listeners
  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', function() {
      var src = this.getAttribute('src');
      modal.style.display = "flex";
      modalImg.src = src;
    });
  }

  // When the user clicks on <span> (x), close the modal
  document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal when the user clicks anywhere outside the modal content
  window.onclick = function(event) {
    if (event.target == modal || event.target == modalContent) {
      modal.style.display = "none";
    }
  }
});
