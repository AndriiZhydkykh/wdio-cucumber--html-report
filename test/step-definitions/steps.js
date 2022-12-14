const { Given, When, Then} = require('@wdio/cucumber-framework');
const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage = require('../pages/header.page');
const SolutionPage = require('../pages/solutions.page');
const NetworkPage = require('../pages/network.page');
const SupportCenterPage=require('../pages/supportCenter.page');


  Given(/^A user open main page$/,{ wrapperOptions: { retry: 2 } }, async() => {
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

  

  Then(/^A user move to Products menu link on the header and sees the dropdown menu in the all links$/, async() => {
    await HelperScripts.checkButtonsHaveDropdown();
  });
  


  Then(/^A user move to Products menu link on the header and sees the all links are clickable$/, async() => {
    await HeaderPage.moveToProductsButton()
    await HelperScripts.checkLinksInProductsButtonIsClickable()
  }); 



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



  Then(/^A user click the See all Use Cases link in dropdown menu$/, async() =>  {
    await HeaderPage.clickSeeAllUseCasesInSolutionsDropdownInSolutionsDropdown()
  });
  Then(/^A user click the Explore Contact Center link$/, async() =>  {
    await SolutionPage.clickContactCenterLink();
  });

  Then(/^A user sees the Contact Center page on the url (.+)$/, async(contactCenterUrl) => {
    await expect(browser).toHaveUrl(contactCenterUrl)
  });

  Then(/^A user sees the Contact Center Solutions title (.+)$/, async(title) => {
    await expect(await SolutionPage.getContactCenterPageTitle()).toHaveText(title)
  }); 



  Then(/^A user click the Network link in Header menu$/, async() =>  {
    await HeaderPage.clickNetworkButton();
  });
  Then(/^A user click the Explore VXCs button on the Network page$/, async() =>  {
    await NetworkPage.clickExploreVXCs();
  });
  
  Then(/^A user sees the virtual cross connects page on the url (.+)$/, async(virtualCrossUrl) => {
      await expect(browser).toHaveUrl(virtualCrossUrl);
  });
  
  Then(/^A user sees virtual-cross-connects title (.+)$/, async(title) => {
      await expect(await NetworkPage.getExploreVXCsPageTitle()).toHaveText(title)
  }); 



  Then(/^A user click the See our Pricing button link on the Network page$/, async() =>  {
    await NetworkPage.clickSeePriceButton();
  });
  Then(/^A user click the see Pricing link for Elastic SIP Trunking$/, async() =>  {
    await NetworkPage.clickElasticSIPTrunkingPriceLink();
  });
  
  Then(/^A user sees the pricing page on the elastic sip url (.+)$/, async(elasticSipPriceUrl) => {
      await expect(browser).toHaveUrl(elasticSipPriceUrl)
  });
  
  Then(/^A user sees the SIP Trunk Pricing title (.+)$/, async(title) => {
      await expect(await NetworkPage.getExploreVXCsPageTitle()).toHaveText(title)
  }); 



  Then(/^A user click the Explore Messaging link on the Network page$/, async() =>  {
    await NetworkPage.clickExploreMessaging();
  });
  
  Then(/^A user sees the SMS API page on the url (.+)$/, async(smsApiUrl) => {
      await expect(browser).toHaveUrl(smsApiUrl)
  });
  
  Then(/^A user sees SMS API page title (.+)$/, async(title) => {
      await expect(await NetworkPage.getExploreVXCsPageTitle()).toHaveText(title)
  }); 


  Then(/^A user click the support center link of the top  right on the page$/, async() =>  {
    await HeaderPage.clickSupportCenterLink();
  });
  
  Then(/^A user type (.+) in the search filed$/, async(TextForSearch) => {
    await SupportCenterPage.typeSearchField(TextForSearch);
  });
  
  Then(/^A user click How to Sign Up for a Telnyx account article$/, async() => {
    await SupportCenterPage.clickHowToSignUpArticleFromSearch();
  });
  Then(/^A user sees the article title (.+)$/, async(title) => {
    await expect(await SupportCenterPage.getHowToSignUpArticleTitle()).toHaveText(title)
});