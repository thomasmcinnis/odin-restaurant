export default function renderHero(venue) {
    const { name, description } = venue;
    const imageName = name.toLowerCase();

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero-section');

    const heading = document.createElement('h1');
    heading.textContent = name;
    heading.classList.add('hero-heading');

    const subheading = document.createElement('p');
    subheading.textContent = description;
    subheading.classList.add('hero-subheading');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('hero-img');

    const img = new Image();
    img.src = require(`Images/${imageName}-hero.jpg`);

    imgContainer.appendChild(img);

    heroSection.appendChild(heading);
    heroSection.appendChild(imgContainer);
    heroSection.appendChild(subheading);

    return heroSection;
}
