import { browser, by, element } from 'protractor';

describe('the user try to login', () => {
  it('should login to event page', () => {
    browser.get('/user/login');
    element(by.id('userName')).sendKeys('John');
    element(by.id('password')).sendKeys('123456');
    element(by.buttonText('登入')).click();
    const actual = browser.getCurrentUrl();
    expect(actual).toContain('events');
  });

  it('should login failure alert', () => {
    browser.get('/user/login');
    element(by.id('userName')).sendKeys('John');
    element(by.id('password')).sendKeys('654321');
    element(by.buttonText('登入')).click();
    expect(element(by.css('div.alert.alert-danger')).getText()).toContain('錯誤的帳號密碼');
  });

  it('should login failure alert is present', () => {
    browser.get('/user/login');
    element(by.id('userName')).sendKeys('John');
    element(by.id('password')).sendKeys('654321');
    element(by.buttonText('登入')).click();
    const isAlertPresent = element(by.className('alert-danger')).isPresent();
    expect(isAlertPresent).toBe(true, '錯誤密碼案例驗證失敗');
  });
});
