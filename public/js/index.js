/* eslint-disable */
// const login = require('./login');
const login = require('./login');
// const displayMap = require('./mapBox');
// import { displayMap } from './mapBox';
// import axios from 'axios';

//DOM elements
const mapBox = document.getElementById('map');
const button = document.querySelector('.subtn');

if (mapBox) {
  const locations = mapBox.dataset.locations;
  displayMap(locations);
}

if (button) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('hey man is this working');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

/* ////eslint-disable */
// ////eslint-disable-next-line node/no-unsupported-features/es-syntax
