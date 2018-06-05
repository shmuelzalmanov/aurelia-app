import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'calendar'], name: 'calendar',      moduleId: PLATFORM.moduleName('./calendar'),      nav: true, title: 'Calendar' }
    ]);

    this.router = router;
  }
}
