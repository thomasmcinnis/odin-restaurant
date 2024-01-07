import './style.css';

// DATA IMPORTS
import venues from 'Data/venues.json';
import menues from 'Data/menues.json';

// COMPONENT IMPORTS
import heroSection from 'Components/renderHero';
import menuSection from 'Components/renderMenu';

// ---

const currVenue = 0;

const venueView = heroSection(venues[currVenue]);
const menuView = menuSection(menues[currVenue].menu);

// where we selectively render content
const content = document.getElementById('content');

content.appendChild(venueView);
content.appendChild(menuView);

// Function to replace content takes the dom element to empty and a new child to append
function replaceContent(parentNode, newView) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }

    parentNode.appendChild(newView);
}
