// ES6
//import './styles.css';
import {adder} from './utils.js';


export class AppLoader {
    constructor(){
        this.loaded = false;
    }
    setLoaded() {
        this.loaded = true;
    }
}

// CommonJS
// var utils = require('./utils.js')
// console.log(utils.adder(1,2))
// console.log(utils)

console.log(adder(1,2))

