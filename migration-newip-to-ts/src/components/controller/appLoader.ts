import { ApiKeys, BaseLink } from '../../types';
import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super(BaseLink.main, {
      apiKey: ApiKeys.spare,
    });
  }
}

export default AppLoader;
