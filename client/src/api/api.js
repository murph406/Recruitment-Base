
var BASE = 'http://localhost:8888/api'
// const HEROKU = 'https://ordr-development.herokuapp.com/api';
const HEROKU = '';


const DEV = true;

if(!DEV) {
    BASE = HEROKU;
}

export { BASE }