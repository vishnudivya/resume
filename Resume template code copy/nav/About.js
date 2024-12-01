





// form 
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popupForm = document.getElementById('popupForm');

// Open the popup
openPopup.addEventListener('click', () => {
  popupForm.style.display = 'flex'; // Show the popup
});

// Close the popup
closePopup.addEventListener('click', () => {
  popupForm.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside the form
window.addEventListener('click', (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = 'none';
  }
});
