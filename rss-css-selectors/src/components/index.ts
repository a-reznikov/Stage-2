import App from './model/app';
import Generator from './model/generator';
import { exportLevel, fillStorage } from './model/statusLevel';

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
      fillStorage(storage);
    }
  }
}
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
