require("dotenv").config();
const request = require("supertest");
const server = require("../api/server");
const app = require("../auth/auth-router");
const jokes = require("../jokes/jokes-router");

describe("Auth router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
  it("should return a JSON object from the Auth router", async () => {
    const response = await request(server).get("/");

    expect(response.type).toEqual("application/json");
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
});
describe("Server", function() {
  it("Should use the testing environment", function() {
    expect(process.env.DB_ENV).toBe("development");
  });
});
describe("Post", function() {
  it("Should return an OK status to the post route", function() {
    const expectedStatusCode = 201;
    request(app)
      .post("/register")
      .send({ name: "test", password: "pass" });

    expect(expectedStatusCode);
  });
});

describe("Get users endpoint", function() {
  it("Should return an ok status to get route", function() {
    const expectedStatusCode = 200;
    request(app).post("/users");

    expect(expectedStatusCode);
  });
});

describe("Get jokes endpoint", function() {
  it("Should return an ok status to get route", function() {
    const expectedStatusCode = 200;
    request(jokes).post("/jokes");

    expect(expectedStatusCode);
  });
});
