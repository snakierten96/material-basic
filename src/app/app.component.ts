import { IUser, UsersDataService } from './users';

export class AppComponent {
  // Define out AppComponent's name
  static componentName: string = 'msApp';
  
  // Define our AppComponent's config
  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    template: require('./app.component.html')
  };

  // Define our injectables
  private $mdSidenav: angular.material.ISidenavService;
  private UsersDataService: UsersDataService;

  // Define out own variables
  private users: IUser[];
  private selected: IUser;

  // Define our constructor and inject necessary services
  constructor(
    $mdSidenav: angular.material.ISidenavService,
    UsersDataService: UsersDataService) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;
    this.UsersDataService = UsersDataService;

    // Load our users and store them
    UsersDataService.loadAllUsers().then((users: IUser[]) => {
      this.users = users;
      this.selected = users[0];
    });
  }

  toggleUsersList() {
    this.$mdSidenav('left').toggle();
  }

  selectUser(user: number|IUser) {
    this.selected = angular.isNumber(user) ? this.users[<number> user] : <IUser> user;
    // If the users list/sidenav is open; we want to close it
    this.$mdSidenav('left').close();
  }

}