import Component from '../Component.js';
import Header from '../components/Header.js';
import MineralList from './MineralList.js';
import { getMinerals } from '../../src/services/mineral-api.js';

class App extends Component {
    onRender(dom) {
        
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
        const listSection = dom.querySelector('.list-section');
        const list = new MineralList({ minerals: [] });
        const listDOM = list.renderDOM();
        listSection.appendChild(listDOM);

        getMinerals()
            .then(minerals => {
                list.update({ mineral: minerals });
            });
            

    }
    renderHTML() {
        return /*html*/`
        <div>
        <!-- header goes here -->
            <div class="nav">
                <form class="search">
                </form>
                <div class="sort">
                    <p>Filter Minerals by Type</p>
                    <section class="filter">
                    </section>
                </div>
            </div>
            <main>
                <section class="options-section"></section>
                <section class="list-section"></section>
            </main>
        </div>
        `;
    }
}

export default App;