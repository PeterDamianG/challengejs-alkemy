import supertest from 'supertest';
import app from '../app.js';
import prisma from '../config/prisma.js';

const api = supertest(app);

const getToken = async () => {
  const { body } = await api
    .post('/api/login')
    .send({ email: 'emailtest@gmail.com', password: 'emailtest' });

  return body.token;
};

afterAll(async (done) => {
  await prisma.$disconnect();
  done();
});

describe('/src/api/records.js - Record handlers API', () => {
  let token;
  let newRecord;

  beforeAll(async () => {
    token = await getToken();
  });

  test('Create a record with correct values.', async () => {
    newRecord = await api
      .post('/api/records')
      .set('Content-Type', 'application/json')
      .set('Authorization', `bearer ${token}`)
      .send({
        concept: 'Record in testing mode',
        amount: 3500,
        category: 'House',
        isIncome: false,
        date: '2016-01-01',
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('Create a record without correct values.', async () => {
    await api
      .post('/api/records')
      .set('Content-Type', 'application/json')
      .set('Authorization', `bearer ${token}`)
      .send({
        concept: 2000,
        amount: '3500',
        category: 'TRoreaj',
        isIncome: 'false',
        date: '2016-01-01',
      })
      .expect('Content-Type', /json/)
      .expect(406, {
        error: 'Invalid Request Format.',
      });
  });

  test('Updated a record with correct values.', async () => {
    await api
      .patch(`/api/records/${newRecord.body.id}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', `bearer ${token}`)
      .send({
        concept: 'Record in testing mode for update',
        amount: 2500,
        category: 'House',
        isIncome: false,
        date: '2016-02-01',
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('Updated a record without correct values.', async () => {
    await api
      .patch('/api/records/4')
      .set('Content-Type', 'application/json')
      .set('Authorization', `bearer ${token}`)
      .send({
        concept: 'Record in testing mode for update',
        amount: 2500,
        category: 'House',
        isIncome: false,
        date: '2016-02-01',
      })
      .expect('Content-Type', /json/)
      .expect(401);
  });

  test('Delete a record.', async () => {
    await api
      .delete(`/api/records/${newRecord.body.id}`)
      .set('Content-Type', 'application/json')
      .set('Authorization', `bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('Delete a record without correct user.', async () => {
    await api
      .delete('/api/records/4')
      .set('Content-Type', 'application/json')
      .set('Authorization', `bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(401);
  });
});
