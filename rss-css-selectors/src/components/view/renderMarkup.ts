export default function renderMarkupElement(item: HTMLElement): HTMLElement | null {
  const markup: HTMLElement | null = document.querySelector('.markup');
  if (markup) {
    markup.append(item);
  }
  return markup || null;
}
