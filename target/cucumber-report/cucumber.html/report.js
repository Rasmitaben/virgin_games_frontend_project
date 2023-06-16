$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Virgin Game Homepage",
  "description": "As a user I want to navigate to homepage",
  "id": "virgin-game-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8053980500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to homepage successfully",
  "description": "",
  "id": "virgin-game-homepage;user-should-navigate-to-homepage-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Online Bingo tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be able to verify the text \"Experience our Selection of Online Bingo Games\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 311617700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userAcceptCookies()"
});
formatter.result({
  "duration": 300024900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClickOnOnlineBingoTab()"
});
formatter.result({
  "duration": 925544900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Experience our Selection of Online Bingo Games",
      "offset": 40
    }
  ],
  "location": "HomePageSteps.userShouleBeAbleToVerifyTheText(String)"
});
formatter.result({
  "duration": 2111578000,
  "status": "passed"
});
formatter.after({
  "duration": 196900,
  "status": "passed"
});
});