package testAPI;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import org.junit.Assert;
import org.junit.Test;
import testAPI.apiModel.ResponseBod;

import java.util.List;

public class TestAPIstep_defs {

    @Test
    public void firstTest() {
        RestAssured.baseURI = "https://api.football-data.org/";
        RestAssured.basePath = "/v2";
        String token = "e051043b86624518a57a263f9388d198";

        Response response = RestAssured.given().contentType(ContentType.JSON).when()
                .headers("X-Auth-Token", token).get("/teams/12");

        response.then().log().all().assertThat().statusCode(200);

    }

    @Test
    public void secondTest() {
        String URI = "https://api.football-data.org/v2";
        String endPoint = "/teams/12";

        Response response = RestAssured.given().contentType(ContentType.JSON).when()
                .get(URI + endPoint);

        Assert.assertEquals("Validate without token doesn't pass"
                , 403, response.statusCode());
    }

    @Test
    public void thirdTest() throws Exception {
        RestAssured.baseURI = "https://api.football-data.org/";
        RestAssured.basePath = "v2";
        String token = "e051043b86624518a57a263f9388d198";

        Response response = RestAssured.given().contentType(ContentType.JSON).when()
                .headers("X-Auth-Token", token).get("/teams/12");

        JsonPath jp = response.jsonPath();
        List<Object> list = jp.getList("squad");

        Assert.assertTrue("squad member less than 20", list.size() >= 20);

    }
}
