@API
Feature: Verification of api endpoint

  Scenario: Verify 200 http status code on successful response
    Given user get team at "/team/12"
    And user pass token
    Then status code should be 200

  Scenario: Verify 403 http status code on successful response
    Given user get team at "/team/12"
    And user does not provide token
    Then status code should be 403

  Scenario:  Verify more than 20 squads members are there
    Given user get team at "/team/12"
    And user pass token
    Then  more than 20 squads members are in a team
