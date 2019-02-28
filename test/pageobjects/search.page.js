import Page from './page'

class SearchPage extends Page {
	
	get roomNumberButton() { return $('//*[@id="mainpage___R6E7C"]/div/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[4]/span/button'); }
	get twoRoomChoice() { return $('//*[@id="mainpage___R6E7C"]/div/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[4]/span/div/div/div/div[3]/span/label'); }
	get findButton() { return $('//*[@id="mainpage___R6E7C"]/div/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/button'); }

}	
		
export default new SearchPage()