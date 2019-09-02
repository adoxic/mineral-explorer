import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header class="header">
        <h1>Welcome to the Mineral Library</h1>
        <nav class="nav">
        <a href="./index.html">Home</a>
        <a href="./submit.html">Submit a Mineral</a>
        <a href="./view-one.html">Detail View</a>
        </nav>
</header>
        `;
    }
}

export default Header;