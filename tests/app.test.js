const request = require('supertest');
const express = require('express');
const app = require('../app'); // Ajusta la ruta según sea necesario

describe('GET /', () => {
  it('should return 200 OK and render the index page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Top 5 Trending Movies');
  });
});

describe('GET /movies', () => {
  it('should return 200 OK and render the movies page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Trending Movies');
  });
});

describe('GET /series', () => {
  it('should return 200 OK and render the series page', async () => {
    const res = await request(app).get('/series');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Trending Series');
  });
});

describe('GET /trailer', () => {
  it('should return 302 and redirect if no title is provided', async () => {
    const res = await request(app).get('/trailer');
    expect(res.statusCode).toEqual(302);
  });

});

