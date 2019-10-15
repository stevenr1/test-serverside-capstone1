const { expect } = require('mocha');
const supertest = require('supertest');

global.expect = expect;
global.supertest = supertest;