import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

module MaterialStart {
  
  angular.module('MaterialStart', ['ngMaterial', 'ngSanitize'])
    .config(function($mdIconProvider: angular.material.IIconProvider, $mdThemingProvider: angular.material.IThemingProvider) {

      // Register the user avatar icons
      $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg")
        .icon("menu", "./assets/svg/menu.svg")
        .icon("share", "./assets/svg/share.svg")
        .icon("google_plus", "./assets/svg/google_plus.svg")
        .icon("hangouts", "./assets/svg/hangouts.svg")
        .icon("twitter", "./assets/svg/twitter.svg")
        .icon("phone", "./assets/svg/phone.svg");

      // Set theme        
      $mdThemingProvider
        .primaryPallette('brown')
        .accentPallete('red');
        
    })
    
    // Register all of our components  
  ;
}