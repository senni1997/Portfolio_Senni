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
  // Функция проверки, виден ли элемент в viewport по вертикали
function isInViewport(el, offset = 0) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top + offset <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function handleSlideIn() {
  const slideElems = document.querySelectorAll('.card-slide-in-left, .card-slide-in-right, .card-slide-in-up');
  slideElems.forEach(el => {
    if (isInViewport(el, -50)) {  // запускаем на 50 пикселей раньше появления
      el.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleSlideIn(); // Проверка сразу при загрузке страницы
  window.addEventListener('scroll', handleSlideIn);
});
});