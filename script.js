const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
    toggle.setAttribute('aria-label', opened ? '메뉴 닫기' : '메뉴 열기');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => {
  if (backTop) backTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

// 버튼 클릭 시 페이지 맨 위로 이동
if (backTop) {
  backTop.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
