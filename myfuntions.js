function toggleFunction() {
  const t = document.getElementById('links');
  if (t.style.display === 'flex') {
    t.style.display = 'none';
  } else {
    t.style.display = 'flex';
  }
}

const e = 'toggle';

document.getElementById('close-button').addEventListener('click', e);
document.getElementById('menu').addEventListener('click', e);

toggleFunction();