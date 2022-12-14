const Page = require('../test/pages/page');
const HeaderPage = require('../test/pages/header.page')
const cookiesModalWindow='[aria-label="close and deny"]~div>div'


class HelperScripts {
  async closeModalCookiesWindow(){
    if(await $(cookiesModalWindow).isDisplayedInViewport() === true){
      return await Page.click(cookiesModalWindow);
    }
  }

  async checkButtonsHaveDropdown(){
    for (let i = 0; i <= 4; i++)  {
      await HeaderPage.hoverNavigationMenuButtons(i);
      await expect(await HeaderPage.getMenuDropDowns(i)).toBeDisplayedInViewport();
    }
  }
  async checkLinksInProductsButtonIsClickable(i){
      for (let i = 0; i <= 8; i++)  {
      await expect(await HeaderPage.getProductButtonsDropdownLinks(i)).toBeClickable()
    }
  } 

}
module.exports = new HelperScripts();