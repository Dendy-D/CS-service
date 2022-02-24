import { makeAutoObservable, toJS } from 'mobx';

import testDriveEntryesDataBase from '../../models/testDriveEntryes';
import { TestDriveEntry, TestDriveEntryUpdated, TestDriveEntryForEdit } from '../../types/TestDriveEntry';

class TestDriveEntryesStore {

  testDriveEntryes: Array<TestDriveEntry> = testDriveEntryesDataBase;

  constructor() {
    makeAutoObservable(this);
  }

  deleteTestDriveEntry(id: string) {
    this.testDriveEntryes = this.testDriveEntryes.filter((entry: TestDriveEntry) => entry.id !== id);
  }

  addTestDriveEntry(entry: TestDriveEntry) {
    this.testDriveEntryes.push(entry);
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

  editTestDriveEntry(testDriveEntryEdited: TestDriveEntryForEdit, id: string) {
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
