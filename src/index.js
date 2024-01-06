import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = 'Hello, World! what is happening';
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
