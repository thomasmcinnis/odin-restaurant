import './style.css';

// DATA IMPORTS
import venues from 'Data/venues.json';
import menues from 'Data/menus.json';

// COMPONENT IMPORTS
import getHero from 'Components/renderHero';
import getMenu from 'Components/renderMenu';
import getAbout from 'Components/renderAbout';

//------------------

let currVenue = 0;

(function createVenueNav() {
    const nav = document.getElementById('venue-nav');

    const list = document.createElement('ul');

    const renderItems = () => {
        // Remove existing nav items
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        // Add nav items for each venue adding "is-current" if active item
        venues.forEach((item, index) => {
            const { name } = item;
            const listItem = document.createElement('li');
            listItem.setAttribute('id', index);
            listItem.textContent = name;

            if (index == currVenue) {
                listItem.classList.add('is-current');
            }

            list.appendChild(listItem);
        });
    };

    const handleMenuClick = (event) => {
        const item = event.target;
        if (!item.id || item.id == currVenue) return;

        currVenue = item.id;
        updateContent();
        renderItems();
    };

    list.addEventListener('click', handleMenuClick);

    renderItems();

    nav.appendChild(list);
})();

function updateContent() {
    const content = document.getElementById('content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const heroView = getHero(venues[currVenue]);
    const aboutView = getAbout(venues[currVenue]);
    const menuView = getMenu(menues[currVenue].menu);

    content.appendChild(heroView);
    content.appendChild(aboutView);
    content.appendChild(menuView);
}

updateContent(currVenue);
