import Component from '../Component.js';
import Header from './Header.js';
import SubmitForm from './SubmitForm.js';
import { getTypes } from '../services/mineral-api.js';

class SubmitApp extends Component {
    onRender(dom) {
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const main = dom.querySelector('main');
        
        getTypes()
            .then(types => {
                const submitForm = new SubmitForm({ types });
                main.appendChild(submitForm.renderDOM());
                
            });


    } 

    renderHTML() {
        return /*html*/` 
        <div>
            <main>
            </main>
         </div>
        `;
    }
}

export default SubmitApp;