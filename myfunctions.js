// Mobile Menu
function toggleFunction() {
  const t = document.getElementById('links');
  if (t.style.display === 'flex') {
    t.style.display = 'none';
  } else {
    t.style.display = 'flex';
  }
}

document.getElementById('close-button').addEventListener('click', toggleFunction());
document.getElementById('menu').addEventListener('click', toggleFunction());
