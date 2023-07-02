import hljs from 'highlight.js/lib/common';

export default function highlightElement(element: HTMLElement): void {
  hljs.highlightElement(element);
}
