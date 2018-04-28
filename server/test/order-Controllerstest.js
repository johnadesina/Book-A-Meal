import { expect } from 'chai';
import { should } from 'chai';
import supertest from 'supertest';
import app from '../app';


const request = supertest(app);


describe('find orders', () => {
    it('should get orders', (done) => {
      request.get(`/api/v1/orders`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('find order', () => {
    it('should get a specific order', (done) => {
      request.get(`/api/v1/orders/1`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('find order', () => {
    it('should not get an order thats not there', (done) => {
      request.get(`/api/v1/orders/4`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
});


describe('Post order', () => {
    it('should add a order', (done) => {
      request.post('/api/v1/orders')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('Edit order', () => {
    it('should be able to edit a order', (done) => {
      request.put('/api/v1/orders/1')
        .send({ mealOp2:'yam and gizzard' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('Edit order', () => {
    it('should not be able to edit a order that is not there', (done) => {
      request.put('/api/v1/orders/3')
        .send({ mealOp2:'egg and gizzard' })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
});





