import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getName() {
    return element(by.css('.first-name')).getText();
  }
}
