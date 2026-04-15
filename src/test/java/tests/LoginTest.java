package tests;

import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;

class LoginTest {

    @Test
    void userSeesErrorWithInvalidCredentials() {
        // Arrange
        open("https://the-internet.herokuapp.com/login");

        // Act
        $("#username").setValue("wrong-user");
        $("#password").setValue("wrong-password");
        $("button[type='submit']").click();

        // Assert
        $("#flash").shouldBe(visible);
        $("#flash").shouldHave(text("Your username is invalid!"));
    }
}
