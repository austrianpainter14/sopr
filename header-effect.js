const header = document.querySelector('header');

header.addEventListener('mousemove', e => {
  const rect = header.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percentX = (x / rect.width) * 100;
  header.style.setProperty('--hover-x', `${percentX}%`);
  header.style.setProperty('--hover-opacity', 0.3);
});

header.addEventListener('mouseleave', () => {
  header.style.setProperty('--hover-opacity', 0);
});
