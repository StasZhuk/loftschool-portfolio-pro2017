const $ = require('jquery');
const flip = require('../modules/flip');
const parallax = require('../modules/parallax');
const preloader = require('../modules/page-preloader');
const validate = require('../modules/index-validate.js');

flip();
parallax();
preloader();
validate();