package testAPI;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;

public class TestAPIstep_defs {

    @Test
    public void firstTest() {
        String URI = "https://api.football-data.org/v2";
        String endPoint = "/teams/12";

        Response response = RestAssured.given().contentType(ContentType.JSON).when()
                .headers("X-Auth-Token", "e051043b86624518a57a263f9388d198").get(URI + endPoint);

        Assert.assertEquals("Status code doesn't match in positive scenario"
                ,200,response.statusCode());
    }

    @Test
    public void secondTest(){
        String URI = "https://api.football-data.org/v2";
        String endPoint = "/teams/12";

        Response response = RestAssured.given().contentType(ContentType.JSON).when()
                .get(URI + endPoint);

        Assert.assertEquals("Validate without token doesn't pass"
                ,403,response.statusCode());
    }

    @Test
    public void thirdTest(){
        RestAssured.baseURI = "https://api.football-data.org/v2";
        RestAssured.basePath = "/teams/12";
    }
}
