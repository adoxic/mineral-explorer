import Component from '../Component.js';

class MineralItem extends Component {
    renderHTML() {
        const mineral = this.props.mineral;

        return /*html*/`
        <li class="card">
            <h2>${mineral.name}</h2>
            <img src="${mineral.img_src}">
            <p>color: ${mineral.color}</p>
            <p>clear: ${mineral.clear}</p>
            <p>density: ${mineral.density}</p>
            <p>type: ${mineral.density}</p>
        </li>
        `;
    }

}


export default MineralItem;