Feature: Login validations to Eribank Application

  Background: 
    Given I'm on the login screen

  @AddScenario
  Scenario Outline: Displays home screen when logging in with valid credentials
    Given I try to log in with credentials; username: '<username>' and password: '<password>'
    When Click the login button
    Then Check Login

    Examples: 
      | username | password |
      | company  | company  |
      | company  | company  |
