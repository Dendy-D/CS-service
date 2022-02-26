export type TestDriveEntry = {
  id: string;
  fullNameClient: string;
  carId: string;
  fullNameEmployee: string;
  date: string;
}

export type TestDriveEntryUpdated = TestDriveEntry & {
  [key: string]: string;
}

export type TestDriveEntryForForm = Omit<TestDriveEntry, 'id'>;
