export default function renderMarkupElement(item: HTMLElement, parent?: HTMLElement): void {
  const markup: HTMLElement | null = document.querySelector('.markup');
  if (parent) {
    parent.append(item);
  } else if (markup) {
    markup.append(item);
  }
}
