import Component from '../Component.js';
import MineralItem from './MineralItem.js';

class OneMineral extends Component {
    onRender(dom) {
        const minerals = this.props.minerals;
        minerals.forEach(mineral => {
            const props = { mineral: mineral };
            const mineralItem = new MineralItem(props);
            const mineralItemDOM = mineralItem.renderDOM();
            dom.appendChild(mineralItemDOM);
        });

    }

    renderHTML() {
        
        return /*html*/`
            <ul class="cards"></ul>
        `;
    }
}

export default OneMineral;