import Header from '../src/components/Header.js';

const test = QUnit.test;

QUnit.module('Render Component HTML');

test('renders header', assert => {
    
    const expected = /*html*/`    <header class="header">
    <h1>Welcome to the Mineral Library</h1>
    <nav class="nav">
    <a href="./index.html">Home</a>
    <a href="./submit.html">Submit a Mineral</a>
    <a href="./view-one.html">Detail View</a>
    </nav>
</header>`;

    // act
    
    const header = new Header;
    const html = header.renderHTML();
    // assert
    assert.htmlEqual(html, expected);
});

