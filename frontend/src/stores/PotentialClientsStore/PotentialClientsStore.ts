import { makeAutoObservable, toJS } from 'mobx';

import potentialClientsDataBase from '../../models/potentialClientsDB';
import { PotentialClient, PotentialClientForEdit, PotentialClientUpdated } from '../../types/PotentialClient';

class PotentialClientsStore {

  potentialClients: Array<PotentialClient> = potentialClientsDataBase;

  constructor() {
    makeAutoObservable(this);
  }

  deletePotentialClient(id: string) {
    this.potentialClients = this.potentialClients.filter((client: PotentialClient) => client.id !== id);
  }

  addPotentialClient(client: PotentialClient) {
    this.potentialClients.push(client);
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

  editPotentialClient(potentialClientEdited: PotentialClientForEdit, id: string) {
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
