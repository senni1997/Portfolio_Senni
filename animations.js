document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 0.6s ease-out ' + (i * 0.3) + 's';
    setTimeout(() => {
      el.style.opacity = 1;
    }, 100);
  });

  const buttons = document.querySelectorAll('.btn-hover');
  buttons.forEach(btn => {
    btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = 'none';
    });
  });
});