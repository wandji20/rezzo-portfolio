import './style.css';
import start from './nav';
import '../assets/culture.png';
import '../assets/linters.png';
import '../assets/todo.png';

import '../assets/bootstrap.jpeg';
import '../assets/css.png';
import '../assets/html.png';
import '../assets/ruby.jpeg';
import '../assets/rubyrails.png';
import '../assets/js.jpg';


require('bootstrap-icons/font/bootstrap-icons.css');

const img1 = document.querySelector('.img1');
img1.src = './../assets/culture.png';
const img2 = document.querySelector('.img2');
img2.src = './../assets/zattix_store.png';
const img3 = document.querySelector('.img3');
img3.src = './../assets/todo.png';
const img4 = document.querySelector('.img4');
img4.src = './../assets/linters.png';

document.querySelector('.bootstrap-img').src = './../assets/bootstrap.jpeg'
document.querySelector('.css-img').src = './../assets/css.png'
document.querySelector('.js-img').src = './../assets/js.jpg'
document.querySelector('.ruby-img').src = './../assets/ruby.jpeg'
document.querySelector('.html-img').src = './../assets/html.png'
document.querySelector('.ror-img').src = './../assets/rubyrails.png'
start();
