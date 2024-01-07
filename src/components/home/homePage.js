import heroImage from './hero.png'



export default function getHome() {
    const heroText = 'Asia'
    const container = document.createElement('section');
    container.classList.add('hero-section');

    const sectionHeader = document.createElement('h1');
    sectionHeader.textContent = heroText;

    const img = new Image();
    img.src = heroImage;

    container.appendChild(sectionHeader);
    container.appendChild(img);

    return container
}