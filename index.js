// Get references to DOM elements
const ctaButton = document.querySelector('.cta-button');
const readMoreLinks = document.querySelectorAll('.read-more');

// Event listeners
ctaButton.addEventListener('click', () => {
  // Perform an action when the CTA button is clicked
  alert('Thank you for your interest in Arsenal FC!');
});

readMoreLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the article title and display it in a modal
    const articleTitle = link.parentElement.querySelector('h3').textContent;
    showModal(articleTitle);
  });
});

// Function to display a modal with the article title
function showModal(title) {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = title;
  
  const modalCloseButton = document.createElement('button');
  modalCloseButton.textContent = 'Close';
  modalCloseButton.addEventListener('click', () => {
    closeModal(modalOverlay);
  });

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalCloseButton);
  
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);
}

// Function to close the modal
function closeModal(modal) {
  document.body.removeChild(modal);
}
