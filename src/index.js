/* eslint-disable no-console */
import './index.scss';

let str = '';
const all = (data) => {
  const element = document.getElementsByTagName('h2');
  const message = 'hello'.concat(' ', data);
  element[0].innerText = message;
};

function handleChange(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  all(name);
  str = '';
  document.getElementById('name').value = '';
}

function handleKey(e) {
  const char = String.fromCharCode(e.keyCode);
  str = str.concat(char);
  document.getElementById('out').innerText = str;
}

document.getElementById('sub').addEventListener('click', handleChange);
document.getElementById('name').addEventListener('keypress', handleKey);
