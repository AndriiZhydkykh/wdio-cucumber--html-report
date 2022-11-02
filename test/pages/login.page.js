/* const inputUsername ='#username'
const inputPassword ='#password'
const btnSubmit ='button[type="submit"]'
const Page = require('./page');


class LoginPage{
  
    async login (username, password) {
        await Page.type(inputUsername,username)
        await Page.type(inputPassword,password);
        await Page.click(btnSubmit)
    }

     async open () {
       await Page.open('/login');
    }
}

module.exports = new LoginPage();
 */