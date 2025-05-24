const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Botón para ir arriba
const toTopBtn = document.createElement('button');
toTopBtn.id = 'toTopBtn';
toTopBtn.textContent = '↑';
toTopBtn.title = "Volver arriba";
Object.assign(toTopBtn.style, {
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  padding: '0.5rem 1rem',
  fontSize: '1.5rem',
  backgroundColor: '#0077ff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'none',
  zIndex: 9999
});
document.body.appendChild(toTopBtn);

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Modo claro/oscuro
const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.textContent = '🌓';
toggleThemeBtn.title = "Cambiar tema";
Object.assign(toggleThemeBtn.style, {
  position: 'fixed',
  top: '1rem',
  right: '1rem',
  padding: '0.5rem 1rem',
  fontSize: '1.2rem',
  backgroundColor: '#0077ff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  zIndex: 9999
});
document.body.appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }
});