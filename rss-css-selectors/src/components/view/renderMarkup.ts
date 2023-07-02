import highlightElement from './highlight';

export default function renderMarkupElement(item: HTMLElement, parent?: HTMLElement): void {
  const markup: HTMLElement | null = document.querySelector('.markup');
  const preFirst: HTMLElement = document.createElement('pre');
  const codeFirst: HTMLElement = document.createElement('code');
  const preSecond: HTMLElement = document.createElement('pre');
  const codeSecond: HTMLElement = document.createElement('code');
  if (parent) {
    const lastChars: number = 3;
    const firstPart: string | undefined = `${parent.textContent?.slice(0, -lastChars)}>`;
    const secondPart: string | undefined = `<${parent.textContent?.split(' ')[0].slice(1)}/>`;
    const patentElement: HTMLElement = parent;
    patentElement.textContent = '';
    codeFirst.textContent = firstPart;
    preFirst.append(codeFirst);
    patentElement.append(preFirst);
    patentElement.append(item);
    codeSecond.textContent = secondPart;
    preSecond.append(codeSecond);
    patentElement.append(preSecond);
    highlightElement(preFirst);
    highlightElement(preSecond);
  } else if (markup) {
    markup.append(item);
  }
}
