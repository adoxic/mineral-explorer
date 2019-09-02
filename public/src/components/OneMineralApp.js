import Component from '../Component.js';
import Header from '../components/Header.js';
import OneMineral from './OneMineral.js';
import { getMineral } from '../../src/services/mineral-api.js';

class OneMineralApp extends Component {
    onRender(dom) {
        
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
        const listSection = dom.querySelector('.list-section');
        const list = new OneMineral({ minerals: [] });
        const listDOM = list.renderDOM();
        listSection.appendChild(listDOM);

        getMineral(1)
            .then(minerals => {
                list.update({ minerals });
            });
            

    }
    renderHTML() {
        return /*html*/`
        <div>
        <!-- header goes here -->
            <main>
                <section class="list-section"></section>
            </main>
        </div>
        `;
    }
}

export default OneMineralApp;
