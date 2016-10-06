import { UsersDataService } from './users-data.service';

export interface IUser {
  name: string;
  avatar: string;
  content: string;
}

export module Users {
  export var name: string = 'Users';

  angular
    .module(Users.name, ['ngMaterial'])
    .service("UsersDataService", UsersDataService);
}