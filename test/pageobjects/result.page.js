import Page from './page'

class ResultPage extends Page {
	
	get tableButton() { return $('//*[@id="frontend-serp"]/div/div[4]/div[2]/div/noindex/a[3]'); }
	get result1() { return $('//*[@id="content"]/div/div/div[1]/div[2]/div[1]/table/tbody/tr[1]'); }
	get result2() { return $('//*[@id="content"]/div/div/div[1]/div[2]/div[1]/table/tbody/tr[2]'); }
	get result3() { return $('//*[@id="content"]/div/div/div[1]/div[2]/div[1]/table/tbody/tr[3]'); }
	get result4() { return $('//*[@id="content"]/div/div/div[1]/div[2]/div[1]/table/tbody/tr[4]'); }
	get result5() { return $('//*[@id="content"]/div/div/div[1]/div[2]/div[1]/table/tbody/tr[5]'); }


}	
		
export default new ResultPage()