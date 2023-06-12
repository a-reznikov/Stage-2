import { ApiKeys, BaseLink } from '../../types';
import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super(BaseLink.main, {
      apiKey: ApiKeys.main,
    });
  }
}

export default AppLoader;
