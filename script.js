document.addEventListener('DOMContentLoaded', () => {
  // 현재 연도
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // 스무스 스크롤 (내부 앵커)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
