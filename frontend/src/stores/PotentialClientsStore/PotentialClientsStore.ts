import { makeAutoObservable, toJS } from 'mobx';

import potentialClientsDataBase from '../../fakeDatabases/potentialClientsDB';
import { PotentialClient, PotentialClientForForm, PotentialClientUpdated } from '../../types/PotentialClient';
import { uniqueId } from '../../utils/generatorId';

class PotentialClientsStore {

  potentialClients: Array<PotentialClient> = potentialClientsDataBase;

  constructor() {
    makeAutoObservable(this);
  }

  deletePotentialClient(id: string) {
    this.potentialClients = this.potentialClients.filter((client: PotentialClient) => client.id !== id);
  }

  addPotentialClient(client: PotentialClientForForm) {
    const newPotentialClient: PotentialClient = {
      fullName: client.fullName,
      phoneNumber: client.phoneNumber,
      carId: client.carId,
      leasing: client.leasing,
      id: uniqueId(),
    };

    this.potentialClients.push(newPotentialClient);
  }

  getPotentialClientById(id: string) {
    let result: any;

    this.potentialClients.forEach((client: PotentialClient) => {
      if (client.id === id) {
        result = client;
      }
    });

    return toJS(result);
  }

  editPotentialClient(potentialClientEdited: PotentialClientForForm, id: string) {
    const editablePotentialClient: PotentialClientUpdated = this.getPotentialClientById(id);

    const indexInitialPotentialClient: Array<number> = [];

    this.potentialClients.map((client: PotentialClient, index: number) => {
      if (client.id === editablePotentialClient.id) {
        indexInitialPotentialClient.push(index);
        return;
      }
    });

    Object.entries(potentialClientEdited).forEach(([key, value]: Array<string>) => {
      editablePotentialClient[key] = value;
    });

    this.potentialClients[indexInitialPotentialClient[0]] = editablePotentialClient;
  }

}

export default new PotentialClientsStore();
