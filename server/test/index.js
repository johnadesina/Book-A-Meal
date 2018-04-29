import { expect } from 'chai';
import { should } from 'chai';
import supertest from 'supertest';
import app from '../app';


const request = supertest(app);

const getmenuUrl = '/api/v1/menus';
const getAmenuUrl = '/api/v1/menus/1';
const addMenuUrl = '/api/v1/menus';



const getmealUrl = '/api/v1/meals';
const getAmealUrl = '/api/v1/meals/1';
const addMealUrl = '/api/v1/meals';
const editMealUrl = '/api/v1/meals';
const editMealUrl1 = '/api/v1/meals/1';
const deleteMealUrl = '/api/v1/meals/1';




const getorderUrl = '/api/v1/orders';
const getAorderUrl = '/api/v1/orders/1';
const addorderUrl = '/api/v1/orders';
const editorderUrl1 = '/api/v1/orders/1';



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




//meal routes test

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



//meal controller test

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



//order routes test

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



describe('Edit a order', () => {
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




//order controller test

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

