export class UsersListComponent {
  static componentName: string = 'msUsersList';

  static componentConfig: ng.IComponentOptions = {
    bindings: {
      users: '<',
      selected: '<',
      selectedUser: '&onSelected'
    },
    controller: UsersListComponent,
    templateUrl: './users-list.component.html'
  };
}