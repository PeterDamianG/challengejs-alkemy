import supertest from 'supertest';
import app from '../app.js';
import prisma from '../config/prisma.js';

const api = supertest(app);

afterAll(async (done) => {
  await prisma.$disconnect();
  done();
});

describe('/src/api/users.js - Users Create API', () => {
  test('Create a user success.', async () => {
    try {
      await prisma.user.delete({
        where: { email: 'testingcreateuser@gmail.com' },
      });
    } catch (e) {
      console.log(e);
    }
    await api
      .post('/api/users')
      .send({
        email: 'testingcreateuser@gmail.com',
        password: 'testingcreateuser',
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('Invalid format email or password.', async () => {
    await api
      .post('/api/users')
      .send({ email: 'emailtest.com', password: 'e' })
      .expect('Content-Type', /json/)
      .expect(406, {
        error: 'Invalid Format Email or Password',
      });
  });

  test('A fail to try create an existing user.', async () => {
    await api
      .post('/api/users')
      .send({ email: 'emailtest@gmail.com', password: 'nuevopass' })
      .expect('Content-Type', /json/)
      .expect(409);
  });
});

describe('/src/api/users.js - Get Records from user API', () => {
  test('Get records of user with token Authorization.', async () => {
    const { body } = await api
      .post('/api/login')
      .send({ email: 'emailtest@gmail.com', password: 'emailtest' });

    await api
      .get('/api/users')
      .set('Content-Type', 'application/json')
      .set('Authorization', `bearer ${body.token}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test('Get records of user without token Authorization.', async () => {
    await api
      .get('/api/users')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(409);
  });

  test('Get records of user with invalid token Authorization.', async () => {
    await api
      .get('/api/users')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsdGVzdDE1QGdtYWlsLmNvbSIsImlkIjoiYWJjOGNkNGUtMGJlOC00ZmNhLTk3YjctMjAzZGE4MTQ2OTFhIiwiaWF0IjoxNjE5MzgyNDc0fQ.wuII5U9ocwEe18IKROlTAQLFEHBtbi88qiDLu0_Akwk',
      )
      .expect('Content-Type', /json/)
      .expect(409);
  });
});
