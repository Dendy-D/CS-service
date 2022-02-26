import { makeAutoObservable, toJS } from 'mobx';
import { Employee } from '../../types/Employee';

import { CurrentUser } from './../../types/Auth';

class AuthStore {

  currentUser!: Employee;

  constructor() {
    makeAutoObservable(this);
  }

  addCurrentUser(user: Employee) {
    this.currentUser = user;
  }
}

export default new AuthStore();
