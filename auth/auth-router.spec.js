require("dotenv").config();
const request = require("supertest");
const server = require("../api/server");

describe("Auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
});

describe("index route", () => {
  it("should return an OK status code from the index route", async () => {
    const expectedStatusCode = 200;

    // do a get request to our api (server.js) and inspect the response
    const response = await request(server).get("/");

    expect(response.status).toEqual(expectedStatusCode);
  });
  it("should return a JSON object from the index route", async () => {
    const expectedBody = { message: "Welcome to Dad Jokes" };

    const response = await request(server).get("/");

    expect(response.body).toEqual(expectedBody);
  });

  it("should return a JSON object from the index route", async () => {
    const response = await request(server).get("/");

    expect(response.type).toEqual("application/json");
  });
});
describe("Server", function() {
  it("Should use the testing environment", function() {
    expect(process.env.DB_ENV).toBe("development");
  });
});
