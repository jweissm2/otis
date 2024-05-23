function openModal(imgElement) {
    var imageUrl = imgElement.src; // Get the src attribute of the first child element (the img)
    var modal = document.getElementById('ae-imageModal');
    
    // Check if modal already exists
    if (!modal) {
        // Create modal if it doesn't exist
        modal = document.createElement('div');
        modal.id = 'ae-imageModal';
        modal.classList.add('ae-modal');
        modal.innerHTML = `
            <span class="close" onclick="closeModal()">&times;</span>
            <img class="modal-content" id="ae-modalImage">
        `;
        document.body.appendChild(modal);
    }
    
    // Set the src attribute of the modal image
    document.getElementById('ae-modalImage').src = imageUrl;
    
    // Show the modal
    modal.style.display = 'block';
}

function closeModal() {
    // Hide the modal
    document.getElementById('ae-imageModal').style.display = 'none';
}