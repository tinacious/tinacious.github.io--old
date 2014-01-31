'use strict';

angular.module('tinaciousApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.socials = [
      {
        name: 'info@tinaciousdesign.com',
        url: 'mailto:info@tinaciousdesign.com',
        icon: 'envelope'
      },
      {
        name: '@tinaciousdesign',
        url: 'https://twitter.com/tinaciousdesign',
        icon: 'twitter-square'
      },
      {
        name: 'Facebook',
        url: 'http://facebook.com/TinaciousDesign',
        icon: 'facebook-square'
      },
      
      {
        name: 'Skype',
        url: 'skype:tinaciousdesign?chat',
        icon: 'skype'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/TinaciousDesign',
        icon: 'linkedin-square'
      },
      {
        name: 'Google Plus',
        url: 'https://plus.google.com/+TinaciousDesign/',
        icon: 'google-plus-square'
      }
    ];
  });
