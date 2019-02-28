import LoginPage from '../pageobjects/login.page.js';
import SearchPage from '../pageobjects/search.page.js';
import ResultPage from '../pageobjects/result.page.js';

describe('cian test', () => {
    it('', () => {
		
		(async () => {
			LoginPage.open();
			await LoginPage.loginButton.click();
			await LoginPage.username;
		})().catch((e) => console.error(e));
		
		const PropertiesReader = require('properties-reader');
		const prop = PropertiesReader('app.properties');

		const username = prop.get('username'); 
		const password = prop.get('password'); 
		
		LoginPage.username.setValue(username);
		LoginPage.password.setValue(password);
		(async () => {
			await LoginPage.submitButton.click();
			setTimeout(function() {
				console.log('');
			}, 5000);
		})().catch((e) => console.error(e));	
		
		SearchPage.roomNumberButton.click();
		SearchPage.twoRoomChoice.click();
		SearchPage.findButton.click();
		
		ResultPage.tableButton.click();
		(async () => {
			await ResultPage.result1
		})().catch((e) => console.error(e));	
		
		const report =  ResultPage.result1.getAttribute('address') + '\n' +  ResultPage.result1.getAttribute('price') + '\n' + 
						ResultPage.result2.getAttribute('address') + '\n' +  ResultPage.result2.getAttribute('price') + '\n' + 
						ResultPage.result3.getAttribute('address') + '\n' +  ResultPage.result3.getAttribute('price') + '\n' + 
						ResultPage.result4.getAttribute('address') + '\n' +  ResultPage.result4.getAttribute('price') + '\n' + 
						ResultPage.result5.getAttribute('address') + '\n' +  ResultPage.result5.getAttribute('price');

        const fs = require('fs');
		fs.writeFile("report.txt", report, function(err) {
			if(err) {
				return console.log(err);
			}
		}); 
		
		
		
	});
	
});