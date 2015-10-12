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
    //Menus.set('<%= name %>', '<%= route %>', 'grey-500');
    Menus.addMenuItem('sidebar', '<%= name %>', '<%= name %>', null, '<%= route %>', false , null, null, 'icon-home'); 
    Menus.addSubMenuItem('sidebar', '<%= name %>', 'List', '<%= route %>');
    Menus.addSubMenuItem('sidebar', '<%= name %>', 'New', '<%= route %>');

  }
