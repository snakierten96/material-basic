import { IUser } from './users';

export class UserDetailsComponent {
  static componentName: string = "msUserDetails";

  static componentConfig: ng.IComponentOptions = {
    bindings: {
      selected: '<'
    },
    controller: UserDetailsComponent,
    templateUrl: './user-details.component.html'
  };

  private selected: IUser;

  private $sce: ng.ISCEService;
  private $mdSidenav: angular.material.ISidenavService;
  private $mdDialog: angular.material.IDialogService;
  private $mdBottomSheet: angular.material.IBottomSheetService;

  constructor($sce: ng.ISCEService, $mdSidenav: angular.material.ISidenavService,
              $mdDialog: angular.material.IDialogService,
              $mdBottomSheet: angular.material.IBottomSheetService) {
    this.$sce = $sce;
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
    this.$mdBottomSheet = $mdBottomSheet;
  }

  share($event: MouseEvent) {
    var self = this;

    var config: angular.material.IBottomSheetOptions = {
      parent: angular.element(document.getElementById('content')),
      templateUrl: './user-contact-sheet.html',
      controller: UserSheetController,
      controllerAs: "$ctrl"
    };

    this.$mdBottomSheet.show(config).then(( clickedItem: IUser ) => {
      var html = `<p>You contacted ${self.selected.name} via ${clickedItem.name}!</p>`;

      var alert = this.$mdDialog.alert()
        .title('Sharing Success')
        .htmlContent(this.$sce.trustAsHtml(html))
        .ok('Sweet!');

      this.$mdDialog.show(alert);
    });

    function UserSheetController() {
      this.user = self.selected;
      this.items = [
        { name: 'Phone',   icon: 'phone',       icon_url: 'assets/svg/phone.svg' },
        { name: 'Twitter', icon: 'twitter',     icon_url: 'assets/svg/twitter.svg' },
        { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
        { name: 'Hangout', icon: 'hangouts',    icon_url: 'assets/svg/hangouts.svg' }
      ];
      this.performAction = function (action) {
        self.$mdBottomSheet.hide(action);
      };
    }

  }
}