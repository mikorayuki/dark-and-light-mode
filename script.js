const toggleButton = document.getElementById('toggleMode');

function updateIcon() {
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

// Toggle dark mode
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  updateIcon();
});

// Set ikon awal
updateIcon();