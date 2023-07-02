export default function shakeTable(): void {
  const interection: HTMLElement | null = document.querySelector('.interection');
  if (interection) {
    interection.classList.add('shake');
    interection.addEventListener('animationend', () => {
      interection.classList.remove('shake');
    });
  }
}
