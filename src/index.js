import './style.css';
require('bootstrap-icons/font/bootstrap-icons.css');
import start from './nav'
import './../assets/culture.png'
import './../assets/linters.png'
import './../assets/todo.png'

const img1 = document.querySelector('.img1')
img1.src = './../assets/culture.png'
const img2 = document.querySelector('.img2')
img2.src = './../assets/zattix_store.png'
const img3 = document.querySelector('.img3')
img3.src = './../assets/todo.png'
const img4 = document.querySelector('.img4')
img4.src = './../assets/linters.png'

start()
