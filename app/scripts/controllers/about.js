'use strict';

angular.module('tinaciousApp')
.controller('AboutCtrl', function ($scope) {
  // $scope.skills = [
  //   'Drupal',
  //   'WordPress',
  //   'ProcessWire',
  //   'HTML',
  //   'CSS',
  //   'SASS',
  //   'LESS',
  //   'JavaScript, jQuery',
  //   'Angular.js',
  //   'Grunt',
  //   'Bower',
  //   'Yeoman',
  //   'Drush for Drupal',
  //   'PHP, MySQL',
  //   'Git (especially Github)',
  //   'Mobile-first design',
  //   'Accessibility development',
  //   'Internet Explorer 6',
  //   'Handlebars.js',
  //   'Adobe Illustrator',
  //   'Adobe Photoshop',
  //   'SEO',
  //   'Configuring Apache on Ubuntu',
  //   'Agile'
  // ];

  $scope.skills = [
    {
      name: 'Drupal',
      icon: 'code',
      meta: 'php cms'
    },
    {
      name: 'WordPress',
      icon: 'code',
      meta: 'php cms wp'
    },
    {
      name: 'ProcessWire',
      icon: 'code',
      meta: 'php cms'
    },
    {
      name: 'Content management',
      icon: 'edit',
      meta: 'php cms'
    },
    {
      name: 'HTML5',
      icon: 'html5',
      meta: 'html'
    },
    {
      name: 'CSS3',
      icon: 'css3',
      meta: 'css sass less compass'
    },
    {
      name: 'SASS',
      icon: 'css3',
      meta: 'css sass less compass cli command line'
    },
    {
      name: 'LESS',
      icon: 'css3',
      meta: 'css sass less compass'
    },
    {
      name: 'Compass',
      icon: 'compass',
      meta: 'css sass less compass cli command line'
    },
    {
      name: 'Susy',
      icon: 'compass',
      meta: 'css sass compass'
    },
    {
      name: 'JavaScript, jQuery',
      icon: 'code',
      meta: 'js'
    },
    {
      name: 'Angular.js',
      icon: 'shield',
      meta: 'js javascript'
    },
    {
      name: 'E-commerce with Shopify',
      icon: 'shopping-cart',
      meta: 'liquid js javascript ecommerce'
    },
    {
      name: 'Grunt',
      icon: 'terminal',
      meta: 'node npm command line cli'
    },
    {
      name: 'Bower',
      icon: 'terminal',
      meta: 'node npm command line cli'
    },
    {
      name: 'Yeoman',
      icon: 'terminal',
      meta: 'node npm command line cli'
    },
    {
      name: 'Drush for Drupal',
      icon: 'terminal',
      meta: 'cli command line'
    },
    {
      name: 'PHP, MySQL',
      icon: 'code',
      meta: ''
    },
    {
      name: 'Git',
      icon: 'github',
      meta: 'bitbucket command line cli'
    },
    {
      name: 'User Interface',
      icon: 'user',
      meta: 'ux ui'
    },
    {
      name: 'User Experience',
      icon: 'user',
      meta: 'ux ui'
    },
    {
      name: 'Responsive Design',
      icon: 'mobile-phone',
      meta: 'ios mobile rwd fluid responsive web'
    },
    {
      name: 'Mobile-first design',
      icon: 'mobile-phone',
      meta: 'ios rwd responsive web'
    },
    {
      name: 'Accessibility development',
      icon: 'wheelchair',
      meta: 'accessible disabled'
    },
    {
      name: 'Internet Explorer (IE 6+)',
      icon: 'wheelchair',
      meta: 'ie6 ie7 ie8 ie9'
    },
    {
      name: 'Handlebars.js',
      icon: 'code',
      meta: 'javascript'
    },
    {
      name: 'Adobe Illustrator',
      icon: 'pencil',
      meta: 'graphic'
    },
    {
      name: 'Adobe Photoshop',
      icon: 'picture-o',
      meta: 'graphic'
    },
    {
      name: 'Bootstrap',
      icon: 'twitter',
      meta: 'twitter bootstrap'
    },
    {
      name: 'Foundation',
      icon: 'code',
      meta: 'zurb foundation'
    },
    {
      name: 'Windows',
      icon: 'windows',
      meta: 'windows pc'
    },
    {
      name: 'Mac',
      icon: 'apple',
      meta: 'mac apple ios'
    },
    {
      name: 'SEO',
      icon: 'search',
      meta: 'search engine optimization'
    },
    {
      name: 'Configuring Apache on Ubuntu',
      icon: 'linux',
      meta: 'linux apache ubuntu linode'
    },
    {
      name: 'Agile with Scrum',
      icon: 'code-fork',
      meta: 'agile project management'
    }
  ];

});