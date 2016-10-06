import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

// load material basic css
import 'angular-material/angular-material.min.css';
import './assets/app.css';

import { AppComponent } from './app/app.component';
import { 
  Users,
  UsersListComponent,
  UserDetailsComponent
} from './app/users';

module MaterialStart {
  "use strict";

  // Register module and it's dependencies
  angular.module('MaterialStart', [ 'ngMaterial', 'ngSanitize', Users.name ])
    .config(function(
      $mdIconProvider: angular.material.IIconProvider,
      $mdThemingProvider: angular.material.IThemingProvider) {

      // Register the user `avatar` icons
      $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("share", "./assets/svg/share.svg", 24)
        .icon("google_plus", "./assets/svg/google_plus.svg", 24)
        .icon("hangouts", "./assets/svg/hangouts.svg", 24)
        .icon("twitter", "./assets/svg/twitter.svg", 24)
        .icon("phone", "./assets/svg/phone.svg", 24);

      // Set theme        
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('purple');
        
    })

    // Register all of our components  
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .component(UsersListComponent.componentName, UsersListComponent.componentConfig)
    .component(UserDetailsComponent.componentName, UserDetailsComponent.componentConfig)
  ;
}