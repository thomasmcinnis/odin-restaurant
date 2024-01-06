import './style.css';
import getMenu from 'Components/menu/menuPage';

// where we selectively render content
const content = document.getElementById('content');

const view = getMenu();
const viewName = 'Menu';

const sectionHeader = document.createElement('h2');
sectionHeader.textContent = viewName;

content.appendChild(sectionHeader);
content.appendChild(view);
