
var BASE = 'http://localhost:4000/api'
// const HEROKU = 'https://ordr-development.herokuapp.com/api';
const HEROKU = '';


const DEV = true;

if(!DEV) {
    BASE = HEROKU;
}

export { BASE }