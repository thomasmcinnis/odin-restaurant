import './style.css';
import getMenu from 'Components/menu/menuPage';
import getHome from './components/home/homePage';

const homeView = getHome();
const menuView = getMenu();


// where we selectively render content
const content = document.getElementById('content');

content.appendChild(menuView);
