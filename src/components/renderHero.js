

export default function renderHero(venue) {
    const { name, description, phone, location, hours, notes } = venue;

    const imageName = name.toLowerCase();

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero-section');

    const heading = document.createElement('h1');
    heading.textContent = name;
    heading.classList.add('hero-heading')

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('hero-img')

    const img = new Image();
    img.src = require(`Images/${imageName}-hero.jpg`);

    imgContainer.appendChild(img);

    heroSection.appendChild(heading);
    heroSection.appendChild(imgContainer);

    return heroSection;
}
