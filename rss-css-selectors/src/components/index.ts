import App from './model/app';
import Generator from './model/generator';
import { exportLevel, reloadFromStorage } from './model/statusLevel';
import { renderCurrentCheckLevel } from './view/renderInfo';

const app: App = new App();

function setLocalStorage(): void {
  const currentLevel: number = Generator.level + 1;
  localStorage.setItem('level', `${currentLevel}`);
  const exportInfoLevel: Partial<Storage> = exportLevel();
  localStorage.setItem('passed', JSON.stringify(exportInfoLevel));
}

function getLocalStorage(): void {
  if (localStorage.getItem('level')) {
    const levelFromStorage: string | null = localStorage.getItem('level');
    if (levelFromStorage) {
      const level: number = +levelFromStorage;
      app.start(level);
    }
  } else {
    app.start();
  }
  if (localStorage.getItem('passed')) {
    const getStorage: string | null = localStorage.getItem('passed');
    if (getStorage) {
      const storage: Partial<Storage> = JSON.parse(getStorage);
      reloadFromStorage(storage);
      const currentLevel: number = Generator.level + 1;
      renderCurrentCheckLevel(currentLevel);
    }
  }
}
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
