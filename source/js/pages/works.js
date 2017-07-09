const $ = require('jquery');
const burger = require('../modules/burger');
const preloader = require('../modules/page-preloader');
const formValid = require('../modules/form-validate');
const slider = require('../modules/slider');

preloader();
burger();
formValid();
slider();