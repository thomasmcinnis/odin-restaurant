export default function renderDetails(venue) {
    const VIEW_NAME = 'About';
    const { about, phone, location, hours, notes } = venue;

    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-section');

    const sectionHeader = document.createElement('h2');
    sectionHeader.classList.add('center');
    sectionHeader.textContent = VIEW_NAME;

    const venueBlurb = document.createElement('p');
    venueBlurb.classList.add('venue-blurb');
    venueBlurb.classList.add('center');
    venueBlurb.textContent = about;

    
    const infoGrid = document.createElement('div');
    infoGrid.classList.add('info-grid');
    
    const infoObject = { location, hours, notes, phone };
    const infoKeys = Object.keys(infoObject);

    infoKeys.forEach((key) => {
        const infoItem = document.createElement('p');
        infoItem.classList.add('info-key');
        infoItem.textContent = key;

        const infoValue = document.createElement('p');
        infoValue.classList.add('info-value');
        infoValue.textContent = infoObject[key];

        infoGrid.appendChild(infoItem);
        infoGrid.appendChild(infoValue);
    });

    aboutSection.appendChild(sectionHeader);
    aboutSection.appendChild(venueBlurb);
    aboutSection.appendChild(infoGrid);
    return aboutSection;
}
