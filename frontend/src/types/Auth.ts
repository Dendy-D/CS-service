export type CurrentUser = {
  fullName: string;
  position: string;
  login: string;
  password: string;
};

export type CurrentUserForEmployeeStore = Omit<CurrentUser, 'fullName'>
