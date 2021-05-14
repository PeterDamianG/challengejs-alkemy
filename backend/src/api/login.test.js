import supertest from 'supertest';
import app from '../app.js';
import prisma from '../config/prisma.js';

const api = supertest(app);

afterAll(async (done) => {
  await prisma.$disconnect();
  done();
});

describe('/src/api/login.js - Login API', () => {
  test('Login Success.', async () => {
    await api
      .post('/api/login')
      .send({ email: 'emailtest@gmail.com', password: 'emailtest' })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('Invalid email or password.', async () => {
    await api
      .post('/api/login')
      .send({ email: 'emailtest@gmail2.com', password: 'emailtest23' })
      .expect('Content-Type', /json/)
      .expect(401, {
        error: 'Invalid Email or Password',
      });
  });
});
