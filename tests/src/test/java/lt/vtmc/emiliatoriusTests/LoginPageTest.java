package lt.vtmc.emiliatoriusTests;

import org.junit.Before;
import org.junit.Test;

public class LoginPageTest {

    LoginPage loginPage = new LoginPage();

    @Before
    public void setupLoginPage() {
//        Configuration.headless = true;
        loginPage.openLoginPage();
    }

    @Test
    public void userCanLoginWithValidData() {
        loginPage.fillEmailWithValidData();
        loginPage.fillPasswordWithValidData();
        loginPage.clickSignInButton();
        //...something wrong with selenide, i will check later and continue to write tests
    }

}
