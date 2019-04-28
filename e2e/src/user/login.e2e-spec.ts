import { browser, by, element } from 'protractor';

describe('the user try to login', () => {
  it('should login to event page', async () => {
    await browser.get('/user/login');
    await  element(by.id('userName')).sendKeys('John');
    await  element(by.id('password')).sendKeys('123456');
    await  element(by.buttonText('登入')).click();
    const actual = await browser.getCurrentUrl();
    expect(actual).toContain('events');
  });

  it('should login failure alert', async () => {
    await browser.get('/user/login');
    await element(by.id('userName')).sendKeys('John');
    await element(by.id('password')).sendKeys('654321');
    await element(by.buttonText('登入')).click();
    expect(await element(by.css('div.alert.alert-danger')).getText()).toContain('錯誤的帳號密碼');
  });

  it('should login failure alert is present', async () => {
    await browser.get('/user/login');
    await element(by.id('userName')).sendKeys('John');
    await element(by.id('password')).sendKeys('654321');
    await element(by.buttonText('登入')).click();
    const isAlertPresent = await element(by.className('alert-danger')).isPresent();
    expect(isAlertPresent).toBe(true, '錯誤密碼案例驗證失敗');
  });
});
