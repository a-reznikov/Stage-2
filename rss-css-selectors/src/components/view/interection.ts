import { Editor, Viewer } from '../types';
import createSection from './section';

export default function createInterection(): HTMLElement {
  const interection: HTMLElement = document.createElement('section');
  interection.className = 'playground__interection interection';
  const editor: HTMLElement = document.createElement('section');
  editor.className = 'interection__editor editor';
  const viewer: HTMLElement = document.createElement('section');
  viewer.className = 'interection__viewer viewer';
  createSection(editor, Editor.id, Editor.titleHeader, Editor.fileName);
  createSection(viewer, Viewer.id, Viewer.titleHeader, Viewer.fileName);

  if (interection) {
    interection.append(editor);
    interection.append(viewer);
  }
  return interection;
}
