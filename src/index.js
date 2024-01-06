import './style.css';
import getMenu from './menuPage';

// where we selectively render content
const content = document.getElementById('content');

const menu = getMenu();

content.appendChild(menu);
