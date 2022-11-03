const Page = require('../pages/page')
const howToSignUpArticleFromSearch='[href*="how-to-sign-up-for-a-telnyx-account"]'
const howToSignUpArticleTitle='//h1[contains(text(),"How to Sign Up")]'
const searchField='[class*="search__input"]'


class SupportCenterPage {
  
  async clickHowToSignUpArticleFromSearch() {
    return await Page.click(howToSignUpArticleFromSearch);
  }
  async getHowToSignUpArticleTitle() {
    return await Page.getElement(howToSignUpArticleTitle);
  }
  async typeSearchField(text) {
    return await Page.typeAndPressEnter(searchField,text);
  }

}

module.exports = new SupportCenterPage();