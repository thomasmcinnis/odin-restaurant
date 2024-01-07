import './style.css';
import getMenu from 'Components/menu/menuPage';
import getHome from './components/home/homePage';

const homeView = getHome();
const menuView = getMenu();

let isHome = true;

// where we selectively render content
const content = document.getElementById('content');
content.appendChild(isHome ? homeView : menuView);

// Function to remove current content... content, and replace with new.. content
function replaceContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    isHome = !isHome;

    content.appendChild(isHome ? homeView : menuView);
}

// Create a button to switch between menu and home
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Home and Welcome Page';

toggleButton.addEventListener('click', replaceContent);

const body = document.body;

body.insertBefore(toggleButton, content);
