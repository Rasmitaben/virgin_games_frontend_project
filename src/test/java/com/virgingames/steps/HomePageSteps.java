package com.virgingames.steps;

import com.virgingames.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class HomePageSteps {
    @Given("^User is on homepage$")
    public void userIsOnHomepage() {
    }

    @When("^User accept cookies$")
    public void userAcceptCookies() {
        new HomePage().clickOnAcceptCookies();
    }

    @And("^User click on Online Bingo tab$")
    public void userClickOnOnlineBingoTab() {
        new HomePage().clickOnOnlineBingoTab();
    }

    @Then("^User should be able to verify the text \"([^\"]*)\"$")
    public void userShouleBeAbleToVerifyTheText(String arg0) throws InterruptedException {
        Thread.sleep(2000);
       String actualMessage = "Experience our Selection of Online Bingo Games";
        Assert.assertEquals(new HomePage().verifyWelcomeOnlineBingoText(),actualMessage);
    }


}
