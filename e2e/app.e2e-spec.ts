import { AppPage } from './app.po';

describe('ng-traffic-ci App', () => {
  let page: AppPage;
  let buttons;

  beforeEach(() => {
    page = new AppPage();
    buttons = page.getButtons();
  });

  it('should display app heading', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Traffic Signal App');
  });

  it('should click on red button and show red light', () => {
    page.navigateTo();
    buttons.stopBtn.click();
    expect(page.hasClass(page.getLight('red'), 'animate')).toBe(true);
  });

  it('should click on yellow button and show yellow light', () => {
    page.navigateTo();
    buttons.readyBtn.click();
    expect(page.hasClass(page.getLight('yellow'), 'animate')).toBe(true);
  });

  it('should click on green button and show green light', () => {
    page.navigateTo();
    buttons.goBtn.click();
    expect(page.hasClass(page.getLight('green'), 'animate')).toBe(true);
  });
});
