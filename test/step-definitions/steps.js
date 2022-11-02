const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainPage = require('../pages/main.page');
const HelperScripts = require('../../helper/helper.scripts');

  Given(/^A user open main page$/, async() => {
    await MainPage.open()
  });

  When(/^A user close cookies modal window$/, async() =>  {
    await HelperScripts.closeModalCookiesWindow()
  });

  Then(/^A user click the Voice API link$/, async() =>  {
    await MainPage.clickVoiceApiLink();
  });

  Then(/^A user sees the Voice API page on the url (.+)$/, async(voiceUrl) => {
    await expect(browser).toHaveUrl(voiceUrl)
  });

  Then(/^A user sees the Voice API title (.+)$/, async(title) => {
    await expect(await MainPage.getVoicePageTitle()).toHaveText(title)
  });  
