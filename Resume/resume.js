// Animate skill bars on page load
window.addEventListener('load', () => {
  const skillLevels = document.querySelectorAll('.skill-level');
  skillLevels.forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.width = level;
  });
});
