import { makeAutoObservable, toJS } from 'mobx';

import clientBoughtCarDataBase from '../../models/clientsBoughtCarDB';
import { ClientBoughtCar, ClientBoughtCarUpdated, ClientBoughtCarForEdit } from '../../types/ClientBoughtCar';

class ClientsBoughtCarStore {

  clientsBoughtCar: Array<ClientBoughtCar> = clientBoughtCarDataBase;

  constructor() {
    makeAutoObservable(this);
  }

  deleteClientBoughtCart(id: string) {
    this.clientsBoughtCar = this.clientsBoughtCar.filter((client: ClientBoughtCar) => client.id !== id);
  }

  addClientBoughtCar(client: ClientBoughtCar) {
    this.clientsBoughtCar.push(client);
  }

  getClientBoughtCarById(id: string) {
    let result: any;

    this.clientsBoughtCar.forEach((client: ClientBoughtCar) => {
      if (client.id === id) {
        result = client;
      }
    });

    return toJS(result);
  }

  editClientBoughtCar(clientBoughtCarEdited: ClientBoughtCarForEdit, id: string) {
    const editableClientBoughtCar: ClientBoughtCarUpdated = this.getClientBoughtCarById(id);

    const indexInitialPotentialClient: Array<number> = [];

    this.clientsBoughtCar.map((client: ClientBoughtCar, index: number) => {
      if (client.id === editableClientBoughtCar.id) {
        indexInitialPotentialClient.push(index);
        return;
      }
    });

    Object.entries(clientBoughtCarEdited).forEach(([key, value]: Array<string>) => {
      editableClientBoughtCar[key] = value;
    });

    this.clientsBoughtCar[indexInitialPotentialClient[0]] = editableClientBoughtCar;
  }

}

export default new ClientsBoughtCarStore();
