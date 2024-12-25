// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
//alert('Hello from preload script!');

const {popup} = require('./popup');

const test = popup.issuepopup();

console.log(test);
