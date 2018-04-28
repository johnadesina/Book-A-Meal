import { expect } from 'chai';
import { should } from 'chai';
import supertest from 'supertest';
import app from '../app';


const request = supertest(app);

const getmenuUrl = '/api/v1/menus';
const getAmenuUrl = '/api/v1/menus/1';
const addMenuUrl = '/api/v1/menus';


//menu controller test


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


//menu routes test

describe('API Integration Tests', () => {
  describe('Get All Menus', () => {
    it('return 200 for successful', (done) => {
      request.get(getmenuUrl)
      .send()
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
   });
 


describe('Add a Menu', () => {
  it('return 200 for successful', (done) => {
      request.post(addMenuUrl)
        .send({
                 menuid: 1,
  menuName: 'good menu',
  Date: '20/4/2017',
  foodOp: [{
    mealid: 1,
    mealName: 'carrots with chips',
    mealPrice: '1000'
  },
  {
    mealid: 2,
    mealName: 'fish with rice',
        mealPrice: '1500'
  }]
                        })
        .end((err, res) => 
        {
        expect(res.status).to.equal(200);
        done();
            });
      });
    });

describe('Gets a specific Menu', () => {
  it('return 200 for successful get', (done) => {
    request.get(getAmenuUrl)
    .send()
    .end((err, res) => 
        {
          expect(res.status).to.equal(200);
          done();
            });
      });
    });
 });
});
