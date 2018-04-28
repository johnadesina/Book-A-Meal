import { expect } from 'chai';
import { should } from 'chai';
import supertest from 'supertest';
import app from '../app';


const request = supertest(app);


describe('find meals', () => {
    it('should get meals', (done) => {
      request.get(`/api/v1/meals`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('find meals', () => {
    it('should get a specific meal', (done) => {
      request.get(`/api/v1/meals/1`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('Post meal', () => {
    it('should add a meal', (done) => {
      request.post('/api/v1/meals')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('Edit meal', () => {
    it('should be able to edit a meal', (done) => {
      request.put('/api/v1/meals/1')
        .send({ name: 'beef with rice' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('Edit meal', () => {
    it('should be able to edit a meal that is not there', (done) => {
      request.put('/api/v1/meals/3')
        .send({ name: 'beef with rice' })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
});

describe('Delete meal', () => {
    it('should be able to delete a meal', (done) => {
      request.delete('/api/v1/meals/1')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('Delete meal', () => {
    it('should be able to delete a meal that is not there', (done) => {
      request.delete('/api/v1/meals/3')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
});



