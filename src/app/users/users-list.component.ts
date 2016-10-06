export class UsersListComponent {
  static componentName: string = 'msUsersList';
  
  static componentConfig: ng.IComponentOptions = {
    bindings: {
      users: '<',
      selected: '<',
      selectUser: '&onSelected'
    },
    controller: UsersListComponent,
    template: require('./users-list.component.html')
  };
}