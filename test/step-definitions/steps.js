const { Given, When, Then } = require('@wdio/cucumber-framework');
const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage = require('../pages/header.page');
const SolutionPage = require('../pages/solutions.page');

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

//ID-4 Open the Talk to an expert from Customer Engagement Platforms page

  Then(/^A user move to solution link in header menu$/, async() =>  {
    await HeaderPage.moveToSolutionsButton();
  });
  Then(/^A user click the customer-engagement-platforms link in dropdown menu$/, async() =>  {
    await HeaderPage.clickCustomerEngagementPlatformsLinkInSolutionDropdown()
  });
  Then(/^A user click the Schedule a call with our experts button$/, async() =>  {
    await SolutionPage.clickScheduleCallButton();
  });

  Then(/^A user sees the contact us page on the url (.+)$/, async(contactUrl) => {
    await expect(browser).toHaveUrl(contactUrl)
  });

  Then(/^A user sees the Talk to an expert title (.+)$/, async(title) => {
    await expect(await SolutionPage.getContactUsTitle()).toHaveText(title)
  }); 

  //ID-5 Open Explore Healthcare Solutions from Solutions page
  Then(/^A user click the See all Solutions link in the dropdown menu$/, async() =>  {
    await HeaderPage.clickSeeAllSolutionsInSolutionsDropdown()
  });
  Then(/^A user click the Explore Healthcare Solutions link on the solution page$/, async() =>  {
    await SolutionPage.clickHealthCareApisLink();
  });

  Then(/^A user sees the healthcare apis page on the url (.+)$/, async(healthCareUrl) => {
    await expect(browser).toHaveUrl(healthCareUrl)
  });

  Then(/^A user sees the Elevate patient engagement with healthcare APIs title (.+)$/, async(title) => {
    await expect(await SolutionPage.getHealthCarePageTitle()).toHaveText(title)
  }); 