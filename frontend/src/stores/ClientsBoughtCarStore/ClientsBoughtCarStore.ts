import { makeAutoObservable, toJS } from 'mobx';

import clientBoughtCarDataBase from '../../models/clientsBoughtCarDB';
import { uniqueId } from '../../utils/generatorId';
import { ClientBoughtCar, ClientBoughtCarUpdated, ClientBoughtCarForForm } from '../../types/ClientBoughtCar';

class ClientsBoughtCarStore {

  clientsBoughtCar: Array<ClientBoughtCar> = clientBoughtCarDataBase;

  constructor() {
    makeAutoObservable(this);
  }

  deleteClientBoughtCart(id: string) {
    this.clientsBoughtCar = this.clientsBoughtCar.filter((client: ClientBoughtCar) => client.id !== id);
  }

  addClientBoughtCar(client: ClientBoughtCarForForm) {
    const newClientBoughtCar: ClientBoughtCar = {
      fullName: client.fullName,
      phoneNumber: client.phoneNumber,
      carId: client.carId,
      contractOfSaleId: client.contractOfSaleId,
      dateOfBirst: client.dateOfBirst,
      sex: client.sex,
      placeOfBirth: client.placeOfBirth,
      seriesAndNumbers: client.seriesAndNumbers,
      id: uniqueId(),
    };
    this.clientsBoughtCar.push(newClientBoughtCar);
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

  editClientBoughtCar(clientBoughtCarEdited: ClientBoughtCarForForm, id: string) {
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
