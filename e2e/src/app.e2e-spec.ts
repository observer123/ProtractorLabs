import { AppPage } from './app.po';
import { browser, logging, by, $, element } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Protractor 訓練營');
  });

  it('should baseUrl display title Protractor 訓練營', async () => {
    await page.navigateTo();
    await browser.get(browser.baseUrl);
    const result = await element(by.css('div.navbar-header > a')).getText();
    expect(result).toEqual('Protractor 訓練營');
  });

  it('should events/new display title 建立活動', async () => {
    await page.navigateTo();
    await browser.get('http://localhost:4200/events/new');
    const result = await $('body > events-app > ng-component > h1').getText();
    expect(result).toEqual('建立活動');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
