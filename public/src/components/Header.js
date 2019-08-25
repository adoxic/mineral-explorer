import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header class="header">
        <h1>Welcome to the Mineral Library</h1>
        <nav class="nav">
            <p>Home</p>
            <p>Library</p>
            <p>Submit Mineral</p>
        </nav>
</header>
        `;
    }
}

export default Header;