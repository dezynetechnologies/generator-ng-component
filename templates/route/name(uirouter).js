'use strict';

angular.module('<%= scriptAppName %>')
  .config(function ($stateProvider) {
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl'
      });
  })
  .run( Run );

  /* @inject */
  function Run(Menus) {
    // Set top bar menu items
    Menus.set('<%= name %>', '<%= route %>', 'grey-500');
  }

