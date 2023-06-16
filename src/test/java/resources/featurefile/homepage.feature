
Feature:  Virgin Game Homepage
  As a user I want to navigate to homepage

  Scenario: User should navigate to homepage successfully
    Given User is on homepage
    When User accept cookies
    And User click on Online Bingo tab
    Then User should be able to verify the text "Experience our Selection of Online Bingo Games"
