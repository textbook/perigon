import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getName() {
    return element(by.css('.first-name')).getText() as Promise<string>;
  }

  refreshPerson() {
    return element(by.buttonText('Refresh')).click();
  }
}
