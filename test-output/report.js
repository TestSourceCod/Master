$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM login page Test",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Title of the login page is free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.User_is_already_on_Login_page()"
});
formatter.result({
  "duration": 4492930801,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.Title_of_the_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 25960300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_enters_username_and_password()"
});
formatter.result({
  "duration": 2287027200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_click_on_Login_button()"
});
formatter.result({
  "duration": 136309201,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.User_is_on_Home_Page()"
});
formatter.result({
  "duration": 2016751200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 98793700,
  "status": "passed"
});
});