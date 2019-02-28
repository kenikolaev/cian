import Page from './page'

class LoginPage extends Page {
	
	get loginButton() { return $('//*[@id="header-user-login-motivation-container"]/div/div/div[2]/button'); }
	get username() { return $('/html/body/div[5]/div[2]/div/div/div[3]/form/div[1]/div/span/input'); }
	get password() { return $('/html/body/div[5]/div[2]/div/div/div[3]/form/div[2]/div/span/input'); }
	get submitButton() { return $('/html/body/div[5]/div[2]/div/div/div[3]/form/div[4]/button'); }

    open() {
        super.open('https://cheboksary.cian.ru/');
    }

}	
		
export default new LoginPage()