import OneMineralApp from './components/OneMineralApp.js';

const root = document.getElementById('root');
const oneMineralApp = new OneMineralApp();

const dom = oneMineralApp.renderDOM();

root.appendChild(dom);