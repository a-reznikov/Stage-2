import { Constants } from '../types';

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
  markupHeader.className = '.markup__header';
  markupHeader.textContent = Constants.markupHeader;
  const markupFooter: HTMLElement | null = document.createElement('div');
  markupFooter.className = '.markup__header';
  markupFooter.textContent = Constants.markupFooter;
  if (markup) {
    markup.prepend(markupHeader);
    markup.append(markupFooter);
  }
}

export { createViewer, renderViewer };
