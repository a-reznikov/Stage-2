import { Constants } from '../types';

export default function createSection(section: HTMLElement, id: string, titleHeader: string, fileName: string): void {
  const header: HTMLElement = document.createElement('div');
  header.className = 'interection__header';
  const title: HTMLElement = document.createElement('h3');
  title.className = 'interection__title';
  title.textContent = `${titleHeader}`;
  const file: HTMLElement = document.createElement('h4');
  file.className = 'interection__file';
  file.textContent = `${fileName}`;
  const container: HTMLDivElement = document.createElement('div');
  container.className = 'interection__container container';
  const numbers: HTMLDivElement = document.createElement('div');
  numbers.className = `container__numbers ${id}__numbers`;
  numbers.innerHTML = Constants.fieldNumbers;
  const field: HTMLDivElement = document.createElement('div');
  field.className = `container__field ${id}__field`;
  header.append(title);
  header.append(file);
  container.append(numbers);
  container.append(field);
  section.append(header);
  section.append(container);
}
