export default function renderMarkupElement(item: HTMLElement, parent?: HTMLElement): void {
  const markup: HTMLElement | null = document.querySelector('.markup');
  if (parent) {
    const lastChars: number = 3;
    const firstPart: string | undefined = `${parent.textContent?.slice(0, -lastChars)}>`;
    const secondPart: string | undefined = `<${parent.textContent?.split(' ')[0].slice(1)}/>`;
    const patentElement: HTMLElement = parent;
    patentElement.textContent = firstPart;
    parent.append(item);
    parent.append(secondPart);
  } else if (markup) {
    markup.append(item);
  }
}
