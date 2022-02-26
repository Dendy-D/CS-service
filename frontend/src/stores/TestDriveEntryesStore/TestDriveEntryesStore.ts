import { makeAutoObservable, toJS } from 'mobx';

import testDriveEntryesDataBase from '../../models/testDriveEntryesDB';
import { TestDriveEntry, TestDriveEntryUpdated, TestDriveEntryForForm } from '../../types/TestDriveEntry';
import { uniqueId } from '../../utils/generatorId';

class TestDriveEntryesStore {

  testDriveEntryes: Array<TestDriveEntry> = testDriveEntryesDataBase;

  constructor() {
    makeAutoObservable(this);
  }

  deleteTestDriveEntry(id: string) {
    this.testDriveEntryes = this.testDriveEntryes.filter((entry: TestDriveEntry) => entry.id !== id);
  }

  addTestDriveEntry(entry: TestDriveEntryForForm) {
    const newTestDriveEntry: TestDriveEntry = {
      fullNameClient: entry.fullNameClient,
      fullNameEmployee: entry.fullNameEmployee,
      carId: entry.carId,
      date: entry.date,
      id: uniqueId(),
    };

    this.testDriveEntryes.push(newTestDriveEntry);
  }

  getTestDriveEntryById(id: string) {
    let result: any;

    this.testDriveEntryes.forEach((entry: TestDriveEntry) => {
      if (entry.id === id) {
        result = entry;
      }
    });

    return toJS(result);
  }

  editTestDriveEntry(testDriveEntryEdited: TestDriveEntryForForm, id: string) {
    const editableTestDriveEntry: TestDriveEntryUpdated = this.getTestDriveEntryById(id);

    const indexInitialTestDriveEntry: Array<number> = [];

    this.testDriveEntryes.map((client: TestDriveEntry, index: number) => {
      if (client.id === editableTestDriveEntry.id) {
        indexInitialTestDriveEntry.push(index);
        return;
      }
    });

    Object.entries(testDriveEntryEdited).forEach(([key, value]: Array<string>) => {
      editableTestDriveEntry[key] = value;
    });

    this.testDriveEntryes[indexInitialTestDriveEntry[0]] = editableTestDriveEntry;
  }

}

export default new TestDriveEntryesStore();
