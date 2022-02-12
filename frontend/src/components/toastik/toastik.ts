import toastStore from './stores/toastStore';
import { uniqueId } from './utils/generateID';

const toastik = () => {
  toastStore.addToast(uniqueId('toast'));
};

export default toastik;
