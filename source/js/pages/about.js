const $ = require('jquery');
const burger = require('../modules/burger');
const preloader = require('../modules/page-preloader');
const circles = require('../modules/circle-animation');

preloader();
burger();
circles();