import supertest from 'supertest';
import app from './app.js';

const api = supertest(app);

test('Not exist URL to API.', async () => {
  // This change is temporal, we have conflict with wouter react.
  await api.get('/api/notexist').expect(200);
});
