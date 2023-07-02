import { Constants } from '../types';
import highlightElement from './highlight';

function createViewer(): void {
  const field: HTMLElement | null = document.querySelector('.viewer__field');
  const markup: HTMLDivElement = document.createElement('div');
  markup.className = 'viewer__markup markup';

  if (field) {
    field.append(markup);
  }
}

function renderViewer(): void {
  const markup: HTMLElement | null = document.querySelector('.markup');
  const markupHeader: HTMLElement | null = document.createElement('div');
  const preHeader: HTMLElement = document.createElement('pre');
  const codeHeader: HTMLElement = document.createElement('code');
  markupHeader.className = '.markup__header';
  markupHeader.textContent = Constants.markupHeader;
  const markupFooter: HTMLElement | null = document.createElement('div');
  const preFooter: HTMLElement = document.createElement('pre');
  const codeFooter: HTMLElement = document.createElement('code');
  markupFooter.className = '.markup__footer';
  markupFooter.textContent = Constants.markupFooter;
  if (markup) {
    codeHeader.append(markupHeader);
    preHeader.append(codeHeader);
    markup.prepend(preHeader);
    codeFooter.append(markupFooter);
    preFooter.append(codeFooter);
    markup.append(preFooter);
    highlightElement(preHeader);
    highlightElement(preFooter);
  }
}

export { createViewer, renderViewer };
