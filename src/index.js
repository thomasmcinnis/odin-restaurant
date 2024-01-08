import './style.css';

// DATA IMPORTS
import venues from 'Data/venues.json';
import menues from 'Data/menues.json';

// COMPONENT IMPORTS
import getHero from 'Components/renderHero';
import getMenu from 'Components/renderMenu';
import getDetails from 'Components/renderDetails';

//------------------

let currVenue = 0;

(function createMenu() {
    const nav = document.getElementById('venue-nav');
    
    const list = document.createElement('ul');
    
    const handleMenuClick = (event) => {
        const item = event.target;
        if (!item.id) return;
    
        const index = item.id;
        currVenue = index;
        updateContent(index);
    }

    venues.forEach((item, index) => {
    const { name } = item;
        const listItem = document.createElement('li');
        listItem.setAttribute('id', index);
        listItem.textContent = name;

        listItem.addEventListener('click', handleMenuClick);

        list.appendChild(listItem);
    });

    nav.appendChild(list);
})();

function updateContent(index) {
    const content = document.getElementById('content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const heroView = getHero(venues[index]);
    const menuView = getMenu(menues[index].menu);
    const detailsView = getDetails(venues[index]);

    content.appendChild(heroView);
    content.appendChild(menuView);
    // content.appendChild(detailsView);
}

updateContent(currVenue);
