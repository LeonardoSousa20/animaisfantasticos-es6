export default function initAnimacaosScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
