import { describe, expect } from "@jest/globals";
import { Express } from 'express-serve-static-core';
import request from 'supertest';
import { createCommentsServer } from "../server";

let server: Express;

beforeAll(async() => {
  server = createCommentsServer();
});

describe("Get /posts", () => {
  it("should return 200", done => {
    request(server)
      .get("/posts")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if( err) return done(err);
        expect(res.body).toMatchObject({});
        done();
      })
  });

  // it("should return 201 & valid response", done => {
  //   request(server)
  //     .post("/posts?title=New%20Title")
  //     .expect("Content-Type", /json/)
  //     .expect(201)
  //     .end((err, res) => {
  //       if(err) return done(err);

  //       expect(res.body).toMatchObject(
  //         {id: expect.anything(), title: expect.stringMatching(/New Title/)}
  //       );
  //       done();
  //     })
  // });
});
