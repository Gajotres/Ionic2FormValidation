import {App, Platform, Config} from 'ionic/ionic';
import {FormPage} from './pages/form/form';

@App({
  templateUrl: 'build/app.html'
})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = FormPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
