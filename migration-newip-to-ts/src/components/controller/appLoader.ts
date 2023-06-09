import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: 'bd767d6423de451fac45cea1e3bc8157',
    });
  }
}

export default AppLoader;
