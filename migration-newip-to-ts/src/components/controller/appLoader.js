import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'bd767d6423de451fac45cea1e3bc8157', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
