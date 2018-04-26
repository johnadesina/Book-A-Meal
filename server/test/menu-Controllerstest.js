import { expect } from 'chai';
import { should } from 'chai';
import supertest from 'supertest';
import app from '../app';


const request = supertest(app);


describe('find menus', () => {
    it('should get menus', (done) => {
      request.get(`/api/v1/menus`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('find menus', () => {
    it('should get a specific menu', (done) => {
      request.get(`/api/v1/menus/1`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});


describe('Set menu', () => {
    it('should add a menu', (done) => {
      request.post('/api/v1/menus')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
});