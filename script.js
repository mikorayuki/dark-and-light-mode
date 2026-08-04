const toggleButton = document.getElementById('toggleMode');

function updateIcon() {
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  updateIcon();
});

updateIcon();