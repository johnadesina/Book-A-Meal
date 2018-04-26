import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
const getorderUrl = '/api/v1/orders';
const getAorderUrl = '/api/v1/orders/1';
const addorderUrl = '/api/v1/orders';
const editorderUrl1 = '/api/v1/orders/1';


describe('API Integration Tests', () => {
  describe('Get All Orders', () => {
    it('return 200 for successful', (done) => {
      request.get(getorderUrl)
      .send()
      .end((err, res) => {
      	expect(res.status).to.equal(200);
      	done();
      });
   });
 


describe('Add a New Meal Option', () => {
  it('return 200 for successful', (done) => {
      request.post(addorderUrl)
        .send({
                  orderid: 1,
  mealOp1:'rice with fish',
  mealOp2:'yam and egg',
  mealOp3:'rice with beef', 
  total:'6000'
                        })
        .end((err, res) => 
        {
        expect(res.status).to.equal(200);
        done();
            });
      });
    });

describe('Gets a specific  Order', () => {
  it('return 200 for successful get', (done) => {
    request.get(getAorderUrl)
    .send()
    .end((err, res) => 
        {
          expect(res.status).to.equal(200);
          done();
            });
      });
    });



describe('Edit a Meal Option', () => {
  it('return 200 for successful update', (done) => {
    request.put(editorderUrl1)
    .send({
      mealOp1:'rice with beef',
  mealOp2:'yam and fish',
  mealOp3:'rice with fish', 
  total:'7000'
          })
    .end((err, res) => 
        {
          expect(res.status).to.equal(200);
          done();
            });
      });
    });












 });
});
