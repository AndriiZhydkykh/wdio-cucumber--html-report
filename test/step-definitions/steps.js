const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainPage = require('../pages/main.page');
const HelperScripts = require('../../helper/helper.scripts');
const HeaderPage = require('../pages/header.page');

  Given(/^A user open main page$/, async() => {
    await MainPage.open()
  });
    //ID-1 Open Voice Api from main page
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

  //ID-2 Check that Product, Solution, Resources,Company,Pricing links in the header menu open drowpdown menu when hover those
  
  Then(/^A user move to Products menu link on the header and sees the dropdown menu in the all links$/, async() => {
    await HelperScripts.checkButtonsHaveDropdown();
  });
  
  //ID-3 Check that all item from Products dropdown menu on header to be able click
  Then(/^A user move to Products menu link on the header and sees the all links are clickable$/, async() => {
    await HeaderPage.moveToProductsButton()
    await HelperScripts.checkLinksInProductsButtonIsClickable()
  }); 

