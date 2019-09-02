import Component from '../Component.js';
import { addMineral } from '../services/mineral-api.js';

class SubmitForm extends Component {
    onRender(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const mineral = {
                name: formData.get('name'),
                clear: formData.get('isClear') === 'on',
                color: formData.get('color'),
                density: +formData.get('density'),
                type: +formData.get('Crystal Shape'),
                imgSrc: formData.get('imgPath')
            };

            addMineral(mineral)
                .then((/*saved*/) => {
                    window.location = `view-one.html`;
                });
        });
        
    }
    renderHTML() {
        const types = this.props.types;
        const optionsList = types.map(type => {
            return /*html*/`
                <option name="type" value="${type.id}">${type.name}</option>
            `;
        });

        return /*html*/` 
        <form class="forms">
            <p>Name</p><input type="text" name="name">
            <p>Is it clear?</p><input type="checkbox" name="isClear">
            <p>Color</p><input type="text" name="color">
            <p>Density</p><input type="number" name="density">
            <p>Crystal Type</p><select name="Crystal Shape">
                <option selected="selected" value="all">All Structures</option>
                ${optionsList}
            </select> 
            <p>Image path</p><input type="text" name="imgPath">
            <input type="submit" value="Submit" class="submit">
        </form>
        `;
    }
}



export default SubmitForm;