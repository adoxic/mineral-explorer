import Component from '../Component.js';
import MineralItem from './MineralItem.js';

class MineralList extends Component {
    onRender(dom) {
        const minerals = this.props.minerals;
        console.log(this.props);
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

export default MineralList;