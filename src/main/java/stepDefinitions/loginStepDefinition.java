package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginStepDefinition {
	WebDriver driver;
	
	@Given("^User is already on Login page$")
	public void User_is_already_on_Login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Acer\\Desktop\\JavaClass\\NewCRMBDDC\\drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
	}
	@When("^Title of the login page is free CRM$")
	public void Title_of_the_login_page_is_free_CRM() {
		String actTitle=driver.getTitle();
		String expTitle="Cogmento CRM";
		Assert.assertEquals(expTitle, actTitle);
	}
	@Then("^User enters username and password$")
	public void User_enters_username_and_password() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[contains(@name,\"email\")]")).sendKeys("nlingayat007@gmail.com");
		driver.findElement(By.xpath("//input[contains(@name,\"password\")]")).sendKeys("MyTest123");
		
	}
	@Then("^User click on Login button$")
	public void User_click_on_Login_button(){
		driver.findElement(By.xpath("//div[text()='Login']")).click();
	}
	
	@Then("^User is on Home Page$")
	public void User_is_on_Home_Page() throws InterruptedException {
		Thread.sleep(2000);
		String actTitle1=driver.getTitle();
		String expTitle1="Cogmento CRM";
		Assert.assertEquals(expTitle1, actTitle1);
	}
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}

}
