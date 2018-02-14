var assert = require('assert');
var request = require('supertest');
var app = require('./app');


describe('GET todolist', function() {
    it('return alltodolist', function(done) {
        request(app)
          .get('/assignee/todolist')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    });
  });

  describe('GET todolist', function() {
      it('return allussers', function(done) {
          request(app)
            .get('/creator/users')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
              if (err) return done(err);
              done();
        });
      });
    });


    describe('DELETE todolist', function() {
        it('add todo', function(done) {
            request(app)
              .delete('/creator/todolist/0?token=Pippo')
              .set('Accept', 'application/json')
              .expect(200)
              .end(function(err, res) {
                if (err) return done(err);
                done();
          });
        });
        it('id is not a number', function(done) {
            request(app)
              .delete('/creator/todolist/hello?token=Pippo')
              .set('Accept', 'application/json')
              .expect(400)
              .end(function(err, res) {
                if (err) return done(err);
                done();
          });
        });
      });
