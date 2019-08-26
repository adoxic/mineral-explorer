import SubmitApp from './components/SubmitApp.js';

const root = document.getElementById('root');
const app = new SubmitApp();

const dom = app.renderDOM();

root.appendChild(dom);