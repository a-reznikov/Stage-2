import App from './model/app';
import Generator from './model/generator';

const app: App = new App();

function setLocalStorage(): void {
  const currentLevel: number = Generator.level + 1;
  localStorage.setItem('level', `${currentLevel}`);
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
}
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
