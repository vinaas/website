// export class App {
//   configureRouter(config, router) {
//     config.title = 'Aurelia';
//     config.map([
//       { route: ['','welcome'],  name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
//       //{ route: 'ReadMdFile',         name: 'ReadMdFile',        moduleId: '/admincp/src/Views/demoVM/readMdFile',nav: true, title:'readMdFile' },
//     //  { route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' }
//     ]);
//
//     this.router = router;
//   }
// }


export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' },
      { route: 'ReadMdFile',         name: 'ReadMdFile',        moduleId: '/admincp/src/Views/demoVM/readMdFile',nav: true, title:'readMdFile' },
    ]);

    this.router = router;
  }
}
