import { response } from "express";
import app from "./../app.js";

const request = require('supertest');

describe("POST /", () => {
  it("Quick test", () => {
    expect(1).toBe(1);
  });

  it("Response with JSON body contains the city name and the temperature. and status 200", () => {
    return request(app)
      .post('/weather')
      .send({ cityName: 'nijmegen' })
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response =>{
        expect(response.body.weatherText).toContain('nijmegen');
      })
  });

  it("Response with JSON body City is not found!, and status 404 to the invalid body", () => {
    request(app)
      .post('/weather')
      .expect('Content-Type', /json/)
      .expect(404)
      .then(response =>{
        expect(response.body.weatherText).toEqual('City is not found!');
      })
  });

  
});
