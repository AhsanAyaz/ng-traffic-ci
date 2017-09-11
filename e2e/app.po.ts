import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root .app-container h3')).getText();
  }

  getLight(lightType) {
    return element(by.css(`app-root .app-container .light.${lightType}`));
  }

  hasClass(element, cls) {
      return element.getAttribute('class').then(function (classes) {
          console.log(classes);
          return classes.split(' ').indexOf(cls) !== -1;
      });
  }

  clickButton(button) {
    button.then(buttonElem => {
      buttonElem.click();
    });
  }

  getButtons() {
    return {
      stopBtn: element(by.css('app-root .app-container .stop-btn')),
      readyBtn: element(by.css('app-root .app-container .ready-btn')),
      goBtn: element(by.css('app-root .app-container .go-btn'))
    };
  }
}
