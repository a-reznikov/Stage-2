export default function renderMarkupElement(item: HTMLElement, parent?: HTMLElement): HTMLElement | null {
  const markup: HTMLElement | null = document.querySelector('.markup');
  if (parent) {
    parent.append(item);
  } else if (markup) {
    markup.append(item);
  }
  return markup || null;
}
