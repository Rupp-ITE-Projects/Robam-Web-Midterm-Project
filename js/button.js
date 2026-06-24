document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  const bars = btn.querySelectorAll('.bar');
  let open = false;

  btn.addEventListener('click', () => {
    open = !open;
    btn.setAttribute('aria-expanded', open);
    menu.style.maxHeight = open ? menu.scrollHeight + 'px' : '0';
    menu.style.opacity = open ? '1' : '0';
    bars[0].style.transform = open ? 'translateY(6.5px) rotate(45deg)' : '';
    bars[1].style.opacity = open ? '0' : '1';
    bars[2].style.transform = open ? 'translateY(-6.5px) rotate(-45deg)' : '';
  });
});