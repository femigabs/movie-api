import { expect } from 'chai';
import request from 'supertest';
import nock from 'nock';
import app from '../../src';
import omdbBatmanResponse from '../mock/omdb.batman.response.json';
import omdbGuardiansResponse from '../mock/omdb.guardians.response.json';
import { config } from '../../src/config';

const premiumToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQzNCwibmFtZSI6IlByZW1pdW0gSmltIiwicm9sZSI6InByZW1pdW0iLCJpYXQiOjE2NDgyODQ4NDAsImlzcyI6Imh0dHBzOi8vd3d3Lm5ldGd1cnUuY29tLyIsInN1YiI6IjQzNCJ9.F123OLjyLgiSorz4NYayXokoJUz6MKJZQce5bchjB1k';
const basicToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY0ODI4NDk3NywiaXNzIjoiaHR0cHM6Ly93d3cubmV0Z3VydS5jb20vIiwic3ViIjoiMTIzIn0.-98HwrtEG_qdIdvxHYDEVoO75dXc1JEhZYIfFZGw-xs';
const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY0ODIzNzY1MiwiZXhwIjoxNjQ4MjM5NDUyLCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.BZmCOV56v-fCSryndnFZ2fCwYc0wNB6f0cnzJWbti4g';

describe('Movie APIs', () => {
    describe('CREATE MOVIE', () => {
        const body1 = {
            title: 'batman'
        };
        const body2 = {
            title: 'Guardians of the Galaxy Vol. 2'
        };
        it('should throw error if token is not valid', (done) => {
            nock('https://www.omdbapi.com')
                .post(`/?t=${body1.title}&apikey=${config.OMDB_API_KEY}`)
                .reply(200, omdbBatmanResponse);

            request(app)
                .post('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${expiredToken}`)
                .send(body1)
                .expect(401)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Access denied, a valid access token is required');
                    expect(res.body.status).to.equal('fail');
                    done();
                });
        });
        it('should create movie for premium user', (done) => {
            nock('https://www.omdbapi.com')
                .post(`/?t=${body1.title}&apikey=${config.OMDB_API_KEY}`)
                .reply(200, omdbBatmanResponse);

            request(app)
                .post('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${premiumToken}`)
                .send(body1)
                .expect(201)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Movie created successfully');
                    expect(res.body.code).to.equal(201);
                    done();
                });
        });

        it('should create movie for basic user', (done) => {
            nock('https://www.omdbapi.com')
                .post(`/?t=${body2.title}&apikey=${config.OMDB_API_KEY}`)
                .reply(200, omdbGuardiansResponse);

            request(app)
                .post('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${basicToken}`)
                .send(body2)
                .expect(201)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Movie created successfully');
                    expect(res.body.code).to.equal(201);
                    done();
                });
        })

        it('should create movie for basic user', (done) => {
            nock('https://www.omdbapi.com')
                .post(`/?t=${body2.title}&apikey=${config.OMDB_API_KEY}`)
                .reply(200, omdbGuardiansResponse);

            request(app)
                .post('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${basicToken}`)
                .send(body2)
                .expect(201)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Movie created successfully');
                    expect(res.body.code).to.equal(201);
                    done();
                });
        })

        it('should create movie for basic user', (done) => {
            nock('https://www.omdbapi.com')
                .post(`/?t=${body2.title}&apikey=${config.OMDB_API_KEY}`)
                .reply(200, omdbGuardiansResponse);

            request(app)
                .post('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${basicToken}`)
                .send(body2)
                .expect(201)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Movie created successfully');
                    expect(res.body.code).to.equal(201);
                    done();
                });
        })

        it('should create movie for basic user', (done) => {
            nock('https://www.omdbapi.com')
                .post(`/?t=${body2.title}&apikey=${config.OMDB_API_KEY}`)
                .reply(200, omdbGuardiansResponse);

            request(app)
                .post('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${basicToken}`)
                .send(body2)
                .expect(201)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Movie created successfully');
                    expect(res.body.code).to.equal(201);
                    done();
                });
        })

        it('should create movie for basic user', (done) => {
            nock('https://www.omdbapi.com')
                .post(`/?t=${body2.title}&apikey=${config.OMDB_API_KEY}`)
                .reply(200, omdbGuardiansResponse);

            request(app)
                .post('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${basicToken}`)
                .send(body2)
                .expect(201)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Movie created successfully');
                    expect(res.body.code).to.equal(201);
                    done();
                });
        })

        it('should create movie for basic user', (done) => {
            nock('https://www.omdbapi.com')
                .post(`/?t=${body2.title}&apikey=${config.OMDB_API_KEY}`)
                .reply(200, omdbGuardiansResponse);

            request(app)
                .post('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${basicToken}`)
                .send(body2)
                .expect(401)
                .end((err, res) => {
                    expect(res.body.message).to.equal('User limit has been exceeded for the month');
                    expect(res.body.status).to.equal('fail');
                    done();
                });
        })
    });

    describe('GET USER MOVIES', () => {
        it('should fetch movies for premium user', (done) => {
            request(app)
                .get('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${premiumToken}`)
                .expect(200)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Movie fetched successfully');
                    expect(res.body.code).to.equal(200);
                    expect(res.body.data).to.be.an('array');
                    done();
                });
        });

        it('should create movie for basic user', (done) => {
            request(app)
                .get('/movies')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${basicToken}`)
                .expect(201)
                .end((err, res) => {
                    expect(res.body.message).to.equal('Movie fetched successfully');
                    expect(res.body.code).to.equal(200);
                    expect(res.body.data).to.be.an('array');
                    done();
                });
        })
    });
});