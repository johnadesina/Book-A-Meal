import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
const getmealUrl = '/api/v1/meals';
const getAmealUrl = '/api/v1/meals/1';
const addMealUrl = '/api/v1/meals';
const editMealUrl = '/api/v1/meals';
const editMealUrl1 = '/api/v1/meals/1';
const deleteMealUrl = '/api/v1/meals/1';


describe('API Integration Tests', () => {
  describe('Get All Meal Options', () => {
    it('return 200 for successful', (done) => {
      request.get(getmealUrl)
      .send()
      .end((err, res) => {
      	expect(res.status).to.equal(200);
      	done();
      });
   });
 


describe('Add a New Meal Option', () => {
  it('return 200 for successful', (done) => {
      request.post(addMealUrl)
        .send({
                  id: 1,
                  name: 'Beef with plaintain',
                  Price: '1000'
                        })
        .end((err, res) => 
        {
        expect(res.status).to.equal(200);
        done();
            });
      });
    });

describe('Gets a specific Meal Option', () => {
  it('return 200 for successful get', (done) => {
    request.get(getAmealUrl)
    .send()
    .end((err, res) => 
        {
          expect(res.status).to.equal(200);
          done();
            });
      });
    });


describe('Edit a Meal Option', () => {
  it('return 404 for unsuccessful update', (done) => {
    request.put(editMealUrl)
    .send({
      name: 'yam with plaintain',
      Price: '1000'
          })
    .end((err, res) => 
        {
          expect(res.status).to.equal(404);
          done();
            });
      });
    });

describe('Edit a Meal Option', () => {
  it('return 200 for successful update', (done) => {
    request.put(editMealUrl1)
    .send({
      name: 'yam with plaintain',
      Price: '1000'
          })
    .end((err, res) => 
        {
          expect(res.status).to.equal(200);
          done();
            });
      });
    });

describe('Delete a Meal Option', () => {
  it('return 200 for successful delete', (done) => {
    request.delete(deleteMealUrl)
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
