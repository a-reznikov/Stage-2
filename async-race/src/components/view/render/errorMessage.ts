export default function showError(): void {
  const error: HTMLElement | null = document.querySelector('.error');

  if (error) {
    error.classList.remove('error_hidden');
  }
}
