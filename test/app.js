import { expect } from 'chai';
import request from 'supertest';
import app from '../src';

describe('Index API', () => {
  it('should test the base URL successfully', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body.message).to.equal('Welcome To Movie API')
        done();
      });
  });
});