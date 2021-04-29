package lt.vtmc.emiliatoriusTests;

import com.codeborne.selenide.*;
import static com.codeborne.selenide.Selenide.*;

public class LoginPage {
    private final SelenideElement loginFormEmail = $("#mail");
    private final SelenideElement loginFormPassword = $("#password");
    private final SelenideElement loginFormButton = $("button[type='submit']");

    public void openLoginPage() {
        open("https://www.google.com");
    }

    public void fillEmailWithValidData() {
        loginFormEmail.clear();
        loginFormEmail.sendKeys("admin@mail.com");
    }

    public void fillPasswordWithValidData() {
        loginFormPassword.clear();
        loginFormPassword.sendKeys("password");
    }

    public void clickSignInButton() {
        loginFormButton.click();
    }

}
