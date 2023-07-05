import { Help } from '../../types';
import renderHelp from '../help';

const help: Help = {
  selector: 'Tag Selector',
  title: 'Use the tag as a selector.',
  syntax: 'span',
  description: 'To select all elements with the same tag, use the tag as a selector.',
  examples: 'span { color: white; }',
};

test('RenderHelp function should create HTMLElement', () => {
  expect(renderHelp(help)).toBeInstanceOf(HTMLElement);
});
