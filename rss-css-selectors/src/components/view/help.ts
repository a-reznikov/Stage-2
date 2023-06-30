import { Constants, Help } from '../types';

export default function renderHelp(help: Help): HTMLElement {
  const helpWrapper: HTMLElement = document.createElement('div');
  helpWrapper.className = 'help__warpper';
  const helpSelector: HTMLElement = document.createElement('h3');
  helpSelector.className = 'help__selector';
  helpSelector.textContent = `${help.selector}`;
  const helpTitle: HTMLElement = document.createElement('h4');
  helpTitle.className = 'help__title';
  helpTitle.textContent = `${help.title}`;
  const helpSyntax: HTMLElement = document.createElement('p');
  helpSyntax.className = 'help__syntax';
  helpSyntax.textContent = `${help.syntax}`;
  const helpDescription: HTMLElement = document.createElement('p');
  helpDescription.className = 'help__description';
  helpDescription.textContent = `${help.description}`;
  const helpExampleTitle: HTMLElement = document.createElement('h4');
  helpExampleTitle.className = 'help__title help__title_example';
  helpExampleTitle.textContent = `${Constants.examplesTitle}`;
  const helpExamples: HTMLElement = document.createElement('p');
  helpExamples.className = 'help__examples';
  helpExamples.textContent = `${help.examples}`;
  helpWrapper.append(helpSelector);
  helpWrapper.append(helpTitle);
  helpWrapper.append(helpSyntax);
  helpWrapper.append(helpDescription);
  helpWrapper.append(helpExampleTitle);
  helpWrapper.append(helpExamples);
  return helpWrapper;
}
