import Component from '../Component.js';
import Header from './Header.js';

class SubmitApp extends Component {
    onRender(dom) {
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
    } 

    renderHTML() {
        return /*html*/` 
        <form>
        <p>Name</p><input type="text">
        <p>Is it clear?</p><input type="checkbox">
        <p>Color</p><input type="text">
        <p>Density</p><input type="number">
        <p>Type</p><input type="text">
        <p>Image path</p><input type="text">
        <input type="submit" value="Submit" class="submit">
        </form>
        `;
    }
}

export default SubmitApp;