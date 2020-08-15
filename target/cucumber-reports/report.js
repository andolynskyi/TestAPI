$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/API.feature");
formatter.feature({
  "name": "Verification of api endpoint",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.background({
  "name": "Given user get team at \"/team/12\"",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Verify 200 http status code on successful response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "user get team at \"/team/12\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user pass token",
  "keyword": "And "
});
formatter.match({
  "location": "TestAPIstep_defs.user_pass_token()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAPIstep_defs.status_code_should_be(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Given user get team at \"/team/12\"",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Verify 403 http status code on successful response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "user does not provide token",
  "keyword": "And "
});
formatter.match({
  "location": "TestAPIstep_defs.user_does_not_provide_token()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code should be 403",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAPIstep_defs.status_code_should_be(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Given user get team at \"/team/12\"",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Verify more than 20 squads members are there",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "user pass token",
  "keyword": "And "
});
formatter.match({
  "location": "TestAPIstep_defs.user_pass_token()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "more than 20 squads members are in a team",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAPIstep_defs.more_than_squads_members_are_in_a_team(Integer)"
});
formatter.result({
  "status": "skipped"
});
});